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

CREATE TABLE favoritedSpring (
    favoritedSpringID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    User INT NOT NULL REFERENCES User(userID),
    Spring INT NOT NULL REFERENCES Spring(springID)
);

CREATE TABLE springMedia (
    springMediaID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Spring INT NOT NULL REFERENCES Spring(springID),
    mediaURL varchar(1500) NOT NULL,
    Caption varchar(300),
    mainImage BOOLEAN NOT NULL DEFAULT 0
);


