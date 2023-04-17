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
    springName varchar(100) NOT NULL UNIQUE,
    springState varchar(30) NOT NULL,
    County varchar(30) NOT NULL,
    Latitude decimal(20, 10) NOT NULL,
    Longitude decimal(20, 10) NOT NULL,
    springDescription TEXT NOT NULL
);

CREATE TABLE springReview (
    springReviewID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Spring int NOT NULL REFERENCES Spring(springID) ON DELETE CASCADE,
    reviewingUser INT NOT NULL REFERENCES Users(userID) ON DELETE CASCADE,
    userSpringRating decimal(2,1) NOT NULL,
    reviewText TEXT NOT NULL
);

CREATE TABLE reviewMedia(
    reviewMediaID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Review INT NOT NULL REFERENCES springReview(springReviewID),
    mediaURL  TEXT(1000) NOT NULL,
    Caption varchar(300)
);

CREATE TABLE favoritedSpring (
    favoritedSpringID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    User INT NOT NULL REFERENCES User(userID) ON DELETE CASCADE,
    Spring INT NOT NULL REFERENCES Spring(springID) ON DELETE CASCADE
);

CREATE TABLE springMedia (
    springMediaID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Spring INT NOT NULL REFERENCES Spring(springID) ON DELETE CASCADE,
    mediaURL varchar(1500) NOT NULL,
    Caption varchar(300),
    mainImage BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE amenityChoice (
    amenityChoiceID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    amenityType varchar(100) NOT NULL,
    amenityIcon varchar(1000)
);

CREATE TABLE Amenity (
    amenityID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Spring INT NOT NULL REFERENCES Spring(springID) ON DELETE CASCADE,
    amenityType INT NOT NULL REFERENCES amenityChoices(amenityChoicesID) ON DELETE CASCADE,
    amenityDescription varchar(1000) NOT NULL,
    Cost varchar(300),
    amenityRating DECIMAL ( 2, 1 ) NOT NULL,
    amenityTitle varchar(300) NOT NULL
);

CREATE TABLE amenityMedia (
    amenityMediaID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Amenity INT NOT NULL REFERENCES Amenity(amenityID) ON DELETE CASCADE,
    mediaURL varchar(1500) NOT NULL,
    Caption varchar(300),
    mainImage BOOLEAN NOT NULL DEFAULT 0 
);