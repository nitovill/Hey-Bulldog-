const { Router } = require("express");
const router = Router();
const dogs = require("./dogs");
const temperaments = require("./temperaments");

router.use("/dogs", dogs);
router.use("/temperaments", temperaments);

module.exports = router;
