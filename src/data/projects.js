export const projects = [
  {
    year: "2024",
    title: "Retrieval-Augmented Generation with PDF files and OCR",
    tags: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "FAISS",
      "PyMuPDF",
      "Tesseract OCR",
    ],
    description:
      "A Python library for Retrieval-Augmented Generation (RAG) that extracts text from PDFs and performs OCR on images. It uses Llama 3.2 for embeddings and answer generation, FAISS for similarity search, PyMyPDF for PDF processing, and pytesseract for OCR.",
    image: "/rag-scheme.jpg",
    links: [{ label: "Code", url: "https://github.com/antoninomariarizzo/rag", icon: "github" }],
  },
  {
    year: "2024",
    title: "Template Matching: Detecting Packages on the Shelves",
    tags: ["Python", "Numpy", "OpenCV"],
    description:
      "A Python library for Template Matching that leverages SIFT features, Nearest Neighbor matching, and RANSAC-based geometric validation with homography estimation.",
    image: "/template-matching.gif",
    links: [
      {
        label: "Code",
        url: "https://github.com/antoninomariarizzo/template-matching",
        icon: "github",
      },
    ],
  },
  {
    year: "2024",
    title: "Change Detection: pyCUSUM and pyCPM",
    tags: ["Python", "Numpy", "Scipy"],
    description:
      "A Python library to address the Change Detection problem using the CUSUM and CPM methods, implemented with NumPy and SciPy. The CPM implementation closely matches the R version, providing a solid alternative for Python users.",
    image: "/cusum_cpm_resized.gif",
    links: [
      {
        label: "Code",
        url: "https://github.com/antoninomariarizzo/change-detection",
        icon: "github",
      },
    ],
  },
  {
    year: "2019",
    title: "Toco Bot",
    tags: ["Arduino", "Fuzzy Logic"],
    description:
      "Designed and built a robot that dances to Bossa Nova music, controlled by an Arduino and a fuzzy system that moves servo motors in sync with the rhythm of the music.",
    image: "/tocobot-skeleton.gif",
    links: [
      {
        label: "Report",
        url: "https://drive.google.com/file/d/1g5fq95qlo_1dloH74DszwDxfkZpJKq39/view?usp=sharing",
        icon: "drive",
      },
      {
        label: "Video",
        url: "https://www.youtube.com/watch?v=7dLt9-UjPa0&t=33s",
        icon: "youtube",
      },
    ],
  },
];
