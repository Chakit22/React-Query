// Import Express module
const express = require('express');
const cors = require("cors");
const fs = require("fs");

// Initialize the Express application
const app = express();

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded data (like form submissions)
app.use(express.urlencoded({ extended: true }));

// Define a port number
const PORT = 3000;

// Define a route to handle GET requests
app.get('/', (req, res) => {
    console.log("hey")
    fs.readFile("./db.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }

        try {
            const data = JSON.parse(jsonString);
            console.log(data);
            res.send(data.posts);
          } catch (err) {
            console.log("Error parsing JSON string:", err);
          }
          
      });
});

app.get('/posts/:id', (req, res) => {
  const {id} = req.params;
  fs.readFile("./db.json", "utf8", (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }

      try {
          const data = JSON.parse(jsonString);
          const post = data.posts.find((post) => post.id == id);
          res.send(post);
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
    });
});

app.get("/users/:id", async (req, res) => {
  const {id} = req.params;
  fs.readFile("./db.json", "utf8", (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }

      try {
          const data = JSON.parse(jsonString);
          const user = data.users.find((user) => user.id == id);
          res.send(user);
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
    });
});

app.post("/posts", (req, res) => {
  const body = req.body;
  fs.readFile("./db.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }

    try {
        const data = JSON.parse(jsonString);
        data.posts.push(body);
        var newData = JSON.stringify(data);
        fs.writeFile('db.json', newData, err => {
          // error checking
          if(err) throw err;
          console.log("New data added");
          console.log(newData);
          res.send(JSON.stringify(body));
        });  
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
      
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});