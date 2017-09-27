#!/usr/bin/env mongo

var host = "localhost"
var database = "squad_health_check"
var dbh = new Mongo(host).getDB(database);
var collection = dbh.getCollection("perspectives");
var sourceSet = "spotify-original-model"
collection.deleteMany({sourceSet: sourceSet});

collection.insert([
    {
        "sourceSet": sourceSet,
        "area": "Easy to release", 
        "green": "Releasing is simple, safe, painless & mostly automated.",
        "red": "Releasing is risky, painful, lots of manual work, and takes forever."
    },
    {
        "sourceSet": sourceSet,
        "area": "Suitable process", 
        "green": "Our way of working fits us perfectly",
        "red": "Our way of working sucks"
    },
    {
        "sourceSet": sourceSet,
        "area": "Tech quality (code base health)", 
        "green": "We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage.",
        "red": "Our code is a pile of dung, and technical debt is raging out of control"
    },
    {
        "sourceSet": sourceSet,
        "area": "Value", 
        "green": "We deliver great stuff! We’re proud of it and our stakeholders are really happy.",
        "red": "We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us."
    },
    {
        "sourceSet": sourceSet,
        "area": "Speed", 
        "green": "We get stuff done really quickly.No waiting, no delays.",
        "red": "We never seem to get done with anything.We keep getting stuck or interrupted. Stories keep getting stuck on dependencies."
    },
    {
        "sourceSet": sourceSet,
        "area": "Mission", 
        "green": "We know exactly why we are here, and we are really excited about it.",
        "red": "We have no idea why we are here, there is no high level picture or focus. Our so-called mission is completely unclear and uninspiring."
    },
    {
        "sourceSet": sourceSet,
        "area": "Fun", 
        "green": "We love going to work, and have great fun working together.",
        "red": "Boooooooring."
    },
    {
        "sourceSet": sourceSet,
        "area": "Learning", 
        "green": "We’re learning lots of interesting stuff all the time!",
        "red": "We never have time to learn anything"
    },
    {
        "sourceSet": sourceSet,
        "area": "Support", 
        "green": "We always get great support & help when we ask for it!",
        "red": "We keep getting stuck because we can’t get the support & help that we ask for."
    },
    {
        "sourceSet": sourceSet,
        "area": "Pawns or players", 
        "green": "We are in control of our destiny! We decide what to build and how to build it.",
        "red": "We are just pawns in a game of chess, with no influence over what we build or how we build it."
    }
]);

sourceSet = "ca-agile-central";
collection.deleteMany({sourceSet: sourceSet});

collection.insert([
    {
        "sourceSet": sourceSet,
        "area": "Development Environment", 
        "green": "Our development environment is a pleasure to use.",
        "red": "Massive PITA."
    },
    {
        "sourceSet": sourceSet,
        "area": "Foosball",
        "green": "Our foosball facilities are in top form.",
        "red": "Broken men, square balls, and unlevel tables"
    }
]);
