const crypto = require("crypto");

const bio = {
    img: "christoph_waltz.jpg",
    firstName: "Christoph",
    lastName: "Waltz",
    about: "Christoph Waltz (German: [ˈkʁɪstɔf ˈvalts]; born 4 October 1956) is an Austrian and German actor. Primarily active in the United States,[1][2][3] he gained international recognition for his portrayal of villainous and supporting roles in English-language films. His accolades include two Academy Awards, two Golden Globe Awards, two BAFTA Awards, two Screen Actors Guild Awards, two Critics' Choice Movie Awards in addition to nomination for an Emmy Award."
};

const movies = [
    { id: crypto.randomUUID(), title: "Inglourious Basterds", description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same." },
    { id: crypto.randomUUID(), title: "Django Unchained", description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi." }
];


module.exports = { bio, movies };