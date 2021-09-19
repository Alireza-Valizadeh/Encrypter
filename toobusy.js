const toobusy = require('toobusy-js');
toobusy.maxLag(500);

// app.use(function(req, res, next) {
//       if (toobusy()) {
//           logger.warn({message: "Server too busy for:" + context.getStore().get("id")})
//           res.send(503, "Server Too Busy");
//       } else {
//       next();
//       }
//   });

module.exports = toobusy
