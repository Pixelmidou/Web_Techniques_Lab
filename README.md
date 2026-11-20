# Web Techniques Lab

A personal collection of hands-on web development demos built to practice and showcase core front-end and full-stack techniques: **AJAX (XMLHttpRequest)**, **Asynchronous JavaScript**, **Fetch API & Promises**, **jQuery / jQuery UI**, and **PHP / MySQL**.

> **Try them live:** `https://web-techniques-lab.great-site.net`  
> An interactive lab interface is hosted separately so you can browse the source code and run the demos directly in the browser.

---

## Purpose

This repository focuses purely on the demo code itself—highlighting practical implementation of asynchronous requests, DOM manipulation, JSON/API consumption, and PHP/MySQL integration using prepared statements.

---

## Repository Structure

```text
Web_Techniques_Lab/
├── AJAX/
│   ├── AJAX_Intro_Text_Files/   # Loading local text files with XMLHttpRequest
│   ├── AJAX_JSON_Files/         # Parsing local single & array JSON files
│   ├── AJAX_API/                # Consuming the public GitHub Users API
│   ├── AJAX_PHP/                # XHR GET & POST form handling with PHP
│   └── AJAX_PHP_MYSQL/          # MySQLi queries: list, department filter, load more, pagination
├── Async_Concepts/              # Non-blocking prime computation & async timers (setTimeout vs async/await)
├── fetch_api/
│   ├── simple_promise_syntax.html
│   ├── fetch_api_intro_text_file/   # Fetch text (Promises & async/await)
│   ├── fetch_api_JSON/              # Fetch local JSON (Promises & async/await)
│   ├── fetch_api_external_api/      # GET & POST against JSONPlaceholder API
│   └── fetch_api_self_work/         # Nested API fetches, PHP POST & full MySQL CRUD/sorting/pagination
└── jQuery/
    ├── 1.html – 10.html         # Selectors, events, hide/show, fading, sliding, animations, jQuery UI, DOM & custom accordion
    └── ajax/                    # jQuery .load(), $.get(), and $.post() with PHP
```

---

## Technologies Covered

- **JavaScript (ES6+):** `XMLHttpRequest`, `Fetch API`, `Promises`, `async/await`, DOM manipulation, JSON
- **Libraries:** jQuery, jQuery UI
- **Backend & Database:** PHP, MySQL / MySQLi (prepared statements), server-side sorting & pagination
- **Markup & Styling:** HTML5, CSS3

---

## Running Locally

- **Static demos** (`AJAX` text/JSON/API, `Async_Concepts`, `fetch_api` static demos, `jQuery` 1–10 & `ajax/1`): open through any local server (e.g. VS Code Live Server or `python -m http.server`).
- **PHP & MySQL demos** (`AJAX_PHP`, `AJAX_PHP_MYSQL`, `fetch_api_self_work/2–3`, `jQuery/ajax/2`): place the repository inside a local PHP/MySQL environment such as **XAMPP** or **Laragon**, configure your database connection, and open via `http://localhost/`.

---

## Author

**Mohamed Khabou**  
Computer Science Student — Faculté des Sciences de Sfax (FSS), Sfax, Tunisia  
[GitHub](https://github.com/Pixelmidou) · [LinkedIn](https://linkedin.com/in/mohamedkhabou)
