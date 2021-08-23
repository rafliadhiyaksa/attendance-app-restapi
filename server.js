const express = require('express');
const app = express();

//parse application/json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});