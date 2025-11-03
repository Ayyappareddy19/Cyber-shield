const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Assumes index.ejs is in the same directory as this server.js file
app.set('views', path.join(__dirname)); 

// Route to render the index.ejs file
app.get('/', (req, res) => {
    // Renders the index.ejs file.
    res.render('index', {});
});

// Start the server
app.listen(port, () => {
    console.log(`\n✅ Server is running successfully!`);
    console.log(`🌐 View your website at: http://localhost:${port}`);
    console.log(`\nPress CTRL+C to stop the server.`);
});
