
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
=======
const User = require('./User');

// Blog.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User };

