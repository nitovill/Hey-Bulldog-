const { Router } = require("express");
const router = Router();
const { CreateDog, GetDogs, GetDogById } = require("../controllers/dogs");

router.get("/", GetDogs);
router.get("/:id", GetDogById);
router.post("/", CreateDog);

module.exports = router;
