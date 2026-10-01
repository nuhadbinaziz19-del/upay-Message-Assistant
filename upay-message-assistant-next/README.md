# upay Message Assistant (Next.js)

Reads messages from the upay app, replies when it is safe, sends the rest to a person.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```
Production: `npm run build && npm run start`

## Structure
- `app/page.js` main screen (inbox, My FAQ, policies, integration)
- `app/api/messages/route.js` API: `POST /api/messages` (also `POST /v1/messages` via rewrite)
- `lib/analyze.js` intent, language, redaction, FAQ matching, decision rules
- `components/` Inbox, Faq, Info (Policies, Integration)

## Try the API
```bash
curl -X POST localhost:3000/v1/messages -H "Content-Type: application/json" \
  -d '{"text":"taka kete nise but send hoy nai"}'
```

## Notes
- All data is synthetic. Nothing is connected to a real upay system.
- Reply texts are samples. Replace with upay-approved wording.
- Intent detection is keyword-based. FAQs are stored in browser localStorage.
