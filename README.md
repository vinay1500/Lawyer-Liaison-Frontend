# Lawyer Liason — Frontend + Backend

This repository contains a React + TypeScript frontend (Vite + TailwindCSS) and an Express + TypeScript backend (MySQL) plus example Nginx config for deployment to a DigitalOcean droplet.

Quick commands (run in each subfolder):

- Frontend (dev):
```
cd frontend
npm install
npm run dev
```

- Frontend (build for production):
```
cd frontend
npm run build
```

- Backend (dev):
```
cd backend
npm install
npm run dev
```

Deployment notes:
- Build frontend and copy `frontend/dist` to `/var/www/frontend` on the droplet.
- Use `pm2` to run backend (`pm2 start deployment/pm2.config.js`) or systemd.
- Use Nginx to serve the frontend static files and proxy `/api` to the backend (example in `deployment/nginx/site.conf`).

See the `frontend` and `backend` folders for code and the `deployment` folder for example configs.
