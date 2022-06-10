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
ItemCtrl.add({ id: 1, name: "Parvin" });
console.log(ItemCtrl.get(1));

//Single Pattern
const singgelton = (function () {
  let instance;
  function createInstance() {
    const object = new Object({ id: 1 });
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = singgelton.getInstance();
console.log(instanceA);

// //Factory Pattern
// function memberFactory(){
//   this.createmember=function(name,type){
//     let member;
//     if(type==='simple'){
//       member=new SimpleMemebership(name)
//     }
//     else if(type==='standart'){
//       member=new SatandartMembership(name)

//     }
//     else if(type==='super'){
//       member=new SuperMembership(name)
//     }

//     member.type=type;
//     member.define=function(){
//       console.log(`${this.name} (${this.type}):${this.cost}`);
//     }
//     return member

//   }
// }
// const SimpleMemebership=function(name){
//   this.name=name;
//   this.cost='$5'

// }
// const SatandartMembership=function(name){
//   this.name=name;
//   this.cost='$12'

// }
// const SuperMembership=function(name){
//   this.name=name;
//   this.cost ='$23'

// }

// const members=[];
// const factory=new memberFactory()
// members.push(factory.createmember("John doe","simple"))
// members.push(factory.createmember("John doe1","simple2"))
// members.push(factory.createmember("John doe3","simple3"))
// members.push(factory.createmember("John doe4","simple4"))
// console.log(members);

// //Observe Pattern
// function EventObserve() {
//   this.observe = [];
// }
// EventObserve.prototype = {
//   subscribe: function (fn) {
//     this.observe.push(fn);
//     console.log(`you are now subscribed to ${fn} name`);
//   },
//   unsubscribe: function (fn) {
//     this.observe = this.observe.filter(function (item) {
//       if (item !== fun) {
//         return item;
//       }
//     });
//     console.log(`you are un unscribed fro,${fn.name}`);
//   },
//   fire: function(){
//     this.observe.forEach( function(item){
//       item.call()
//     })
//   }

// };

// const Click =EventObserve()
// document.querySelector(".sub-ms").addEventListener('click',function(){
//   Click.subscribe(getCurMilliSecond)
// })
// document.querySelector(".unsub-ms").addEventListener('click',function(){
//   Click.unsubscribe(getCurMilliSecond)
// })
// document.querySelector(".unsub-ms").addEventListener('click',function(){
//   Click.fire()
// })
// const getCurMilliSecond=function(){
//   console.log(`current Milli Second ${new Date().toMilliseconds()}`);
// }

//Meadiator Pattern
// const user = function (name) {
//   this.name = name;
//   this.Chatroom = null;
// };
// user.prototype = {
//   send: function (message, to) {
//     this.Chatroom.send(message, this, to);
//   },
//   receive: function (message, from) {
//     console.log(`${from.name} to ${this.name}:${message}`);
//   },
// };
// const Chatroom = function () {
//   let users = {};
//   return {
//     register: function (user) {
//       users[user.name] = user;
//       user.Chatroom = this;
//     },
//     send: function (message, from, to) {
//       if (to) {
//         to.receive(message,from)
//       } else {
//         for(key in users){
//           if(user[key]!==from){
//             user[key].receive(message,from)
//           }
//         }
//       }
//     },
//   };
// };
// const brad=new user('brad')
// const jeff=new user('Jeff')
// const Sara=new user('Sara')
// const chatroom=new Chatroom()
// chatroom.register(brad)
// chatroom.register(jeff)
// chatroom.register(Sara)
// brad.send('hello Jeff',jeff)
// brad.send('hello Sara how are you?',jeff)

//small Pattern
// const PageSatet=function(){
//   let currentState=new homeState(this)
//   this.init =function(){
//     this.change(new homeState)
//   }
//   this.change=function(){
//     currentState=state;
//   }

// }

// //Home state
// const homeState=function(page){
//   document.querySelector('#heading').textContent=null
//   document.querySelector('#content').innerHTML=`
  
  
//   `
//}
