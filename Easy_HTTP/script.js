class EasyHTTP {
  //Get Request
  get(url) {
    return new Promise(function (reslove, rejected) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => reslove(data))
        .catch((err) => rejected(err));
    });
  }

  //Make HTTP POST REQYES
  post(url, data) {
    return new Promise(function (reslove, rejected) {
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body:JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => reslove(data))
        .catch((err) => rejected(err));
    });
  }
  //Make HTTP PUT request
  put(url, data) {
    return new Promise(function (reslove, rejected) {
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body:JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => reslove(data))
        .catch((err) => rejected(err));
    });
  }

  //Matke Delete reques
  delete(url, data) {
    return new Promise(function (reslove, rejected) {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
       
      })
        .then((res) => res.json())
        .then((data) => reslove("Resuurce deleted...."))
        .catch((err) => rejected(err));
    });
  }
}
