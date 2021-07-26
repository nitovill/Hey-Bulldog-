const { Temperament } = require("../db.js");
const axios = require("axios");

function GetAllTemperament(req, res) {
  Temperament.findAll()
    .then((resp) => {
      if (resp.length === 0) {
        axios
          .get("https://api.thedogapi.com/v1/breeds")
          .then((apidogs) => {
            apidogs.data.map((dog) => {
              if (dog.temperament) {
                resp = resp.concat(dog.temperament.split(","));
              }
            });
          })
          .then(() => {
            resp.map(async (temp) => {
              temp = temp.trim();
              await Temperament.findOrCreate({
                where: { name: temp },
                defaults: {
                  name: temp,
                },
              });
            });
          });
      }
    })
    .then(() => {
      Temperament.findAll().then((resp) => res.send(resp));
    });
}
module.exports = {
  GetAllTemperament,
};
