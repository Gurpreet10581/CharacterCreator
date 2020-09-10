require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

const chara = require('./Controllers/characontroller');


sequelize.sync();
// app.use(require('./middleware/headers'))
app.use(express.json());

app.use('/chara', chara);


app.listen(3000, function(){
    console.log('App is listing on port 3000');
})
