#!/usr/bin/env node

/**
 * PDF Processor using Anthropic Files API
 * 
 * This script uploads a PDF to Anthropic's Files API and processes it with Claude.
 * Requires ANTHROPIC_API_KEY in .env file.
 * 
 * Usage: node pdf-processor.mjs <pdf-path> <prompt>
 * Example: node pdf-processor.mjs raw-assets/document.pdf "Extract all tables and headers"
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import Anthropic, { toFile } from '@anthropic-ai/sdk';

class PDFProcessor {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is required');
    }
  }

  /**
   * Upload a PDF file to Anthropic's Files API
   * @param {string} pdfPath - Path to the PDF file
   * @returns {Promise<string>} - File ID from the API
   */
  async uploadPDF(pdfPath) {
    try {
      console.log(`Uploading PDF: ${pdfPath}`);
      
      // Check if file exists
      if (!fs.existsSync(pdfPath)) {
        throw new Error(`PDF file not found: ${pdfPath}`);
      }

      // Check file size (32MB limit)
      const stats = fs.statSync(pdfPath);
      const fileSizeInMB = stats.size / (1024 * 1024);
      if (fileSizeInMB > 32) {
        throw new Error(`PDF file too large: ${fileSizeInMB.toFixed(2)}MB (max 32MB)`);
      }

      // Upload to Files API (beta)
      const response = await this.anthropic.beta.files.upload({
        file: await toFile(fs.createReadStream(pdfPath), path.basename(pdfPath), { 
          type: 'application/pdf' 
        }),
        betas: ['files-api-2025-04-14']
      });

      console.log(`PDF uploaded successfully. File ID: ${response.id}`);
      return response.id;
    } catch (error) {
      console.error('Error uploading PDF:', error.message);
      throw error;
    }
  }

  /**
   * Process a PDF using Claude with a custom prompt
   * @param {string} fileId - File ID from the Files API
   * @param {string} prompt - Processing prompt for Claude
   * @returns {Promise<string>} - Claude's response
   */
  async processPDFWithPrompt(fileId, prompt) {
    try {
      console.log('Processing PDF with Claude...');
      
      const response = await this.anthropic.beta.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: prompt,
              },
              {
                type: 'document',
                source: {
                  type: 'file',
                  file_id: fileId,
                },
              },
            ],
          },
        ],
        betas: ['files-api-2025-04-14']
      });

      return response.content[0].text;
    } catch (error) {
      console.error('Error processing PDF with Claude:', error.message);
      throw error;
    }
  }

  /**
   * Upload and process a PDF in one operation
   * @param {string} pdfPath - Path to the PDF file
   * @param {string} prompt - Processing prompt for Claude
   * @returns {Promise<string>} - Claude's response
   */
  async uploadAndProcess(pdfPath, prompt) {
    try {
      const fileId = await this.uploadPDF(pdfPath);
      const result = await this.processPDFWithPrompt(fileId, prompt);
      
      // Optionally clean up the uploaded file
      // await this.anthropic.beta.files.delete(fileId);
      
      return result;
    } catch (error) {
      console.error('Error in upload and process:', error.message);
      throw error;
    }
  }

  /**
   * Clean up uploaded files (optional)
   * @param {string} fileId - File ID to delete
   */
  async deleteFile(fileId) {
    try {
      await this.anthropic.beta.files.delete(fileId);
      console.log(`Deleted file: ${fileId}`);
    } catch (error) {
      console.error('Error deleting file:', error.message);
    }
  }
}

// CLI Usage
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node pdf-processor.mjs <pdf-path> <prompt>');
    console.error('Example: node pdf-processor.mjs ./document.pdf "Summarize this document"');
    process.exit(1);
  }

  const [pdfPath, prompt] = args;
  
  try {
    const processor = new PDFProcessor();
    const result = await processor.uploadAndProcess(pdfPath, prompt);
    
    console.log('\n=== Claude\'s Response ===');
    console.log(result);
    
  } catch (error) {
    console.error('Failed to process PDF:', error.message);
    process.exit(1);
  }
}

// Export for use as a module
export { PDFProcessor };

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}