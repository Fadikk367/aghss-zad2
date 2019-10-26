const  { app } = require('./app.js');
const { connect } = require('./client.js');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

connect();