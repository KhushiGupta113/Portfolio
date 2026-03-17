# Portfolio (Full‑Stack)

Modern personal portfolio website built with:

- Frontend: React + Tailwind CSS
- Backend: Node.js + Express

## Run locally

Install dependencies:

```bash
npm run install:all
```

Start both client and server:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173` and proxies `/api/*` to the backend at `http://localhost:5000`.

## API

- `GET /api/health`
- `POST /api/contact` `{ name, email, message }`

