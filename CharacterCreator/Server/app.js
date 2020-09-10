require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

const chara = require('./Controllers/characontroller');
let user = require('./Controllers/usercontroller');

sequelize.sync();

app.use(express.json());
app.use('/user', user);
app.use('/chara', chara);

// app.use(require('./middleware/headers'))

app.listen(3000, function(){
    console.log('App is listing on port 3000');
})
