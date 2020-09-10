require('dotenv').config()
let express =require('express');
let app = express();
const sequelize = require('./db');

let user = require('./Controllers/usercontroller');

sequelize.sync();

app.use(express.json());
app.use('/user', user);






app.listen(3000, function(){
    console.log('App is listing on port 3000');
})
