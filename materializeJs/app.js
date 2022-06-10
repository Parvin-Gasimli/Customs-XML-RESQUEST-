//Storager Controller

//Item Controller
const itemCtrl = (function () {
  const Item = function (id, name, calories) {
    (this.id = id), (this.name = name), (this.calories = calories);
  };
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        caloires: 1200,
      },
      {
        id: 1,
        name: "Cookie Dinner",
        caloires: 300,
      },
      {
        id: 2,
        name: "Eggs Dinner",
        caloires: 400,
      },
      {
        id: 3,
        name: "Cola Dinner",
        caloires: 1400,
      },
    ],
    currenItems: null,
    totalCalories: 0,
  };
  return{
      data:data
  }
})();


//Ui controller
const UICtrl = (function () {})();

//app controller
const App = (function (itemCtrl, UICtrl) {

    console.log(itemCtrl.data);
})(itemCtrl, UICtrl);
