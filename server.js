
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path');

const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const Spring = require('./models/Spring')
const User = require('./models/User');
const springReview = require('./models/springReview')
const sequelize = require('./config/connection');
const { userInfo } = require('os');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require("body-parser");

var express = require('express')

var app = express()


const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers,
  defaultLayout: 'main',
  extname: 'handlebars',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars' );
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));

});
//app.listen(PORT, () => console.log(`Now listening at ${PORT}`));