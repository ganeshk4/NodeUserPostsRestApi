let express = require('express');
let bodyParser = require('body-parser');
let apiRouter = require('./routes/api');
let db = require('./models');


let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

db.sequelize.sync({force: true})
.then(() => {
    console.log('db connection success');
})
.catch((err) => {
    console.error(err);
});
module.exports = app;