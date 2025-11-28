# ❝Quote Studio AI

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-Flask%20%7C%20JavaScript%20%7C%20CSS-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

**Quote Studio AI** is a modern, full-stack web application designed for content creators. It features a premium "Dark Glass" aesthetic and allows users to generate, edit, and share beautiful quote cards instantly.

![App Preview](/static/images/preview.jpg)

---

## ✨ Key Features

- **🎨 Premium UI:** A fully responsive, dark-mode interface featuring glassmorphism design.
- **⚡ Smart Generation:** Fetches quotes from an external API with a robust **Local Fallback System** (works offline).
- **✍️ Creator Mode:** Built-in text editor allows users to write their own quotes directly onto the canvas.
- **📸 Image Export:** One-click download to save quotes as high-quality PNGs (powered by `html2canvas`).
- **🔗 Social Hub:** Direct sharing integration for **X (Twitter), Facebook, WhatsApp, and Telegram**.
- **📱 Instagram Ready:** Automatically converts text-to-image for Instagram sharing.
- **👤 Developer Profile:** Interactive modal showcasing the creator's bio and skills.

## 🛠️ Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML5, CSS3 (Custom Glassmorphism), Vanilla JavaScript
- **Libraries:**
  - `html2canvas` (Image Generation)
  - `Lucide Icons` (SVG Icons)
  - `Google Fonts` (Inter & Roboto)

---

---
## 📂 Project Structure

## Qoute-Generator/
├── app.py                # Flask Backend & API Logic
├── requirements.txt      # Python Dependencies
├── static/
│   ├── css/
│   │   └── style.css     # Glassmorphism Styles & Animations
│   ├── js/
│   │   └── script.js     # Frontend Logic (Fetch, Edit, Share)
│   └── images/
│       ├── background.jpg # HD Background Asset
│       ├── preview.jpg    # Application Screenshot (For README)
│       └── favicon.png    # App Icon
└── templates/
    └── index.html        # Main Dashboard Interface

--
## 🚀 Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

-   Python 3.8+
-   `pip` (Python package installer)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/krissshnaverrrma/Qoute-Studio-AI.git](https://github.com/krissshnaverrrma/Qoute-Studio-AI.git)
    cd Book-Management-APP
    ```

2.  **Create a virtual environment** (recommended):
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    -   On Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    -   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(If `requirements.txt` doesn't exist, create it with `pip freeze > requirements.txt` after installing Flask, Flask-SQLAlchemy, Flask-Login, Flask-Mail, FPDF, Werkzeug, requests, python-dotenv (if used), secrets)*

## 🙋 Contact
Development
For questions or feedback, please reach out to:
* **Developer:** Krishna Verma
* **GitHub:** [https://github.com/krissshnaverrrma]
* **Linkedin** [https://www.linkedin.com/in/krishna-verma-43aa85315/]
* **Email:** [krishnav24-cs@sanskar.org]


---