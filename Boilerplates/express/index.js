// import dependencies
const express = require('express');

// initialize express
const app = express();

// define routes
app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

// start server
const port = process.env.PORT || 3016
app.listen(port, () => {
    console.log('Express server is running at http://localhost:' + port)
})