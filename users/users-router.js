const router = require("express").Router();
const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const checkRole = require("../auth/check-role-middleware.js");
//checkRole("admin"),
router.get("/", restricted,  (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
