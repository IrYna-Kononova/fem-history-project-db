# fem-history-project-db 🧞‍♀️

## **Step 1: Backend Setup and Basic API for Data Handling**
**Objective:** Set up a Node.js backend using Express and integrate it with MongoDB.
- **Tasks:**
- Created API endpoints:
/api/events for feminist historical events.
/api/myths for retrieving myths and debunks.
/api/resources for feminist literature resources.
- Migrated data from JSON files into MongoDB collections.
- Set up Mongoose models for events, myths, and resources.

## **Step 2: Integrating the Backend with the Frontend**
**Objective:** Refactor the frontend to fetch data from the backend.
- **Tasks:**
- Replaced static JSON fetch calls with dynamic API requests to the backend.
- Implemented server-side filtering on the History page, allowing filter parameters (era, region, type) to be sent to the /api/events endpoint.
- Ensured the Myths and Resources pages dynamically fetch data from the backend.
