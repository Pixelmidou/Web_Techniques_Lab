/* ==========================================================================
   PHP HOST CONFIGURATION (ONLY EDIT THIS SECTION!)
   --------------------------------------------------------------------------
   Option 1 — Lab on GitHub Pages + PHP demos on another host:
     Set PHP_HOST_URL = "https://your-php-site.example.com" (no trailing slash)
     Keep SAME_SERVER_PHP = false.

   Option 2 — Whole lab uploaded directly to a PHP/MySQL host:
     Leave PHP_HOST_URL = "" and set SAME_SERVER_PHP = true.
     All PHP/MySQL demos will run LIVE inside the modal & show raw PHP code!
   ========================================================================== */

const PHP_HOST_URL = "";
const SAME_SERVER_PHP = true;

// Optional: override any individual demo URL if needed
const PHP_LINKS = {};

/* ==========================================================================
   ALL 38 DEMOS CATALOG
   ========================================================================== */

const DEMOS = [
    // --- 1. Async Concepts ---
    {
        id: "async-restaurant-1",
        category: "Async Concepts",
        title: "Async Restaurant — Method 1 (callbacks)",
        type: "static",
        level: "Beginner",
        desc: "Order dishes with setTimeout callbacks. Multiple orders run in parallel without blocking each other.",
        tags: ["setTimeout", "callbacks", "non-blocking"],
        basePath: "demos/Async_Concepts/",
        files: [
            { name: "Async_Restaurant_Method1.html", path: "demos/Async_Concepts/Async_Restaurant_Method1.html" }
        ]
    },
    {
        id: "async-restaurant-2",
        category: "Async Concepts",
        title: "Async Restaurant — Method 2 (Promise + async/await)",
        type: "static",
        level: "Beginner",
        desc: "Same restaurant simulation rewritten with a delay() Promise helper and async/await for cleaner code.",
        tags: ["Promise", "async/await", "await delay()"],
        basePath: "demos/Async_Concepts/",
        files: [
            { name: "Async_Restaurant_Method2.html", path: "demos/Async_Concepts/Async_Restaurant_Method2.html" }
        ]
    },
    {
        id: "async-primes",
        category: "Async Concepts",
        title: "Prime Numbers without freezing the UI",
        type: "static",
        level: "Intermediate",
        desc: "Compute many primes while yielding control to the browser event loop every 1000 iterations so the page stays responsive.",
        tags: ["single-threaded JS", "yielding", "await new Promise"],
        basePath: "demos/Async_Concepts/",
        files: [
            { name: "Async_Prime_Numbers.html", path: "demos/Async_Concepts/Async_Prime_Numbers.html" }
        ]
    },

    // --- 2. AJAX (XMLHttpRequest) ---
    {
        id: "ajax-text",
        category: "AJAX (XHR)",
        title: "AJAX Intro — load a text file (XHR)",
        type: "static",
        level: "Beginner",
        desc: "First XHR demo: open a GET request, handle onload, and display responseText from sample.txt.",
        tags: ["XMLHttpRequest", "open()", "onload", "responseText"],
        basePath: "demos/AJAX/AJAX_Intro_Text_Files/",
        files: [
            { name: "ajax1.html", path: "demos/AJAX/AJAX_Intro_Text_Files/ajax1.html" },
            { name: "sample.txt", path: "demos/AJAX/AJAX_Intro_Text_Files/sample.txt", readOnly: true }
        ]
    },
    {
        id: "ajax-json",
        category: "AJAX (XHR)",
        title: "AJAX — load JSON files (XHR)",
        type: "static",
        level: "Beginner",
        desc: "Load local user.json and users.json files with XHR, parse with JSON.parse(), and render lists dynamically.",
        tags: ["JSON.parse", "user.json", "dynamic HTML"],
        basePath: "demos/AJAX/AJAX_JSON_Files/",
        files: [
            { name: "ajax2.html", path: "demos/AJAX/AJAX_JSON_Files/ajax2.html" },
            { name: "user.json", path: "demos/AJAX/AJAX_JSON_Files/user.json", readOnly: true },
            { name: "users.json", path: "demos/AJAX/AJAX_JSON_Files/users.json", readOnly: true }
        ]
    },
    {
        id: "ajax-github-api",
        category: "AJAX (XHR)",
        title: "AJAX — GitHub API (XHR)",
        type: "static",
        level: "Intermediate",
        desc: "Fetch live public user data from api.github.com/users with XHR and display avatars, IDs, and logins.",
        tags: ["external API", "CORS", "JSON"],
        basePath: "demos/AJAX/AJAX_API/",
        files: [
            { name: "ajax3.html", path: "demos/AJAX/AJAX_API/ajax3.html" }
        ]
    },
    {
        id: "ajax-php-get",
        category: "AJAX (XHR)",
        title: "AJAX + PHP — GET request",
        type: "php",
        level: "Beginner",
        desc: "Intercept form submit with preventDefault() and send input via XHR GET query string to ajax4.php.",
        tags: ["XHR GET", "preventDefault()", "PHP $_GET"],
        basePath: "demos/AJAX/AJAX_PHP/",
        files: [
            { name: "ajax4_get.html", path: "demos/AJAX/AJAX_PHP/ajax4_get.html", readOnly: true },
            { name: "ajax4.php", path: "demos/AJAX/AJAX_PHP/ajax4.php", readOnly: true }
        ]
    },
    {
        id: "ajax-php-post",
        category: "AJAX (XHR)",
        title: "AJAX + PHP — POST request",
        type: "php",
        level: "Beginner",
        desc: "Send first and last name with XHR POST and form-urlencoded headers to ajax4.php without reloading.",
        tags: ["XHR POST", "setRequestHeader", "PHP $_POST"],
        basePath: "demos/AJAX/AJAX_PHP/",
        files: [
            { name: "ajax4_post.html", path: "demos/AJAX/AJAX_PHP/ajax4_post.html", readOnly: true },
            { name: "ajax4.php", path: "demos/AJAX/AJAX_PHP/ajax4.php", readOnly: true }
        ]
    },
    {
        id: "ajax-mysql-subscribers",
        category: "AJAX (XHR)",
        title: "AJAX + PHP/MySQL — subscribers list",
        type: "php",
        level: "Intermediate",
        desc: "Query all subscribers from MySQL with prepared statements, return JSON, and render cards in the DOM.",
        tags: ["MySQLi", "json_encode", "prepared statements"],
        basePath: "demos/AJAX/AJAX_PHP_MYSQL/1/",
        files: [
            { name: "ajax5.html", path: "demos/AJAX/AJAX_PHP_MYSQL/1/ajax5.html", readOnly: true },
            { name: "ajax5.php", path: "demos/AJAX/AJAX_PHP_MYSQL/1/ajax5.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },
    {
        id: "ajax-mysql-employees",
        category: "AJAX (XHR)",
        title: "AJAX + PHP/MySQL — employees by department",
        type: "php",
        level: "Intermediate",
        desc: "PHP renders the department dropdown from MySQL; selecting a department fetches matching employees via AJAX.",
        tags: ["change event", "WHERE ?", "dynamic filter"],
        basePath: "demos/AJAX/AJAX_PHP_MYSQL/2/",
        files: [
            { name: "ajax6.php", path: "demos/AJAX/AJAX_PHP_MYSQL/2/ajax6.php", readOnly: true },
            { name: "ajax6_data.php", path: "demos/AJAX/AJAX_PHP_MYSQL/2/ajax6_data.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },
    {
        id: "ajax-mysql-loadmore",
        category: "AJAX (XHR)",
        title: "AJAX + PHP/MySQL — Load More students",
        type: "php",
        level: "Intermediate",
        desc: "Incrementally load more student rows from MySQL on each click using SQL LIMIT.",
        tags: ["SQL LIMIT", "incremental load", "MySQLi"],
        basePath: "demos/AJAX/AJAX_PHP_MYSQL/3/",
        files: [
            { name: "ajax7.php", path: "demos/AJAX/AJAX_PHP_MYSQL/3/ajax7.php", readOnly: true },
            { name: "ajax7_data.php", path: "demos/AJAX/AJAX_PHP_MYSQL/3/ajax7_data.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },
    {
        id: "ajax-mysql-prevnext",
        category: "AJAX (XHR)",
        title: "AJAX + PHP/MySQL — Prev / Next pager",
        type: "php",
        level: "Intermediate",
        desc: "Navigate student records one by one using Previous / Next buttons backed by LIMIT ?, 1 and COUNT(*).",
        tags: ["pagination", "COUNT(*)", "LIMIT offset"],
        basePath: "demos/AJAX/AJAX_PHP_MYSQL/4/",
        files: [
            { name: "ajax8.php", path: "demos/AJAX/AJAX_PHP_MYSQL/4/ajax8.php", readOnly: true },
            { name: "ajax8_data.php", path: "demos/AJAX/AJAX_PHP_MYSQL/4/ajax8_data.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },
    {
        id: "ajax-mysql-pagination",
        category: "AJAX (XHR)",
        title: "AJAX + PHP/MySQL — numbered pagination",
        type: "php",
        level: "Intermediate",
        desc: "Dynamically generate numbered page buttons from the total row count and jump to any page via AJAX.",
        tags: ["page buttons", "LIMIT ?, 2", "MySQLi"],
        basePath: "demos/AJAX/AJAX_PHP_MYSQL/5/",
        files: [
            { name: "ajax9.php", path: "demos/AJAX/AJAX_PHP_MYSQL/5/ajax9.php", readOnly: true },
            { name: "ajax9_data.php", path: "demos/AJAX/AJAX_PHP_MYSQL/5/ajax9_data.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },

    // --- 3. Fetch API ---
    {
        id: "fetch-promise-syntax",
        category: "Fetch API",
        title: "Promise syntax — resolve / reject",
        type: "static",
        level: "Beginner",
        desc: "Create a Promise manually, then handle it twice: with .then()/.catch() and with async/await try/catch.",
        tags: ["new Promise", "resolve", "reject", "try/catch"],
        basePath: "demos/fetch_api/",
        files: [
            { name: "simple_promise_syntax.html", path: "demos/fetch_api/simple_promise_syntax.html" }
        ]
    },
    {
        id: "fetch-text-promise",
        category: "Fetch API",
        title: "Fetch text file — Promise style",
        type: "static",
        level: "Beginner",
        desc: "The XHR text-file task redone with fetch().then(response => response.text()).",
        tags: ["fetch", ".then", "response.text()"],
        basePath: "demos/fetch_api/fetch_api_intro_text_file/",
        files: [
            { name: "fetchapi1_promise.html", path: "demos/fetch_api/fetch_api_intro_text_file/fetchapi1_promise.html" },
            { name: "sample.txt", path: "demos/fetch_api/fetch_api_intro_text_file/sample.txt", readOnly: true }
        ]
    },
    {
        id: "fetch-text-await",
        category: "Fetch API",
        title: "Fetch text file — Async/Await style",
        type: "static",
        level: "Beginner",
        desc: "Same text-file task using async/await — compare directly with the Promise chaining version.",
        tags: ["async function", "await fetch", "await .text()"],
        basePath: "demos/fetch_api/fetch_api_intro_text_file/",
        files: [
            { name: "fetchapi1_await.html", path: "demos/fetch_api/fetch_api_intro_text_file/fetchapi1_await.html" },
            { name: "sample.txt", path: "demos/fetch_api/fetch_api_intro_text_file/sample.txt", readOnly: true }
        ]
    },
    {
        id: "fetch-json-promise",
        category: "Fetch API",
        title: "Fetch JSON file — Promise style",
        type: "static",
        level: "Beginner",
        desc: "Load users.json with fetch and .json(), then render each user with ES6 forEach() and template literals.",
        tags: ["response.json()", "forEach", "template literals"],
        basePath: "demos/fetch_api/fetch_api_JSON/",
        files: [
            { name: "fetchapi2_promise.html", path: "demos/fetch_api/fetch_api_JSON/fetchapi2_promise.html" },
            { name: "users.json", path: "demos/fetch_api/fetch_api_JSON/users.json", readOnly: true }
        ]
    },
    {
        id: "fetch-json-await",
        category: "Fetch API",
        title: "Fetch JSON file — Async/Await style",
        type: "static",
        level: "Beginner",
        desc: "Same local JSON loading and rendering task written cleanly with async/await.",
        tags: ["await .json()", "forEach"],
        basePath: "demos/fetch_api/fetch_api_JSON/",
        files: [
            { name: "fetchapi2_await.html", path: "demos/fetch_api/fetch_api_JSON/fetchapi2_await.html" },
            { name: "users.json", path: "demos/fetch_api/fetch_api_JSON/users.json", readOnly: true }
        ]
    },
    {
        id: "fetch-api-get-promise",
        category: "Fetch API",
        title: "Fetch external API GET — Promise style",
        type: "static",
        level: "Intermediate",
        desc: "GET posts from the JSONPlaceholder REST API using fetch().then().",
        tags: ["external API", "GET", ".then()"],
        basePath: "demos/fetch_api/fetch_api_external_api/",
        files: [
            { name: "fetchapi3_get_promise.html", path: "demos/fetch_api/fetch_api_external_api/fetchapi3_get_promise.html" }
        ]
    },
    {
        id: "fetch-api-get-await",
        category: "Fetch API",
        title: "Fetch external API GET — Async/Await style",
        type: "static",
        level: "Intermediate",
        desc: "Same external REST API GET request rewritten with async/await.",
        tags: ["external API", "GET", "async/await"],
        basePath: "demos/fetch_api/fetch_api_external_api/",
        files: [
            { name: "fetchapi3_get_await.html", path: "demos/fetch_api/fetch_api_external_api/fetchapi3_get_await.html" }
        ]
    },
    {
        id: "fetch-api-post-promise",
        category: "Fetch API",
        title: "Fetch external API POST — Promise style",
        type: "static",
        level: "Intermediate",
        desc: "POST a JSON payload to JSONPlaceholder with custom headers and display the server response.",
        tags: ["POST", "JSON.stringify", "headers"],
        basePath: "demos/fetch_api/fetch_api_external_api/",
        files: [
            { name: "fetchapi3_post_promise.html", path: "demos/fetch_api/fetch_api_external_api/fetchapi3_post_promise.html" }
        ]
    },
    {
        id: "fetch-api-post-await",
        category: "Fetch API",
        title: "Fetch external API POST — Async/Await style",
        type: "static",
        level: "Intermediate",
        desc: "Same JSON POST request using async/await with live formatted response output.",
        tags: ["POST", "JSON.stringify", "async/await"],
        basePath: "demos/fetch_api/fetch_api_external_api/",
        files: [
            { name: "fetchapi3_post_await.html", path: "demos/fetch_api/fetch_api_external_api/fetchapi3_post_await.html" }
        ]
    },
    {
        id: "fetch-albums-promise",
        category: "Fetch API",
        title: "Albums & Photos — Nested Promises",
        type: "static",
        level: "Intermediate",
        desc: "Fetch albums, then fire a nested fetch() per album to count its photos from JSONPlaceholder.",
        tags: ["nested fetch", "REST API", ".catch()"],
        basePath: "demos/fetch_api/fetch_api_self_work/1/",
        files: [
            { name: "fetchapi4_promise.html", path: "demos/fetch_api/fetch_api_self_work/1/fetchapi4_promise.html" }
        ]
    },
    {
        id: "fetch-albums-await",
        category: "Fetch API",
        title: "Albums & Photos — Sequential Async/Await",
        type: "static",
        level: "Intermediate",
        desc: "Sequential async/await fetch loop with a loading indicator while albums and photo counts load.",
        tags: ["sequential await", "loading state", "REST API"],
        basePath: "demos/fetch_api/fetch_api_self_work/1/",
        files: [
            { name: "fetchapi4_await.html", path: "demos/fetch_api/fetch_api_self_work/1/fetchapi4_await.html" }
        ]
    },
    {
        id: "fetch-php-post",
        category: "Fetch API",
        title: "Fetch + PHP — POST values",
        type: "php",
        level: "Beginner",
        desc: "Send URL-encoded form parameters to fetchapi5.php using Fetch POST and render the PHP response.",
        tags: ["fetch POST", "urlencoded", "PHP $_POST"],
        basePath: "demos/fetch_api/fetch_api_self_work/2/",
        files: [
            { name: "fetchapi5.html", path: "demos/fetch_api/fetch_api_self_work/2/fetchapi5.html", readOnly: true },
            { name: "fetchapi5.php", path: "demos/fetch_api/fetch_api_self_work/2/fetchapi5.php", readOnly: true }
        ]
    },
    {
        id: "fetch-mysql-students",
        category: "Fetch API",
        title: "Fetch + PHP/MySQL — Full Students CRUD & Sort",
        type: "php",
        level: "Advanced",
        desc: "Complete Fetch + MySQL app with List/Table toggle, 8 sort options, pagination, and Add / Modify / Delete forms.",
        tags: ["CRUD", "ORDER BY whitelist", "pagination", "MySQLi"],
        basePath: "demos/fetch_api/fetch_api_self_work/3/",
        files: [
            { name: "fetchapi6.html", path: "demos/fetch_api/fetch_api_self_work/3/fetchapi6.html", readOnly: true },
            { name: "fetchapi6.php", path: "demos/fetch_api/fetch_api_self_work/3/fetchapi6.php", readOnly: true },
            { name: "fetchapi6_2.php", path: "demos/fetch_api/fetch_api_self_work/3/fetchapi6_2.php", readOnly: true },
            { name: "fetchapi6_3.php", path: "demos/fetch_api/fetch_api_self_work/3/fetchapi6_3.php", readOnly: true },
            { name: "db.php", path: "demos/db.php", readOnly: true }
        ]
    },

    // --- 4. jQuery ---
    {
        id: "jquery-selectors",
        category: "jQuery",
        title: "jQuery Selectors & Syntax",
        type: "static",
        level: "Beginner",
        desc: "Core jQuery syntax $(selector).action(), $(document).ready(), and element, ID, class, and attribute selectors.",
        tags: ["$(document).ready", "selectors", ".hide()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "1.html", path: "demos/jQuery/1.html" }
        ]
    },
    {
        id: "jquery-events",
        category: "jQuery",
        title: "jQuery Events & .on()",
        type: "static",
        level: "Beginner",
        desc: "Attach multiple mouse event handlers (click and dblclick) to one element with .on() and update CSS.",
        tags: [".on()", "click", "dblclick", ".css()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "2.html", path: "demos/jQuery/2.html" }
        ]
    },
    {
        id: "jquery-hide-show",
        category: "jQuery",
        title: "jQuery Hide & Show Effects",
        type: "static",
        level: "Beginner",
        desc: "Smoothly hide and reveal elements over a 1-second interval with .hide(1000) and .show(1000).",
        tags: [".hide()", ".show()", "duration"],
        basePath: "demos/jQuery/",
        files: [
            { name: "3.html", path: "demos/jQuery/3.html" }
        ]
    },
    {
        id: "jquery-toggle",
        category: "jQuery",
        title: "jQuery Toggle Visibility",
        type: "static",
        level: "Beginner",
        desc: "Alternate between hidden and visible states using a single button and .toggle(1000).",
        tags: [".toggle()", ":button"],
        basePath: "demos/jQuery/",
        files: [
            { name: "4.html", path: "demos/jQuery/4.html" }
        ]
    },
    {
        id: "jquery-fading",
        category: "jQuery",
        title: "jQuery Fading Effects",
        type: "static",
        level: "Beginner",
        desc: "Animate opacity across 4 staggered boxes using fadeIn(), fadeOut(), fadeToggle(), and fadeTo().",
        tags: [".fadeIn()", ".fadeOut()", ".fadeToggle()", ".fadeTo()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "5.html", path: "demos/jQuery/5.html" }
        ]
    },
    {
        id: "jquery-sliding",
        category: "jQuery",
        title: "jQuery Sliding Panel",
        type: "static",
        level: "Beginner",
        desc: "Build a collapsible dropdown panel using .slideToggle(), .slideDown(), and .slideUp().",
        tags: [".slideToggle()", ".slideDown()", ".slideUp()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "6.html", path: "demos/jQuery/6.html" }
        ]
    },
    {
        id: "jquery-animate",
        category: "jQuery",
        title: "jQuery Animate, Chaining & Draggable",
        type: "static",
        level: "Intermediate",
        desc: "Custom CSS animations with relative values (+=), .stop(), callbacks, method chaining, and jQuery UI draggable.",
        tags: [".animate()", ".stop()", "chaining", ".draggable()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "7.html", path: "demos/jQuery/7.html" }
        ]
    },
    {
        id: "jquery-ui-accordion",
        category: "jQuery",
        title: "jQuery UI Accordion Widget",
        type: "static",
        level: "Beginner",
        desc: "Use jQuery UI and the Smoothness theme to turn structured headings and panels into an interactive accordion.",
        tags: ["jQuery UI", ".accordion()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "8.html", path: "demos/jQuery/8.html" }
        ]
    },
    {
        id: "jquery-dom",
        category: "jQuery",
        title: "jQuery DOM Management",
        type: "static",
        level: "Intermediate",
        desc: "Get/set text, HTML, inputs & attributes; prepend/append, before/after, remove/empty, and toggle CSS classes.",
        tags: [".text()", ".html()", ".attr()", ".append()", ".toggleClass()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "9.html", path: "demos/jQuery/9.html" }
        ]
    },
    {
        id: "jquery-custom-accordion",
        category: "jQuery",
        title: "Custom Accordion Showcase",
        type: "static",
        level: "Intermediate",
        desc: "Mini-project building a product feature accordion from scratch using slideToggle(), SVG state changes, and active cards.",
        tags: [".slideToggle()", "SVG icons", ".addClass()", ".siblings()"],
        basePath: "demos/jQuery/",
        files: [
            { name: "10.html", path: "demos/jQuery/10.html" }
        ]
    },
    {
        id: "jquery-ajax-load",
        category: "jQuery",
        title: "jQuery AJAX — .load() text file",
        type: "static",
        level: "Beginner",
        desc: "Load sample.txt asynchronously into a paragraph using jQuery .load() with success/error callback handling.",
        tags: [".load()", "callback", "jQuery AJAX"],
        basePath: "demos/jQuery/ajax/1/",
        files: [
            { name: "ajax1.html", path: "demos/jQuery/ajax/1/ajax1.html" },
            { name: "sample.txt", path: "demos/jQuery/ajax/1/sample.txt", readOnly: true }
        ]
    },
    {
        id: "jquery-ajax-get-post",
        category: "jQuery",
        title: "jQuery AJAX — $.get() & $.post()",
        type: "php",
        level: "Intermediate",
        desc: "Fetch static text via $.get() and send form data to sample.php via $.post() to update the DOM.",
        tags: ["$.get()", "$.post()", "PHP $_POST"],
        basePath: "demos/jQuery/ajax/2/",
        files: [
            { name: "ajax2.html", path: "demos/jQuery/ajax/2/ajax2.html", readOnly: true },
            { name: "sample.php", path: "demos/jQuery/ajax/2/sample.php", readOnly: true },
            { name: "sample.txt", path: "demos/jQuery/ajax/2/sample.txt", readOnly: true }
        ]
    }
];
