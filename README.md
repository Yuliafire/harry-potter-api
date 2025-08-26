# Harry Potter House Analysis

A React/TypeScript application that visualizes the distribution of Hogwarts students across houses with Birth date filtering.

## Task: [link](https://drive.google.com/file/d/1X3GY50LcE8vCdzcEA-S9aRzF1xYJO9XS/view?pli=1)

## Stack:

- React Typescript
- Axios
- SCSS Modules
- Recharts
- Vite

## Features

- Fetches character data from the HP API
- Filter students by birth date range
- Visualize house distribution with Recharts bar chart
- Responsive design
- Docker containerization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`

### Docker Deployment

1. Build the image: `npm run build-docker`
2. Run the container: `npm run run-docker`
3. Open http://localhost:3000 in your browser

## API Reference

Uses the [HP API](https://hp-api.onrender.com/) to fetch character data.
