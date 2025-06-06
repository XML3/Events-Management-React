# Events Management with React.js
This is a front-end application designed to simulate an event management system. Users can search for events by location, name, or category and connect with event organizers via a contact form. Additionally, event organizers have access to an intuitive set of tools to manage their events, including functionality to create, edit, and delete events.

Note: The UX/UI design and developement of this app were created and implemented by me as an integral part of this project. 

## Important: 
Only creating and editing events are enabled here.  Deleting events requires authorization tokens and is handled solely on the back-end, not the front-end, to keep the project easily accessible for viewing.


![Events](https://github.com/user-attachments/assets/1740c651-3fbb-4693-9d9e-360933ffc606)


## Technologies & Tools
Front-end:
React.js: JavaScript library for building user interfaces.

Chakra UI: A simple, modular, and accessible component library for React.

Back-end:
Node.js with Express: Server-side framework for building REST APIs.

Prisma: ORM used to interact with the PostgreSQL database.

PostgreSQL: Relational database for storing event data.

Sentry: Performance monitoring and error tracking.

Auth0: Authentication and authorization services for secure access.

Demo:  A live demo of the project can be viewed at
https://eventsmanagementapp.netlify.app

## Features
Search Events: Users can search events by location, name, or category.

Create Events: Event organizers can create new events through a user-friendly interface.

Contact Form: Allows users to get in touch with event organizers directly.

Event Management Tools: Event organizers can manage their events (create, edit, delete).

User Authentication: Secured access to certain features via Auth0 authentication tokens.

## Design Tools
Figma

## Getting Started
Prerequisites
Node.js and npm should be installed on your machine.

For React development, ensure you have the React app and Chakra UI installed.

## Installation
Clone the repository to your local machine:

## bash
git clone [repo]
Install the required dependencies for the React app:

## bash
cd events-management-react
npm install
Start the development server:

## bash
npm start
This will launch the front-end application locally in your browser at http://localhost:3000.

## Environment Setup
If you're working on both front-end and back-end (as part of a full-stack project), ensure that the back-end server is running separately on its own port.

The front-end app is configured to make API requests to the back-end server to interact with event data.

Note: The app is deployed with some features disabled (edit, delete, contact) to prevent unwanted changes. 

Copyright
© [2023] [Xagly Montilva]. All rights reserved.
All visual elements, including video, multimedia, sound, and layout, are copyrighted and owned by the author, with the exception of the images used in the Events' (card) headers.
