# Task Management Application

This is a simple Task Management web application built using **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. The app allows users to create tasks, view them on the homepage, and read detailed task information from the server. Each task is stored as a `.txt` file on the server, and the tasks are rendered dynamically using **EJS**.

## Features

- **Create Tasks**: Users can create new tasks with a title and a detailed description.
- **Task Listing**: All created tasks are listed dynamically on the homepage.
- **Task Details**: Users can click on a task to view its details.
- **EJS Templating**: Dynamic content rendering using the EJS template engine.
- **Tailwind CSS**: Modern styling for the user interface.
- **File Handling**: Tasks are saved as `.txt` files on the server and retrieved on demand.

## Technologies Used

- **Node.js**: JavaScript runtime used for building the server-side application.
- **Express.js**: Web framework to handle routing and middleware.
- **EJS**: Templating engine to render dynamic content.
- **Tailwind CSS**: CSS framework for styling the frontend.
- **File System (fs)**: Node.js module to read and write task data to the server.

## Project Structure

```bash
.
├── public
│   ├── stylesheets
│   │   └── Style.css          # Custom styles using Tailwind CSS
├── views
│   ├── index.ejs              # Homepage displaying task list
│   ├── show.ejs               # Task detail view
├── files                      # Folder where tasks are stored as .txt files
├── app.js                     # Main Express.js application file
└── package.json               # Project dependencies and npm scripts

```


##Getting Started
Prerequisites
To run this project locally, ensure you have the following installed:

Node.js (version 12 or above)
npm or yarn to manage dependencies
Installation
1. Clone the repository:git clone (https://github.com/rajnishpark03/TaskManagement_app)
2. Navigate to the project directory:cd task-manager
3. Install dependencies:node app.js
4. Run the application:node app.js
5. Open your browser and go to:http://localhost:3000

##Application Flow
Home Page:

Displays a form to create new tasks.
Lists all tasks stored in the files directory.
For each task, users can click a "Read More" link to view task details.
Task Creation:

The form on the homepage allows users to create new tasks by submitting a task title and details.
The task is saved as a .txt file in the files/ directory.
Task Details:

The application reads the task details from the corresponding .txt file and displays it on a separate page.
##Routes
GET / - Displays the list of tasks stored as .txt files in the files/ folder.
GET /file/
- Displays the content of a specific task file by reading the .txt file.
POST /create - Creates a new task and saves it as a .txt file in the files/ folder.

###Example Code
1. Task Creation Form (from index.ejs):
```bash
<form action="/create" method="post">
    <div class="form px-10 py-10 text-white">
        <input class="block w-full rounded-md px-5 py-2 bg-zinc-800" type="text" placeholder="Task Title" name="title">
        <textarea class="block w-full rounded-md mt-2 px-5 py-2 resize-none bg-zinc-800" placeholder="Task Details" name="details"></textarea>
        <input class="cursor-pointer mt-2 bg-blue-600 px-5 py-2" type="submit" value="Create Task">
    </div>
</form>
```

2. Task Listing (from index.ejs):
```bash
   <div class="tasks flex gap-3 flex-wrap p-10">
    <% if(files.length > 0) { %>
        <% files.forEach(function(val) { %>
            <div class="task w-72 px-10 py-4 rounded-md bg-zinc-800">
                <h1 class="text-white text-3xl"><%= val %></h1>
                <a class="text-blue-500 inline-block mt-3" href="/file/<%= val %>">Read More...</a>
            </div>
        <% }) %>
    <% } else { %>
        <h3 class="text-zinc-600">No Tasks Yet</h3>
    <% } %>
</div>
```

3. Task Detail View (from show.ejs):
```bash
   <div class="main w-full min-h-screen bg-zinc-900 p-10">
    <a class="text-blue-500 inline-block mb-10" href="/">Go Back To Home</a>
    <h1 class="text-white text-4xl"><%= filename %></h1>
    <p class="text-white text-xl mt-5"><%= filedata %></p>
</div>
```

##Screenshots
Home Page

Task Details Page
![Perview](https://github.com/rajnishpark03/TaskManagement_app/blob/main/images/Screenshot%202024-10-23%20213931.png)
![Preview](https://github.com/rajnishpark03/TaskManagement_app/blob/main/images/Screenshot%202024-10-23%20213942.png)





