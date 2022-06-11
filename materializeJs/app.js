//Storager Controller

//Item Controller
const itemCtrl = (function () {
  const Item = function (id, name, calories) {
    (this.id = id), (this.name = name), (this.calories = calories);
  };
  const data = {
    items: [
      // {
      //   id: 0,
      //   name: "Steak Dinner",
      //   caloires: 1200,
      // },
      // {
      //   id: 1,
      //   name: "Cookie Dinner",
      //   caloires: 300,
      // },
      // {
      //   id: 2,
      //   name: "Eggs Dinner",
      //   caloires: 400,
      // },
      // {
      //   id: 3,
      //   name: "Cola Dinner",
      //   caloires: 1400,
      // },
    ],

    currenItems: null,
    totalCalories: 0,
  };
  return {
    getItem: function () {
      return data.items;
    },
    data: data,
    addItem: function (name, calories) {
      let ID;
      if ((data.items, length > 0)) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      const calorie = parseInt(calories);
      newItem = new Item(ID, name, calorie);
      UICtrl.addListItem(newItem);
      data.items.push(newItem);
      return newItem;
    },
  };
})();

//Ui controller
const UICtrl = (function () {
  const UiSelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    ItemCaloriesInput: "#item-calories",
  };

  return {
    populateItemList: function (items) {
      let html = ``;
      items.forEach((element) => {
        html += `
         
         <li class="collection-item" id="item-${element.id}">
            <strong>${element.name}</strong> <em>${element.caloires} Calories</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
            </a>
        </li>
         `;
      });
      document.querySelector(UiSelectors.itemList).innerHTML = html;
    },

    getItemInput: function () {
      return {
        name: document.querySelector(UiSelectors.itemNameInput).value,
        calories: document.querySelector(UiSelectors.ItemCaloriesInput).value,
      };
    },
    getSelectors: function () {
      return UiSelectors;
    },
    addListItem: function (item) {
      document.querySelector(UiSelectors.itemList).style.display='block'
      const li = document.createElement("li");
      li.className = "collection-item";
      li.id = `item-${item.id}`;
      li.innerHTML = `
      <strong>${item.name}</strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
      </a>

      `;
      document
        .querySelector(UiSelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    clearField: function () {
      document.querySelector(UiSelectors.itemNameInput).value = "";
      document.querySelector(UiSelectors.ItemCaloriesInput).value = "";
    },
    hideList: function () {
      document.querySelector(UiSelectors.itemList).style.display = "none";
    },
  };
})();

//app controller
const App = (function (itemCtrl, UICtrl) {
  //Load Event Listeners
  const loadEventListeners = function () {
    const UIselectors = UICtrl.getSelectors();
    //AddItem Event
    document
      .querySelector(UIselectors.addBtn)
      .addEventListener("click", ItemAddSubmit);
  };

  //Add Item Submit
  const ItemAddSubmit = function (e) {
    e.preventDefault();
    // console.log("ADD");
    const input = UICtrl.getItemInput();
    if (input.name !== "" && input.calories !== "") {
      const newItem = itemCtrl.addItem(input.name, input.calories);
    }
    UICtrl.addListItem(newItem);
    UICtrl.clearField();
  };
  return {
    init: function () {
      const items = itemCtrl.getItem();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        UICtrl.populateItemList(items);
      }

      loadEventListeners();
    },
  };
})(itemCtrl, UICtrl);

App.init();
