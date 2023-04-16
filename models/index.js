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
  await springMedia.destroy({ truncate: true });
  await Amenity.destroy({ truncate: true });
  await amenityMedia.destroy({ truncate: true });
  await amenityChoice.destroy({truncate: true});
  springReview.destroy({truncate: true});
  reviewMedia.destroy({truncate: true})

  userHunter = await User.create({
    firstName: "Hunter",
    lastName: "McCarthy",
    DOB: 1996 / 03 / 30,
    emailAddress: "hunterMcCarthy56@hotmail.com",
    userPassword: "123456789",
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
    Caption: `A stunning picture of one of ginnie's famous cave systems`, 
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

const ginnieReview1 = await springReview.create({
  Spring: 1,
  reviewingUser: 1,
  userSpringRating: 9.5,
  reviewText: "We had a great time at Ginnie! The water was crystal clear & super refreshing on a hot florida day!"

});

const reviewMedia1 = await reviewMedia.create({
  Review: ginnieReview1.springReviewID,
  mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681615902/itr2uhq2yefgks63bdpb.jpg",
  Caption: "Swimming through the crystal clear waters of ginnie springs"

})

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

  var kayaking = await amenityChoice.create({
    amenityType: "Kayaking",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681509572/download_syb6k2.png"
  });
  
  var Snorkeling = await amenityChoice.create({
    amenityType: "Snorkeling",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681511155/Picture1_yjxwy8.png"
  })

  var birdWatching = await amenityChoice.create({
    amenityType: "Bird Watching",
    amenityIcon: 'https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521171/download_1_cdtsyj.png'
  })

  var Hiking = await amenityChoice.create({
    amenityType: "Hiking",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521496/hiking-illustration-on-a-background-premium-quality-symbols-icons-for-concept-and-graphic-design-vector_1_obv8uu.jpg"
  })

  var Grilling  = await amenityChoice.create({
    amenityType: "Grilling",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521562/161512_o1qvku.png"
  })

  var Diving  = await amenityChoice.create({
    amenityType: "Diving",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521645/886250-200_h0khaf.png"
  });

  var Tubing  = await amenityChoice.create({
    amenityType: "Tubing",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521704/istockphoto-489138584-612x612_cevi3w.jpg"
  });

  var Camping = await amenityChoice.create({
    amenityType: "Camping",
    amenityIcon: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681521820/orange-tent-icon-free-vector_ggj3k2.jpg"
  });


  var ginnieDiving = await Amenity.create({
  Spring: ginnieSprings.springID,
  amenityType: Diving.amenityChoiceID,
  amenityDescription: "From basic open water dives, to some of the most sought after cave diving in the country, Ginnie springs has options for every skill level. No solo diving is allowed, but on the weekends there are almost always groups of divers around who may be persuaded to let you tag along. Bring your own gear, or check out the fully stocked dive shop at the main store for rentals. Be aware though, like all diving equipment - it isn't cheap!",
  Cost: "How much this endeavor will cost depends on what you want to do, and if you're bringing your own gear. Cave diver admission is 24 USD, normal divers get in for 32 USD, and an annual diving pass will cost you 399.99 USD. Rentals will vary but will not be cheap",
  amenityRating: 9.3,
  amenityTitle: "Ginnie Springs Diving"
  });

  var testDiving = await Amenity.create({
    Spring: 3,
    amenityType: Diving.amenityChoiceID,
    amenityDescription: "Ftest",
    Cost: "How much this endeavor will cost depends on what you want to do, and if you're bringing your own gear. Cave diver admission is 24 USD, normal divers get in for 32 USD, and an annual diving pass will cost you 399.99 USD. Rentals will vary but will not be cheap",
    amenityRating: 9.3,
    amenityTitle: "test"
    });

  var ginnieDivingMain = await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681474222/ginnie11_twmyca.jpg",
    Caption: `Two cave divers coming through one of the entrances to one of Ginnie Spring's cave systems. Worth the training!`,
    mainImage: true,
    Amenity: ginnieDiving.amenityID
  });

  var ginnieSnorkeling = await Amenity.create({
    Spring: ginnieSprings.springID,
    amenityType: Snorkeling.amenityChoiceID,
    amenityDescription: "Even if you aren't a certified diver, you can enjoy snorkeling all along the crystal clear waters of the springs at Ginnie! The devil's spring system is an absolute must-see, along with all the wildlife that inhabits it - if you can get there before the weekend party-goers arrive and scare them off",
    Cost: "The adult 'off-season' rate is 15.00 USD, and the 'in-season' rate for adults is 20.00 USD. Kids 5-12 years old get in for 5.00 USD, and kids 4 and under get in free!",
    amenityRating: 9.5,
    amenityTitle: "Ginnie Springs Snorkeling"
    })

  var ginnieSnorkelingMain = await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681475013/SnorkelDevilsEye_mt9ae0.jpg",
    Caption: `A freediver snorkeling near Devil's Eye, one of the favorite entrances to Ginnie's cave system`,
    mainImage: 1,
    Amenity: ginnieSnorkeling.amenityID
  });

  var secondGinnieSnorkeling = await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681498173/BuSY8cjCcAEeLg3_1_cpklr6.jpg",
    Caption: `Snorkeling in the head springs, this rock formation offers the opportunity so swim through and around it's base in a small tunnel`,
    mainImage: 0,
    Amenity: ginnieSnorkeling.amenityID
  });


  await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681494943/showcase_big_33_azcujr.jpg",
    Caption: `A freediver snorkeling near Devil's Ear, a jagged crevass that's great for swimming`,
    mainImage: 0,
    Amenity: ginnieSnorkeling.amenityID
  })

  var ginnieTubing = await Amenity.create({
    Spring: ginnieSprings.springID,
    amenityType: Tubing.amenityChoiceID,
    amenityDescription: "You can tube the Santa Fe river, launching straight from Ginnie's springs. If you enter at Beaver's Landing river access, you can spend a relaxing hour's tube going down the Santa Fe to Twin Spring, where it's a short 15 minute walk back to the parking lot. Keep an eye out for all the wildlife known to occupy the shores of the Santa Fe!",
    Cost: "Single tube rentals - 7.00 USD / Day. Double tube rentals - 14.00 USD / Day. (air is free)",
    amenityRating: 8.4,
    amenityTitle: "Ginnie Springs Tubing"
    })

  var ginnieTubingMain = await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681476529/20211002_122221-1-768x576_ua6rdi.jpg",
    Caption: "A popular tubing spot, Ginnie Springs offers a cool and refreshing way to beat the summer heat!",
    mainImage: true,
    Amenity: ginnieTubing.amenityID
  });

  var ginnieKayaking = await Amenity.create({
    Spring: ginnieSprings.springID,
    amenityType: kayaking.amenityChoiceID,
    amenityDescription: "Kayaking down the Santa Fe river is a rare treat for those who want to see the more untouched side of the nature surrounding Ginnie Springs. The padde  can be all the way up to about 6 hours depending on your speed and endurance, so come prepared. Make sure you paddle upriver first, so you can come back with the current to your start point, as there is no shuttle service available.",
    Cost: "Kayak/Canoe/Paddleboard rentals: 3 hour - 15 USD, 6 hour - 30 USD",
    amenityRating: 8.6,
    amenityTitle: "Ginnie Springs Kayaking"
    });

  var ginnieKayakingMain = await amenityMedia.create({
    mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681477467/L0Rud7UPsKIHj_YzFr5Ra0DmIsybP5KgHBC2dxYaCPY_ux41td.jpg",
    Caption: "Start out your Santa Fe kayaking journey from one of the famous springs at Ginnie!",
    mainImage: true,
    Amenity: ginnieKayaking.amenityID
  });

  var ginnieCamping = await Amenity.create({
    Spring: ginnieSprings.springID,
    amenityType: Camping.amenityChoiceID,
    amenityDescription: "Camping at Ginnie is definitely a wonderful experience. Being able to wake up and step out of your tent to see some of the most beautiful springs the country has to offer laid out at your feet is an incredible way to start any morning! Most sites are tent only - and primitive sites are on a first come, first serve basis - but you can make a reservation if you want. There are several RV sites with water and electric, and a cabin available to rent, but these can often be booked for months out, so plan accordingly.",
    Cost: "(Per person, per night): Adults (off-season) - 25 USD \n Adults (in-season) - 30 USD \n Children 5-12 -- 8 USD \n Children 4 and under - FREE \n (one time flat rate) ELECTRIC & WATER SITE FEE - 11 USD",
    amenityRating: 8.7,
    amenityTitle: "Ginnie Springs Camping"
    });

    var ginnieCampingMain = await amenityMedia.create({
      mediaURL: "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681485769/Ginnie-Springs-Camping-5-min_levlcd.jpg",
      Caption: "Camp just inches away from some of the most beautiful springs in the world ",
      mainImage: true,
      Amenity: ginnieCamping.amenityID
    });

    console.log(
      secondGinnieSnorkeling.mediaURL + '\n' + 
      secondGinnieSnorkeling.Amenity + '\n' +
      secondGinnieSnorkeling.amenityMediaID + '\n' 
      
      
      )

  //

}

runTests();

module.exports = { User };