from pathlib import Path
import sys
pdf_path = Path('Portfolio LANY S.pdf')
print('exists', pdf_path.exists(), 'size', pdf_path.stat().st_size if pdf_path.exists() else None)
try:
    import pypdf
    reader = pypdf.PdfReader(str(pdf_path))
    print('pages', len(reader.pages))
    text = '\n'.join(page.extract_text() or '' for page in reader.pages)
    print(text[:20000])
except Exception as e:
    print('ERROR', repr(e))
    try:
        import PyPDF2
        reader = PyPDF2.PdfReader(str(pdf_path))
        print('pages', len(reader.pages))
        text = '\n'.join(page.extract_text() or '' for page in reader.pages)
        print(text[:20000])
    except Exception as e2:
        print('ERROR2', repr(e2))
