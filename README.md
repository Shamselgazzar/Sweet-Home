# Sweet Home: Apartment Listing Application

Sweet Home is a full-stack web application designed for browsing and managing apartment listings. It provides a user-friendly interface for searching, viewing, and adding apartment listings, with a responsive design suitable for both desktop and mobile devices.


## Getting Started

Before installation, ensure you have Git, Node.js (v20+), Docker, and Docker Compose installed.

### Installation

1. Clone the repository:

```plaintext
git clone https://github.com/Shamselgazzar/sweet-home.git
```

2. navigate to the cloned repository:

```plaintext
cd sweet-home
```

3. Build and start the Docker containers:

```plaintext
docker-compose up --build
```


3. The application should now be running:

1. Frontend: [http://localhost:3000](http://localhost:3000)
2. Backend API: [http://localhost:5001](http://localhost:5001)
3. Swagger Documentation: [http://localhost:5001/api-docs](http://localhost:5001/api-docs)



## API Reference

The API is documented using Swagger, accessible at:

[http://localhost:5001/api-docs](http://localhost:5001/api-docs)

Notable endpoints include:

- GET /api/apartments: Retrieve a paginated list of apartments
- GET /api/apartments/:id: Fetch details of a specific apartment
- POST /api/apartments: Create a new apartment listing
- GET /api/apartments/search: Search for apartments by query


## Data Population - Seeding Script

The backend includes a data seeding script that populates the database with initial apartment data. 


## Tech Stack

- Next.js 13, React, TypeScript, Tailwind CSS, shadcn/ui (frontend)
- Node.js, Express.js, TypeScript, MongoDB (backend)
- Docker and Docker Compose (development tools)

## UI Components

The project utilizes shadcn/ui, a collection of re-usable components built using Radix UI and Tailwind CSS. Key components include:

Button, Card, Dialog, Input, Select, Slider, Switch, Sheet, Skeleton (for loading states), Toast (for notification messages) and more...

## Features

- Apartment listing with pagination (main view)
- Details page for apartment information
- Create new apartment popup
- Responsive design suitable for mobile, tablet, and desktop
- Search functionality by name, unit number, or project
- Advanced filtering options (price range, bedrooms, bathrooms, size, year built) (UI only, not fully implemented)
- Dark mode support (UI only, not fully implemented)


## Potential Enhancements

1. Implement user authentication and authorization
2. Add a comparison feature to compare multiple apartments side by side
3. Integrate a map view for apartment locations
5. Add a favorites or bookmarking system for users
6. Enhance the search functionality with more advanced filters and sorting options
7. Implement a working dark mode
8. The filter sheet (side menu) are UI-only and not fully connected to the backend.
9. Add image upload functionality for apartment listings
10. Implement a review and rating system for apartments


## Contributing

Contributions to Sweet Home are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.