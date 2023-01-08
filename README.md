# Social-network-API

## Table of content

- [Description of Project](#description-of-project)
- [Project Requirements](#project-requirements)
- [What I have learned](#what-i-have-learned)
- [Challenges](#challenges)
- [Installation](#installation-💾)
- [Link to walkthrough video](#link-to-walkthrough-video)

## Description of Project
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Project Requirements

Here are the main requirements of the project:

- When  I enter the command to invoke the application then my server is started and the Mongoose models are synced to the MongoDB database
- When I open API GET routes in Insomnia for users and thoughts then the data for each of these routes is displayed in a formatted JSON
- When I test API POST, PUT, and DELETE routes in Insomnia then I am able to successfully create, update, and delete users and thoughts in my database
- When I test API POST and DELETE routes in Insomnia then I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## What I have learned 

This project was a great way to put in practice eveyrything I have learned about MongoDB and Mongoose. I now feel confortable with builiding a schema, setting up values, validators... This project also allowed me to practice making complex queries and complex object updates.

## Challenges

Populating the subdocuments and having them show up on the GET routes was challenging. I was able to define those relationships in the controllers and the user's arrays are now showing each of their thoughts

## Installation 💾

Run the following command:

- npm i
- npm start

### Link to walkthrough video

[Link to walkthrough video](https://drive.google.com/file/d/1K6cHQVoatef8ngo9o-vhxwTx_TQR4_2b/view)
