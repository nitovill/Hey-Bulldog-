const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { Dog, Temperament } = require("../db.js");

function GetDogs(req, res, next) {
  const { name } = req.query;
  if (name) {
    const namemin = name.toLowerCase();
    function filtrar(perro) {
      return perro.name.includes(namemin);
    }
    const api = axios(
      `https://api.thedogapi.com/v1/breeds/search?q=${namemin}`
    );
    const db = Dog.findAll({
      include: {
        model: Temperament,
        as: "temperament",
      },
    });
    Promise.all([api, db]).then((resp) => {
      const [dogsapi, dogsbd] = resp;
      const dbfiltrados = dogsbd.filter(filtrar);
      const response = dbfiltrados.concat(dogsapi.data);
      if (response.length === 0) {
        res.send([]);
      } else {
        // const limitedList = response.slice(0, 8);
        return res.json(response);
      }
    });
  } else {
    const api = axios(`https://api.thedogapi.com/v1/breeds`);
    const db = Dog.findAll({
      include: {
        model: Temperament,
        as: "temperament",
      },
    });
    Promise.all([api, db])
      .then((dogs) => {
        const [apidogs, dbdogs] = dogs;
        const response = dbdogs.concat(apidogs.data);
        // const limitedList = response.slice(0, 8);
        return res.json(response);
      })
      .catch((err) => next(err));
  }
}

async function CreateDog(req, res) {
  const { name, weight, height, image, life_span, DB, temperaments } = req.body;
  const newdog = await Dog.create({
    name,
    height,
    weight,
    id: uuidv4(),
    image: image,
    life_span,
    DB: DB || true,
  });
  temperaments.map((temp) => {
    newdog.setTemperament(temp);
  });
  res.send(newdog);
}

function GetDogById(req, res) {
  const { id } = req.params;
  if (id.length < 25) {
    axios.get("https://api.thedogapi.com/v1/breeds").then((dogs) => {
      const resp = dogs.data.filter((dog) => dog.id == id);
      if (resp) {
        res.send(resp);
      } else {
        res.send([]);
      }
    });
  } else {
    return Dog.findByPk(id, {
      include: {
        model: Temperament,
        as: "temperament",
      },
    }).then((resp) => res.send(resp));
  }
}
module.exports = {
  CreateDog,
  GetDogs,
  GetDogById,
};
