Read Me 

Backend

PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 12 dropdown option 'SQL shell (psql)'
Postman used to test the backend before frontend was available

Frontend

React frontend includes a simple todo list with a user input field and a table of todos below. User can edit and delete todos.
JavaScript XML (JSX) used to write HTML elements in Javascript
React Fragments used to show table of todos as a row with columns in the DOM 

FrameWorks used 

React framework v16
Bootstrap v4 component library 

💾 Setup - Backend

Change to /server directory
Install dependencies using npm i
Install nodemon globally if you don't already have it
Install PostgreSQL & run it (requires the password you created during installation)
Add database access credentials to db.js - recommend installing npm dotenv & using .env to hide credentials if commiting to Github
Postgresql shell commands: \l list all databases. \c database1 connect to database1. \dt inspect tables. \d+ inspect table & show relation information. \q to quit.
Run nodemon server for a dev server
http://localhost:5000/ can be accessed for CRUD operations such as POST, GET, PUT, DELETE etc. using Postman 

 Setup - Frontend

Change to /client directory
Install dependencies using npm i.
run npm start. Frontend will open at http://localhost:3000/ 

👏 🔧 Inspiration/General Tools 

PERN Stack Course - PostgreSQL, Express, React and Node 
Youtube video: How to Deploy a PERN application on Heroku
