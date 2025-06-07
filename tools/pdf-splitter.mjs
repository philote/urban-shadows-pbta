#!/usr/bin/env node

/**
 * PDF Splitter for large PDFs
 * Splits a PDF into smaller chunks of specified page count
 * Usage: node pdf-splitter.mjs <input-pdf> <pages-per-chunk>
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

class PDFSplitter {
  /**
   * Split a PDF into chunks using pdftk (if available) or ghostscript
   * @param {string} inputPdf - Path to input PDF
   * @param {number} pagesPerChunk - Number of pages per chunk (default: 100)
   * @param {string} outputDir - Output directory (default: same as input)
   */
  async splitPDF(inputPdf, pagesPerChunk = 100, outputDir = null) {
    try {
      if (!fs.existsSync(inputPdf)) {
        throw new Error(`Input PDF not found: ${inputPdf}`);
      }

      const inputDir = path.dirname(inputPdf);
      const inputName = path.basename(inputPdf, '.pdf');
      const outputDirectory = outputDir || inputDir;

      // Ensure output directory exists
      if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
      }

      console.log(`Splitting ${inputPdf} into chunks of ${pagesPerChunk} pages...`);

      // First, get the total number of pages
      const pageCount = await this.getPDFPageCount(inputPdf);
      console.log(`Total pages: ${pageCount}`);

      const chunks = Math.ceil(pageCount / pagesPerChunk);
      console.log(`Will create ${chunks} chunks`);

      // Split using ghostscript (more commonly available than pdftk)
      for (let i = 0; i < chunks; i++) {
        const startPage = i * pagesPerChunk + 1;
        const endPage = Math.min((i + 1) * pagesPerChunk, pageCount);
        const outputFile = path.join(outputDirectory, `${inputName}_part${i + 1}.pdf`);

        console.log(`Creating chunk ${i + 1}: pages ${startPage}-${endPage} -> ${outputFile}`);

        const gsCommand = `gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH -dSAFER -dFirstPage=${startPage} -dLastPage=${endPage} -sOutputFile="${outputFile}" "${inputPdf}"`;

        try {
          await execAsync(gsCommand);
          console.log(`✓ Created ${outputFile}`);
        } catch (error) {
          console.error(`Failed to create chunk ${i + 1}: ${error.message}`);
          throw error;
        }
      }

      console.log('PDF splitting completed successfully!');
      return chunks;

    } catch (error) {
      console.error('Error splitting PDF:', error.message);
      throw error;
    }
  }

  /**
   * Get the number of pages in a PDF
   */
  async getPDFPageCount(pdfPath) {
    try {
      // Try using ghostscript to get page count
      const command = `gs -q -dNODISPLAY -c "(${pdfPath}) (r) file runpdfbegin pdfpagecount = quit"`;
      const { stdout } = await execAsync(command);
      return parseInt(stdout.trim());
    } catch (error) {
      // Fallback: try with pdfinfo if available
      try {
        const command = `pdfinfo "${pdfPath}" | grep Pages | awk '{print $2}'`;
        const { stdout } = await execAsync(command);
        return parseInt(stdout.trim());
      } catch (fallbackError) {
        console.error('Could not determine page count. Ghostscript or pdfinfo required.');
        throw new Error('Cannot determine PDF page count. Please install ghostscript or poppler-utils.');
      }
    }
  }
}

// CLI Usage
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.error('Usage: node pdf-splitter.mjs <input-pdf> [pages-per-chunk] [output-dir]');
    console.error('Example: node pdf-splitter.mjs ./document.pdf 100');
    process.exit(1);
  }

  const [inputPdf, pagesPerChunk = 100, outputDir] = args;
  
  try {
    const splitter = new PDFSplitter();
    await splitter.splitPDF(inputPdf, parseInt(pagesPerChunk), outputDir);
  } catch (error) {
    console.error('Failed to split PDF:', error.message);
    process.exit(1);
  }
}

// Export for use as a module
export { PDFSplitter };

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}