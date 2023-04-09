DROP DATABASE IF EXISTS floridaSpringsDB;
CREATE DATABASE floridaSpringsDB;
USE floridaSpringsDB;
Create Table User (
    userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdOn DATETIME,
    modifiedOn DATETIME,
    firstName varchar(100) NOT NULL,
    lastName varchar(100) NOT NULL,
    DOB DATE NOT NULL,
    emailAddress varchar(100) NOT NULL,
    userPassword varchar(100)NOT NULL,
    phoneNumber varchar(100),
    profilePictureURL varchar(300)
);

Create Table Spring (
    springID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    springName varchar(100) UNIQUE NOT NULL,
    springState varchar(30) NOT NULL,
    County varchar(30) NOT NULL,
    Latitude decimal(20, 10) NOT NULL,
    Longitude decimal(20, 10) NOT NULL
);

CREATE TABLE springReview (
    springReviewID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Spring int NOT NULL REFERENCES Spring(springID),
    reviewingUser INT NOT NULL REFERENCES Users(userID),
    userSpringRating decimal(2,1) NOT NULL,
    reviewText TEXT NOT NULL
);

CREATE TABLE reviewMedia(
    reviewMediaID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Review INT NOT NULL REFERENCES springReview(springReviewID),
    mediaURL varchar(1500) NOT NULL,
    Caption varchar(300)
);


INSERT INTO User (firstName, lastName, DOB, emailAddress, userPassword, phoneNumber)
VALUES ("Hunter", "McCarthy", '1996/03/30', "hmccarthy56@hotmail.com", "password123", "321-210-9676");


INSERT INTO Spring (springName, springState, County, Latitude, Longitude)
VALUES ("Blue Springs Volusia", "FL", "Volusia", 28.9514, 81.3337);

INSERT INTO springReview (Spring, reviewingUser, userSpringRating, reviewText)
VALUES (1, 1, 9.5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tincidunt ornare massa eget egestas purus viverra. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Suscipit tellus mauris a diam maecenas. Volutpat est velit egestas dui id. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Lacus vestibulum sed arcu non odio euismod lacinia at. Nibh sit amet commodo nulla facilisi nullam. Sit amet nisl purus in.");

INSERT INTO reviewMedia (Review, mediaURL, Caption)
VALUES (1, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Ffetch%2Fc_limit%2Cq_75%2Cw_1200%2Fhttps%3A%2F%2Fassets.simpleviewinc.com%2Fsimpleview%2Fimage%2Fupload%2Fcrm%2Fvisitflorida%2F29632_9sb7ec5o7bte7hcom03u91fj25h65o2d_f6208e98-5056-a36a-0b591868cbcd88e9.jpg&tbnid=gFkRlerFvA3GBM&vet=12ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.visitflorida.com%2Flisting%2Fblue-spring-state-park%2F26275%2F&docid=M5_Xv-387VbliM&w=600&h=400&q=blue%20springs&ved=2ahUKEwj216vq_pz-AhXBmoQIHbN0B3MQMygJegUIARD2AQ", "a picture of volusia blue springs");


SELECT * FROM User;
SELECT * FROM Spring;
SELECT User.firstName, springReview.reviewText FROM 
springReview JOIN User ON springReview.reviewingUser = User.userID;
SELECT * FROM reviewMedia;
