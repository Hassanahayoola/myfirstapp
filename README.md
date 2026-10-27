# Student Dashboard

A one-page student dashboard built to learn React, Next.js and TypeScript.

## Features

- Header and welcome banner
- Student profile card with name, matric number and department
- Overview cards showing total, pending and completed assignments
- Course cards with a progress bar for each course
- Assignments list with completed and pending badges
- Responsive layout that adapts to phone and desktop screens

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- lucide-react for icons

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project structure

- `app/page.tsx` assembles the page from its components
- `app/components/` holds one component per section of the dashboard
- `app/data.ts` holds the sample student, courses and assignments
- `app/types.ts` holds the TypeScript types for that data
- `public/` holds the illustrations

## Notes

The dashboard uses sample data from `app/data.ts` and has no backend yet.
The overview numbers and course progress bars are calculated from that data.