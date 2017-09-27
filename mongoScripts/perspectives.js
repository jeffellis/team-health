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
        "topic": "Easy to release", 
        "awesome": "Releasing is simple, safe, painless & mostly automated.",
        "crappy": "Releasing is risky, painful, lots of manual work, and takes forever."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Suitable process", 
        "awesome": "Our way of working fits us perfectly",
        "crappy": "Our way of working sucks"
    },
    {
        "sourceSet": sourceSet,
        "topic": "Tech quality (code base health)", 
        "awesome": "We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage.",
        "crappy": "Our code is a pile of dung, and technical debt is raging out of control"
    },
    {
        "sourceSet": sourceSet,
        "topic": "Value", 
        "awesome": "We deliver great stuff! We’re proud of it and our stakeholders are really happy.",
        "crappy": "We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Speed", 
        "awesome": "We get stuff done really quickly.No waiting, no delays.",
        "crappy": "We never seem to get done with anything.We keep getting stuck or interrupted. Stories keep getting stuck on dependencies."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Mission", 
        "awesome": "We know exactly why we are here, and we are really excited about it.",
        "crappy": "We have no idea why we are here, there is no high level picture or focus. Our so-called mission is completely unclear and uninspiring."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Fun", 
        "awesome": "We love going to work, and have great fun working together.",
        "crappy": "Boooooooring."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Learning", 
        "awesome": "We’re learning lots of interesting stuff all the time!",
        "crappy": "We never have time to learn anything"
    },
    {
        "sourceSet": sourceSet,
        "topic": "Support", 
        "awesome": "We always get great support & help when we ask for it!",
        "crappy": "We keep getting stuck because we can’t get the support & help that we ask for."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Pawns or players", 
        "awesome": "We are in control of our destiny! We decide what to build and how to build it.",
        "crappy": "We are just pawns in a game of chess, with no influence over what we build or how we build it."
    }
]);

sourceSet = "ca-agile-central";
collection.deleteMany({sourceSet: sourceSet});

collection.insert([
    {
        "sourceSet": sourceSet,
        "topic": "Development Environment", 
        "awesome": "Our development environment is a pleasure to use.",
        "crappy": "Massive PITA."
    },
    {
        "sourceSet": sourceSet,
        "topic": "Foosball",
        "awesome": "Our foosball facilities are in top form.",
        "crappy": "Broken men, square balls, and unlevel tables"
    }
]);
