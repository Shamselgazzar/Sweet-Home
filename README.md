# Sweet Home: Apartment Listing Application

Sweet Home is a full-stack web application designed for browsing and managing apartment listings. It provides a user-friendly interface for searching, viewing, and adding apartment listings, with a responsive design suitable for both desktop and mobile devices.

## Tech Stack

### Frontend

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components


### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB


### Development Tools

- Docker and Docker Compose


## Features

- Browse apartment listings with pagination
- Search functionality by name, unit number, or project
- Advanced filtering options (price range, bedrooms, bathrooms, size, year built, amenities)
- Detailed view of apartment information
- Create new apartment listings
- Responsive design for mobile and desktop
- Dark mode support (UI only, not fully implemented)


## UI Components

The project utilizes shadcn/ui, a collection of re-usable components built using Radix UI and Tailwind CSS. Key components include:

- Button
- Card
- Dialog
- Input
- Select
- Slider
- Switch
- Sheet
- Skeleton (for loading states)


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- Docker and Docker Compose
- Git


### Installation

1. Clone the repository:

```plaintext
git clone https://github.com/Shamselgazzar/Sweet-Home.git
cd sweet-home
```


2. Build and start the Docker containers:

```plaintext
docker-compose up --build
```


3. The application should now be running:

1. Frontend: [http://localhost:3000](http://localhost:3000)
2. Backend API: [http://localhost:5001](http://localhost:5001)
3. Swagger Documentation: [http://localhost:5001/api-docs](http://localhost:5001/api-docs)





## Development

For development purposes, the project is set up with hot-reloading for both the client and server:

- Client-side changes will be reflected immediately in the browser
- Server-side changes will trigger an automatic restart of the Node.js server


## API Documentation

API endpoints can be explored and tested using the Swagger documentation available at:

[http://localhost:5001/api-docs](http://localhost:5001/api-docs)

Key endpoints include:

- GET /api/apartments: List all apartments (with pagination)
- GET /api/apartments/:id: Get details of a specific apartment
- POST /api/apartments: Create a new apartment listing
- GET /api/apartments/search: Search apartments by query


## Data Population

The backend includes a data seeding script that populates the database with initial apartment data. This script runs automatically when the containers start, but can be run manually if needed:

1. Access the API container:

```plaintext
docker-compose exec api sh
```


2. Run the seed script:

```plaintext
npm run seed
```




## Current Status and Limitations

- The search and filter functionalities are UI-only and not fully connected to the backend.
- Dark mode is partially implemented in the UI but not fully functional.
- The "Add Apartment" feature is implemented but may not persist data between sessions.


## Potential Enhancements

1. Implement user authentication and authorization
2. Add a comparison feature to compare multiple apartments side by side
3. Integrate a map view for apartment locations
4. Implement real-time updates for new listings
5. Add a favorites or bookmarking system for users
6. Enhance the search functionality with more advanced filters and sorting options
7. Implement full dark mode support, including backend preference storage
8. Add image upload functionality for apartment listings
9. Implement a review and rating system for apartments


## Contributing

Contributions to Sweet Home are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.