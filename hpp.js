const hpp = require("hpp")
// app.use(bodyParser.urlencoded()); // Make sure the body is parsed beforehand.
// Secure all routes at first.
// You could add separate HPP middlewares to each route individually but the day will come when you forget to secure a new route.
app.use(hpp());
 
// Add a second HPP middleware to apply the whitelist only to this route.
app.use('/search', hpp({ whitelist: [ 'filter' ] }));

// GET /search?firstname=John&firstname=Alice&lastname=Doe

// =>

// req: {
//     query: {
//         firstname: 'Alice',
//         lastname: 'Doe',
//     },
//     queryPolluted: {
//         firstname: [ 'John', 'Alice' ]
//     }
// }

// POST firstname=John&firstname=Alice&lastname=Doe

// =>

// req: {
//     body: {
//         firstname: 'Alice',
//         lastname: 'Doe',
//     },
//     bodyPolluted: {
//         firstname: [ 'John', 'Alice' ]
//     }
// }
