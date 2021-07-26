const { Router } = require("express");
const router = Router();
const { GetAllTemperament } = require("../controllers/temperaments");

router.get("/", GetAllTemperament);

module.exports = router;
