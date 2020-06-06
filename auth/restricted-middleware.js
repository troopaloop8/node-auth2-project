const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const [token] = req.headers.authorization.split(" ");
//   const {token} = req.headers.authorization;  
const directive = "bearer"
console.log("MISTER DIRECTOR ",directive)
    console.log(token)
  if (!directive || directive != "bearer") {
    res.status(401).json({ message: "git gud scrub" });
  }
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {


        console.log("Bad token detected", err, token);
        res.status(401).json({ message: `You sent us a bad token` });
      } else {
        req.decodedJwt = decodedToken;
        console.log(decodedToken);
        next();
      }
    });
  } else {
      console.log("no token detected");
    res.status(401).json({ message: `you dont have the token to access this` });
  }
};
