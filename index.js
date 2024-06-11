const express = require('express');
const app = express();
const PORT = 4000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the default route
app.get('/', (req, res) => {
   // res.send('Hello world!!');
    res.render('home', {
        title: "Welcome to Node",
        text: "This is fun!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
