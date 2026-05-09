# Service Monitor Frontend

Frontend dashboard for a centralized monitoring system.

This project was built as part of the NUXA Fullstack Developer Technical Test.

Repository:
https://github.com/ikhsanmaaa/service-monitor-frontend.git

---

# Features

## Monitoring Dashboard
- Realtime-ish monitoring dashboard
- Monitoring statistics
- Service status visualization
- Latency visualization
- Last checked timestamp display

## Service Management
- Create service
- Update service
- Delete service
- Manual force re-check

## UI Features
- Responsive dashboard layout
- Monitoring table UI
- Status badges
- Loading states
- Error handling
- Auto refresh polling
- Dashboard charts

---

# Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- TanStack Query
- React Hook Form
- Zod
- Recharts
- shadcn/ui
- Lucide React

---

# Frontend Architecture

The frontend uses a feature-based folder structure.

```txt
src/
├── api
├── components
├── features
├── hooks
├── pages
├── types
├── utils
└── lib
````

---

# Run Frontend

## Install Dependencies

```bash
npm install
```

---

## Configure Environment

Create `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

---

## Run Development Server

```bash
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

# Realtime Monitoring

The dashboard uses TanStack Query polling to create realtime-ish monitoring behavior.

```ts
refetchInterval: 30000
```

This allows service status updates without manually refreshing the browser.

---

# Architecture Decisions

Although Angular was preferred in the requirement, React + TypeScript was chosen because I was more comfortable and productive with the ecosystem.

This allowed me to focus more on implementing realtime monitoring behavior, API integration, and improving the overall user experience within the limited test duration.

The UI was designed to be simple, clean, and easy to scan quickly, inspired by monitoring/admin dashboard layouts.

---

# Challenge Log

One challenge during frontend development was designing a monitoring table layout that remained readable while displaying many service attributes at once.

Initially, the layout felt cluttered and difficult to scan. I improved this by restructuring the UI into a cleaner monitoring-style table with better spacing and status indicators.

Another challenge was synchronizing frontend realtime updates with backend scheduled health checks. Sometimes the dashboard showed stale data because the frontend cache was not updating correctly.

This was solved by implementing automatic polling and improving query invalidation handling.

I also encountered several issues related to TypeScript typing, React Query mutation handling, and chart rendering with Recharts.

---

#Demo

<img width="1365" height="761" alt="image" src="https://github.com/user-attachments/assets/312694b0-b74d-4670-8e34-6f41fa1ff479" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/66551db4-2ae2-47e5-be0c-89e25646f3ec" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/25f874ae-4a17-4ed0-bf95-3d9574d64075" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/33434996-6e53-4779-8b2b-70ceb7a38f71" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/a7451095-eed1-4951-8466-c97e22e2ea58" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/9c56d422-84ef-4a92-8f32-efe751f6323e" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/a5712ee3-1197-4a97-b27b-9e437a4f394f" />
<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/ad219b6d-9db8-4828-875b-bf9dcc4b5d25" />


---

# Future Improvements

Possible future improvements:

* Historical monitoring chart
* WebSocket support
* Search & filtering
* Dark mode
* Notification system
* Advanced monitoring analytics

---

# Author

Ikhsan Maulana Akbar

```
```
