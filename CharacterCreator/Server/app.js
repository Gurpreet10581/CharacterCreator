require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

const chara = require('./Controllers/characontroller');
let user = require('./Controllers/usercontroller');

sequelize.sync();
app.use(require('./Middleware/headers'))


app.use(express.json());
app.use('/user', user);

app.use(require('./Middleware/validateSession'))
app.use('/chara', chara);




app.listen(3000, function(){
    console.log('App is listing on port 3000');
})
