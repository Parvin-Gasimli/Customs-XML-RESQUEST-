function esayHTTP() {
  this.http = new XMLHttpRequest();
}

//HHTP GET REQUEST

esayHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("ERROR:" + self.http.status);
    }
  };
  this.http.send();
};
//HHTP POST REQUEST

esayHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};
//HHTP PUT REQUEST
esayHTTP.prototype.update = function (url, data, callback) {
    this.http.open("PUT", url, true);
  
    this.http.setRequestHeader("Content-type", "application/json");
    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };
  
    this.http.send(JSON.stringify(data));
  };
//HHTP DELETE REQUEST
esayHTTP.prototype.delete = function (url, callback) {
    this.http.open("DELETE", url, true);
    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, 'POST DELETED');
      } else {
        callback("ERROR:" + self.http.status);
      }
    };
    this.http.send();
  };