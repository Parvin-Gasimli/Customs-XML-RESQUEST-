//MODULE PATTERM BASIC STRUKTUR
(function () {
  //DECLare private varaible and funtions
  return {};
})();

//Standart Modul Pattern
const UICtrl = (function () {
  let text = "Hello World";
  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText()
console.log(UICtrl.text);

//Revaling Module Pattern
const ItemCtrl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log("item added....");
  }
  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Parvun" });
