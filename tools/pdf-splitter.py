#!/usr/bin/env python3

"""
PDF Splitter using PyPDF2
Splits a PDF into smaller chunks of specified page count
Usage: python pdf-splitter.py <input-pdf> <pages-per-chunk>
"""

import sys
import os
from pathlib import Path

try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    print("pypdf not found. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    from pypdf import PdfReader, PdfWriter

def split_pdf(input_path, pages_per_chunk=100, output_dir=None):
    """Split a PDF into chunks"""
    try:
        input_path = Path(input_path)
        if not input_path.exists():
            raise FileNotFoundError(f"Input PDF not found: {input_path}")

        if output_dir is None:
            output_dir = input_path.parent
        else:
            output_dir = Path(output_dir)
            output_dir.mkdir(parents=True, exist_ok=True)

        input_name = input_path.stem
        
        print(f"Splitting {input_path} into chunks of {pages_per_chunk} pages...")

        # Read the PDF
        reader = PdfReader(str(input_path))
        
        # Check if PDF is encrypted
        if reader.is_encrypted:
            print("PDF is encrypted. Attempting to decrypt with empty password...")
            # Try with empty password first
            if not reader.decrypt(""):
                print("Warning: PDF is encrypted and requires a password. Attempting to continue...")
        
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")

        chunks = (total_pages + pages_per_chunk - 1) // pages_per_chunk
        print(f"Will create {chunks} chunks")

        for i in range(chunks):
            start_page = i * pages_per_chunk
            end_page = min((i + 1) * pages_per_chunk, total_pages)
            
            output_file = output_dir / f"{input_name}_part{i + 1}.pdf"
            
            print(f"Creating chunk {i + 1}: pages {start_page + 1}-{end_page} -> {output_file}")

            # Create writer for this chunk
            writer = PdfWriter()
            
            # Add pages to this chunk
            for page_num in range(start_page, end_page):
                writer.add_page(reader.pages[page_num])
            
            # Write the chunk
            with open(output_file, 'wb') as output_pdf:
                writer.write(output_pdf)
            
            print(f"✓ Created {output_file}")

        print("PDF splitting completed successfully!")
        return chunks

    except Exception as error:
        print(f"Error splitting PDF: {error}")
        raise

def main():
    if len(sys.argv) < 2:
        print("Usage: python pdf-splitter.py <input-pdf> [pages-per-chunk] [output-dir]")
        print("Example: python pdf-splitter.py ./document.pdf 100")
        sys.exit(1)

    input_pdf = sys.argv[1]
    pages_per_chunk = int(sys.argv[2]) if len(sys.argv) > 2 else 100
    output_dir = sys.argv[3] if len(sys.argv) > 3 else None

    try:
        split_pdf(input_pdf, pages_per_chunk, output_dir)
    except Exception as error:
        print(f"Failed to split PDF: {error}")
        sys.exit(1)

if __name__ == "__main__":
    main()