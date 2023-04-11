const User = require('./User');
const Spring = require('./Spring');
const springReview = require('./springReview')
const reviewMedia = require('./reviewMedia')
const favoritedSpring = require('./favoritedSpring')
const springMedia = require('./springMedia')
const amenityChoice = require('./amenityChoice');
const Amenity = require('./Amenity');
const amenityMedia = require('./amenityMedia')

var testUser;
var testSpring;
var testSpringReview;
var testReviewMedia;
var testFavoritedSpring;
var testSpringMedia;
var testAmenityChoice;
var testAmenity;
var testAmenityMedia;


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
    springName: "Blue Springs (volaaaaaaaaaaaasaia)",
    latitude: 145.33354,
    longitude: 145.33354,
    springState: "FL",
    County: "Volusia"});
  testSpringReview = await springReview.create({
    Spring: '1',
    reviewingUser: '1',
    userSpringRating: 3.4,
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tincidunt ornare massa eget egestas purus viverra. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Suscipit tellus mauris a diam maecenas. Volutpat est velit egestas dui id. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Lacus vestibulum sed arcu non odio euismod lacinia at. Nibh sit amet commodo nulla facilisi nullam. Sit amet nisl purus in.'});
     testReviewMedia = await reviewMedia.create({
      Review: 1,
      mediaURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Ffetch%2Fc_limit%2Cq_75%2Cw_1200%2Fhttps%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fcrm%2Fvisitflorida%2F29632_9sb7ec5o7bte7hcom03u91fj25h65o2d_f6208e98-5056-a36a-0b591868cbcd88e9.jpg&tbnid=gFkRlerFvA3GBM&vet=12ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.visitflorida.com%2Flisting%2Fblue-spring-state-park%2F26275%2F&docid=M5_Xv-387VbliM&w=600&h=400&q=blue%20springs&ved=2ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ',
      Caption: "a picture of volusia blue springs"

    });
    testFavoritedSpring = await favoritedSpring.create({
      User: 1,
      Spring: 1
    });
    testSpringMedia = await springMedia.create({
      Spring: 1,
      mediaURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Ffetch%2Fc_limit%2Cq_75%2Cw_1200%2Fhttps%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fcrm%2Fvisitflorida%2F29632_9sb7ec5o7bte7hcom03u91fj25h65o2d_f6208e98-5056-a36a-0b591868cbcd88e9.jpg&tbnid=gFkRlerFvA3GBM&vet=12ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.visitflorida.com%2Flisting%2Fblue-spring-state-park%2F26275%2F&docid=M5_Xv-387VbliM&w=600&h=400&q=blue%20springs&ved=2ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ",
      Caption: "test caption",
      mainImage: 0
    });
    testAmenityChoice = await amenityChoice.create({
      amenityType: "Kayaking"
    });
    testAmenity = await Amenity.create({
      Spring: 1,
      amenityType: 1,
      amenityDescription: "test Description",
      Cost: 0.01,
      amenityRating: 5.5
    });
    testAmenityMedia = await amenityMedia.create({
      Amenity: 1,
      mediaURL: "testURL",
      Caption: "test caption"
    })
    
    console.log( testUser );
    console.log( testSpring );
    console.log( testSpringReview );
    console.log( testReviewMedia )
    console.log( testFavoritedSpring );
    console.log( testSpringMedia );
    console.log( testAmenityChoice );
    console.log( testAmenity );
    console.log( testAmenityMedia );
  

}

runTests();

module.exports = { User };