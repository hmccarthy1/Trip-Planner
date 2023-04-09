const path = require('path');
const express = require('express');
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

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);




sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});


var testUser;
var testSpring;
var testSpringReview

const runTests = async function() {
  testUser = await User.create({
    firstName: "Hunter",
    lastName: "McCarthy",
    DOB: 1996/03/30,
    emailAddress: "hunterMcCarthy56@hotmail.com",
    userPassword: "testpwadfadsfasf" ,
    phoneNumber: '321-210-9676'
  })
  testSpring =  await Spring.create({
    springName: "Blue Springs (volu)",
    latitude: 145.33354,
    longitude: 145.33354,
    springState: "FL",
    County: "Volusia"});
  testSpringReview = await springReview.create({
    Spring: '1',
    reviewingUser: '1',
    userSpringRating: 3.4,
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tincidunt ornare massa eget egestas purus viverra. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Suscipit tellus mauris a diam maecenas. Volutpat est velit egestas dui id. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Lacus vestibulum sed arcu non odio euismod lacinia at. Nibh sit amet commodo nulla facilisi nullam. Sit amet nisl purus in.'
  })

}


    




runTests();