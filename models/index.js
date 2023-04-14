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


const runTests = async function () {
  await User.destroy({ truncate: true });
  await Spring.destroy({ truncate: true });

  userHunter = await User.create({
    firstName: "Hunters",
    lastName: "McCarthy",
    DOB: 1996 / 03 / 30,
    emailAddress: "hunterMcCarthy56@hotmail.com",
    userPassword: "testpwadfadsfasf",
    phoneNumber: '321-210-9676'
  });


  var ginnieSprings = await Spring.create({

    springName: "Ginnie Springs",
    latitude: 29.8343,
    longitude: 82.7024,
    springState: "FL",
    County: "Gilchrist",
    springDescription: "The best spring system in the state - period. This site hosts it's own head spring, which feeds into the Santa Fe (and the rope swing taking you into it), as well as the Devil Spring System. Made up of Devli's Ear,  Devil's Eye, and Little Devil, this system is a true wonder of nature. Renowned worldwide for it's one-of-a-kind cave diving, beautiful above-water scenery, and diverse wildlife, this spring sytem is a must-see for everyone."

  });

  var blueSprings = await Spring.create({

    springName: "Blue Springs (Volusia)",
    latitude: 28.9514,
    longitude: 81.3337,
    springState: "FL",
    County: "Volusia",
    springDescription: "Famous for the manatees that inhabit it during the winter months and the exceptional freediving opportunities it offers, this oasis is located about 45 minutes north of Orlando. This spring boasts about a half mile of crystal clear stream, leading to the 40' deep head spring that attracts freedivers from all over the state"

  });

  var silverGlenSprings = await Spring.create({

    springName: "Silver Glen Springs",
    latitude: 29.2464,
    longitude: 81.6434,
    springState: "Fl",
    County: "Marion",
    springDescription: "This spring plays hosts to swirling schools of silver striped bass and swaying seagrass. The 72 degree waters of this spring are located about an hour and fifteen minutes north from Orlando, nestled in the Ocala national forest."

  });

  var silverSprings = await Spring.create({

    springName: "Silver Springs",
    latitude: 39.41547,
    longitude: -119.22461,
    springState: "FL",
    County: "Marion",
    springDescription: "From monkeys to moviestars, this spring has seen it's share of crazy characters. Bought by ABC-Paramount in 1962, this spring was the set of several movies, including 'Tarzan' and 'The Creature from the Black Lagoon'. Silver Springs also does contain an island of wild Rheesus monkeys, but don't get too close - you won't go home smelling nice!"

  });

  var alexanderSprings = await Spring.create({

    springName: "Alexander Springs",
    latitude: 29.0803,
    longitude: 81.5781,
    springState: "FL",
    County: "Lake",
    springDescription: "Home to some of the most gorgeous freediving and snorkeling in the state, this spring is often used by novice divers to practice their buoyancy control. With a nice spacious head spring side-by-side shallow waters, this is a great spot for a family weekend getaway."

  });

  var devilsDenSpring = await Spring.create({

    springName: "Devil's Den Prehistoric Spring",
    latitude: 29.4070,
    longitude: 82.4761,
    springState: "FL",
    County: "Levy",
    springDescription: "Truly one of Florida's natural wonders, this spring in nested inside a rock canyon with strands of sunlight streaming through the natural formation, creating a mid-day halo effect. This spring is a bucket-list item for many cave divers hoping to explore the pre-historic underwater cave system. Right next door is one of the most diverse gardens in the state of florida"

  });

  var ichetuckneeSprings = await Spring.create({

    springName: "Ichetucknee Springs",
    latitude: 29.9838,
    longitude: 82.7618,
    springState: "FL",
    County: "Suwanee",
    springDescription: "Whether you want to take a leisurely tube down a natural lazy river, or be awed by the size the underwater cavern at Blue Hole, this site has you covered. Right in the heartland of Florida spring territory, this site is only a half hour north of Ginnie Springs, just outside Alachua"

  });

  var royalSprings = await Spring.create({

    springName: "Royal Springs",
    latitude: 30.0838,
    longitude: 83.0749,
    springState: "FL",
    County: "Suwanee",
    springDescription: "This spring is not well-known, which makes it the perfect getaway for those who want to avoid those pesky summer tourists and snowbirds. This spring may not have the same wildlife or attractions that others have, but it has a great dock to dive off and plenty of space to swim around. One of the deepest and widest springs around, this is a great option for those wishing to practice diving of any kind"

  });

  var juniperSprings = await Spring.create({

    springName: "Juniper Springs",
    latitude: 29.1839,
    longitude: 81.7120,
    springState: "FL",
    County: "Marion",
    springDescription: "Kayakers - this one's for you. The Juniper Run was named one of the top 25 canoe runs in the country by ReserveAmerica. It's a seven mile journey, so come prepared - but many people who experience the breathtaking journey down this run ended up wishing it was even longer!"

  });

  var rainbowSprings = await Spring.create({
    springName: "Rainbow Springs",
    latitude: 29.1025,
    longitude: 82.4370,
    springState: "FL",
    County: "Marion",
    springDescription: "You don't get a name like rainbow springs without looking pretty. Home to arguably the clearest water in the state, this spring is famous for it's glass-bottomed kayak tours, showcasing just how clear it really is. Paddle along rainbow river and watch the fish and manatees swim right beneath you!"

  });

  var rockSprings = await Spring.create({
    springName: "Kelly Park / Rock Springs",
    latitude: 28.7591,
    longitude: 81.5004,
    springState: "FL",
    County: "Marion",
    springDescription: "A disproportionately strong current, ample sunbathing area, and the tempting lure of finding your very own prehistoric shark teeth - it's no wonder this spring is crowded every weekend. Make sure you come early to ensure you get the opportunity to enjoy it! "

  });


  var gumSloughSprings = await Spring.create({
    springName: "Gum Slough Spring",
    latitude: 28.958722,
    longitude: 82.231528,
    springState: "FL",
    County: "Marion",
    springDescription: "One of the hidden gems of Florida Springs, this spring is both one of the best and one of the hardest to get to. The spring is miles upriver, and you'll probably need to get out of your kayak once or twice to navigate, but those who make it all the way to the head spring are rewarded with one of the most secluded springs in florida. You won't see throngs of tourists with bluetooth speakers here. For those who love to freedive and snorkel, this spring is one of the best"
  })

  var ginnieMain = await springMedia.create({
    Spring: ginnieSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681441564/ginnieMain_vsq9ht.jpg", 
    Caption: "A stunning picture of one of ginnie's famous cave systems", 
    mainImage: true

  });

  await springMedia.create({
    Spring: ginnieSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442015/Devils-Ear-Backlight-3-1000x670_afrmpz.jpg", 
    Caption: "Two cave divers marveling at the underwater rock formations at Ginnie", 
    mainImage: false

  });

  await springMedia.create({
    Spring: ginnieSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442237/WhatLiesBeneath-1_ssjrfe.jpg", 
    Caption: "Devil's Ear - the famous crevass of the Devil's spring system", 
    mainImage: false

  });


  await springMedia.create({
    Spring: ginnieSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442407/DevilsEyeNight-1_p0jvnq.jpg", 
    Caption: "Even night time at Ginnie is stunning", 
    mainImage: false

  });

  await springMedia.create({
    Spring: ginnieSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442631/GOPR0011_ALTA-615917329403256048_vl3xjc.jpg", 
    Caption: "Hunter freediving at the head spring at Ginnie", 
    mainImage: false

  });


  var blueMain = await springMedia.create({
    Spring: blueSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442901/Blue-Springs-State-Park_084e5789-a552-d6e7-6866fc9f12ece6b1_fwc7qw.jpg", 
    Caption: "A group of manatees swimming through blue springs", 
    mainImage: true

  });
  
  var silverGlenMain = await springMedia.create({
    Spring: silverGlenSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443092/8696137743_530350a358_b_xtdprv.jpg", 
    Caption: "A rare sight - a spiral swarm of striped bass at the restricted breeding grounds at Silver Glen Springs", 
    mainImage: true

  });

  var silverMain = await springMedia.create({
    Spring: silverSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681357788/asvw2lazqjheytajiyuq.jpg", 
    Caption: "A relaxing view from a viewing deck alongside the river hosting Silver Springs", 
    mainImage: true

  });

  var alexanderMain = await springMedia.create({
    Spring: alexanderSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443378/diving-down-into-alexander-springs-1024x577_x5uwvo.jpg", 
    Caption: "Alexander is deceptively deep and spacious!", 
    mainImage: true

  });

  var devilsDenMain = await springMedia.create({
    Spring: devilsDenSpring.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443580/7e17e2e44eb5c913e2c585bc05ad0145_ba4i5k.jpg", 
    Caption: "The entrance to Devil's Den, one of florida's oldest and coolest springs", 
    mainImage: true

  });
  var ichetuckneeMain = await springMedia.create({
    Spring: ichetuckneeSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443785/ichetucknee-blue_hole_springs-16_rvxlww.jpg", 
    Caption: "The entrance to the Ichetucknee head spring, next to a path leading to Blue Hole", 
    mainImage: true
  });

  var royalMain = await springMedia.create({
    Spring: royalSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443981/Royal-Springs-2_nmrzbn.jpg", 
    Caption: "View of the great dock for diving headfirst into Royal Springs", 
    mainImage: true
  });

  var juniperMain = await springMedia.create({
    Spring: juniperSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681444178/juniper-springs-rick-lee_gi1hri.jpg", 
    Caption: "A beautiful stretch of the famous Juniper Run", 
    mainImage: true
  });

  var rainbowMain = await springMedia.create({
    Spring: rainbowSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681444319/rainbowsprings_1-854x900_t7fvwx.jpg", 
    Caption: "Clear? Crystal.", 
    mainImage: true
  });

  var rockMain = await springMedia.create({
    Spring: rockSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681444510/rock-spring-swim_rvvojz.jpg", 
    Caption: "Buckle up - that current's strong", 
    mainImage: true
  });

  var gumSloughMain = await springMedia.create({
    Spring: gumSloughSprings.springID,
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681444694/F14BF4F7-B718-473B-8133-B82241FB2BF8_ky2v55.jpg", 
    Caption: "Beautiful cut of the canoe/kayak run leading up to Gum Slough", 
    mainImage: true
  });


  
  //


 
 
  

  // console.log( testUser );
  // console.log( testSpring );
  // console.log( testSpringReview );
  // console.log( testReviewMedia )
  // console.log( testFavoritedSpring );
  // console.log( testSpringMedia );
  // console.log( testAmenityChoice );
  // console.log( testAmenity );
  // console.log( testAmenityMedia );


}

runTests();

module.exports = { User };