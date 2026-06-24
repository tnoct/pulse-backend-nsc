# Pulse Backend

A Node.js REST API built with Express and TypeScript that tracks project metrics including completion rates, active users, and project statuses. It uses MongoDB via Mongoose for data persistence.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tnoct/pulse-backend-nsc.git
cd pulse-backend-nsc
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure environment variables

Create a `.env` file at the root of the project:

```env
NODE_PORT=4004
MONGODB_URI=mongodb://localhost:27017/pulse
```

### 4. Seed the database

Run this once to populate the database with sample project records:

```bash
yarn seed
```

### 5. Start the development server

```bash
yarn dev
```

The server will be available at `http://localhost:4004`.

## API Endpoints

| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | /api/metrics   | Returns all project metric records |

### Sample Response

```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "_id": "...",
      "name": "Alpha Dashboard",
      "status": "active",
      "completionRate": 72,
      "activeUsers": 34,
      "timestamp": "2026-01-10T00:00:00.000Z"
    }
  ]
}
```

## Project Structure

```
src/
├── config/         # Database connection
├── controllers/    # Request / response handlers
├── middlewares/    # Express middlewares (CORS etc.)
├── models/         # Mongoose schema definitions
├── routes/         # Route declarations
├── seed/           # Seed script and data
├── services/       # Business / data-access logic
├── types/          # Shared TypeScript interfaces and types
└── server.ts       # App entry point
```

## Available Scripts

| Command          | Description                              |
|------------------|------------------------------------------|
| `yarn dev`       | Start the server in watch mode           |
| `yarn seed`      | Seed the database with sample data       |
| `yarn build`     | Compile TypeScript to `dist/`            |
| `yarn serve`     | Serve the compiled build                 |
| `yarn format`    | Format source files with Prettier        |
