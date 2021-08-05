import axios from "axios";
const {
  GET,
  GETDOGS,
  GETDOGDB,
  GETDOGBYID,
  GET_TEMPERAMENTS,
  PAGINAR,
  GETBYTEMPERAMENTS,
} = require("../actiontypes");

export function getDogs(order) {
  switch (order) {
    case "pesados":
      return function (dispatch) {
        return axios
          .get("http://localhost:3001/dogs")
          .then((resp) => {
            var res = resp.data.sort((a, b) => {
              var opca = a.weight.metric || a.weight;
              var opcb = b.weight.metric || b.weight;
              a = opca.split("-");
              b = opcb.split("-");
              var va = parseInt(a[1]) || parseInt(a[0]);
              var vb = parseInt(b[1]) || parseInt(b[0]);
              if (va < vb) {
                return 1;
              }
              if (va > vb) {
                return -1;
              }
              return 0;
            });
            dispatch({ type: GET, payload: res });
          })
          .catch((e) => console.log(e));
      };
    case "livianos":
      return function (dispatch) {
        return axios
          .get("http://localhost:3001/dogs")
          .then((resp) => {
            var res = resp.data.sort((a, b) => {
              var opca = a.weight.metric || a.weight;
              var opcb = b.weight.metric || b.weight;
              a = opca.split("-");
              b = opcb.split("-");
              var va = parseInt(a[1]) || parseInt(a[0]);
              var vb = parseInt(b[1]) || parseInt(b[0]);
              if (va < vb) {
                return -1;
              }
              if (va > vb) {
                return 1;
              }
              return 0;
            });
            dispatch({ type: GET, payload: res });
          })
          .catch((e) => console.log(e));
      };
    case "A-Z":
      return function (dispatch) {
        return axios
          .get("http://localhost:3001/dogs")
          .then((resp) => {
            var res = resp.data.sort((a, b) => {
              var opca = a.name;
              var opcb = b.name;
              if (opca < opcb) {
                return -1;
              }
              if (opca > opcb) {
                return 1;
              }
              return 0;
            });
            dispatch({ type: GET, payload: res });
          })
          .catch((e) => console.log(e));
      };
    case "Z-A":
      return function (dispatch) {
        return axios
          .get("http://localhost:3001/dogs")
          .then((resp) => {
            var res = resp.data.sort((a, b) => {
              var opca = a.name;
              var opcb = b.name;
              if (opca < opcb) {
                return 1;
              }
              if (opca > opcb) {
                return -1;
              }
              return 0;
            });
            dispatch({ type: GET, payload: res });
          })
          .catch((e) => console.log(e));
      };
    default:
      return function (dispatch) {
        return axios
          .get("http://localhost:3001/dogs")
          .then((resp) => {
            // const limitedList = resp.data.slice(0, 8);
            dispatch({ type: GET, payload: resp.data });
          })
          .catch((e) => console.log(e));
      };
  }
}

export function getdogsbyname(name) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/dogs?name=" + name)
      .then((resp) => {
        // const limitedList = resp.data.slice(0, 8);
        dispatch({ type: GETDOGS, payload: resp.data });
      })
      .catch((e) => console.log(e));
  };
}

export function getdbdogs() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/dogs")
      .then((resp) => {
        var res = resp.data.filter((perro) => perro.DB === true);
        dispatch({ type: GETDOGDB, payload: res });
      })
      .catch((e) => console.log(e));
  };
}
export function getdogbyid(id) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/dogs/" + id)
      .then((resp) => {
        var res = resp.data;
        if (resp.data.DB) {
          res = [];
          res = res.concat(resp.data);
        }
        dispatch({ type: GETDOGBYID, payload: res });
      })
      .catch((e) => console.log(e));
  };
}
export function gettemperaments() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/temperaments")
      .then((resp) => {
        dispatch({ type: GET_TEMPERAMENTS, payload: resp.data });
      })
      .catch((e) => console.log(e));
  };
}
export function getbytemperaments(nombre) {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/dogs")
      .then((resp) => {
        const res = [];
        resp.data.map((dog) => {
          if (dog.temperament) {
            var t = dog.temperament;
            if (t[0].name) {
              t.map((t2) => {
                if (t2.name.includes(nombre)) {
                  res.push(dog);
                }
                return true;
              });
            } else {
              if (t.includes(nombre)) {
                res.push(dog);
              }
            }
          }
          return true;
        });
        dispatch({ type: GETBYTEMPERAMENTS, payload: res });
      })
      .catch((e) => console.log(e));
  };
}
export function Paginar(pag) {
  return function (dispatch) {
    dispatch({ type: PAGINAR, payload: pag });
  };
}
