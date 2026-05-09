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

# Suggested Demo

Recommended demo flow:

1. Show dashboard overview
2. Create new monitored service
3. Trigger manual re-check
4. Show automatic scheduler update
5. Demonstrate realtime polling update
6. Show UP/DOWN status changes

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
