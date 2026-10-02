# upay Support Suite (plain HTML + CSS + JS)

Files
- index.html  customer app (wallet + Customer Service: live chat, email, complaint with photo/voice)
- admin.html  admin console (live chat inbox with AI analysis, emails, complaints with photo/voice playback, customers, transactions, FAQ, policies, announcements)
- style.css   all styles
- app.js      ALL logic in one file: AI assistant, storage, customer app, live chat, admin

Run
Best: serve the folder, then open both pages in two tabs.
    python3 -m http.server 8000
    http://localhost:8000/index.html   (customer)
    http://localhost:8000/admin.html   (admin)
Chrome can also open the files directly (double click). Firefox needs the local server.

Voice recording needs microphone permission (works on localhost or https).

More customers: index.html?u=rahim&n=Rahim  (each ?u= is a separate customer)

Data lives in the browser (localStorage) and syncs between tabs on the same browser.
To go multi-device, replace makeDb() in app.js with calls to a backend (FastAPI + PostgreSQL).
All data is synthetic. Reply texts are samples, replace them with upay-approved wording (KB in app.js).

Language
- More > Language switches the whole customer app between Bangla and English (saved in the browser, page reloads).
- The admin console is always English. Bangla texts stored by the app (complaint categories, system messages) are shown in English there.

Account types (More > Account Type)
- Personal: default.
- Islamic: customer can switch directly.
- Student: needs admin approval. The customer fills the form, a request appears in admin > Student accounts, admin approves or rejects (a note is required to reject), and the customer sees the result in the app.
- Admin > Student accounts > Application rules: edit the guidelines (English and Bangla), accepted email domains (default: edu, ac) and which items are required (edu email, university name, student ID number, ID card photo, selfie with ID).
- NOTE: this is a browser-only demo, so the approval is not enforced by a server. For production, check acct/studentOK on the backend.

Student benefits (demo rules, edit constants in app.js)
- Cash Out fee: base 1.85%, verified student accounts get 20% off the fee (feeOf). Send Money fee: 0.
- History: search by phone/name/transaction ID; each row shows day, date, time, phone, receiver name (from saved accounts) and transaction ID.
- More > Student Plan (verified students only): money buckets (set money aside per category, pay from a bucket) and auto transfer (saved account + date/time; sends automatically when money arrives).
