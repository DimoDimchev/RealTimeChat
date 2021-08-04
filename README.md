# Real-time Chat App

A real-time chatting single-page application built for learning purposes using Node JS, Express JS, MongoDB, React and Socket.IO

## App structure


### Frontend
The frontend is built using React and styled using CSS. The design isn't spectacular but gets the job done. I have to mention that the application supports use on mobile devices too.

The app consists of two parts:
- The **rooms** section
- The **chat** section

Inside the room section the user can add new rooms and by clicking on one of the existing rooms a connection is made

Once the user has been connected to a room all existing messages in that room will show up and any new messages will be added 

### Backend
For the backend I created a REST API using Node JS and Express JS to handle requests for adding new rooms and loading the existing ones. The database I chose to use is MongoDB as it is easily integrated inside a MERN app such as this one.

I implemented Socket.io in order to establish a connection between the users and to handle the creation of new messages.
  
## Demo

<img src="https://github.com/DimoDimchev/RealTimeChat/blob/master/demo.gif" align='center' height=400>
  
## Installation

In order to run this project locally you need to have Node JS and MongoDB installed on your machine.

After you clone the repository run:

```bash
  npm install
  npm start
```

I have installed `concurrently` and `nodemon` as development dependancies and with only one command both the backend and frontend will run
    
