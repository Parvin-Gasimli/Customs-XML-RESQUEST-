// function nameIterator(names){
//     let nextIndex=0;
//     return {
//         next:function(){
//             return nextIndex<names.length?
//             {  value:names[nextIndex++],done:false}:
//             {done:true}

//         }
//     }
// }
// const namesArr=["Jack","Jill","John"]
// const names=nameIterator(namesArr)
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// function* sayNames(){
//     yield "jack";
//     yield "JILL";
//     yield "DON"
// }

// const name=sayNames()
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// function* CreateIds(){
//     let index=0;
//     while(true){
//         yield index++
//     }
// }
// const gen=CreateIds()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

const data = [
  {
    name: "Johnn Doe",
    age: 34,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image:
      "https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612",
  },
  {
    name: "Jane Brown",
    age: 43,
    gender: "female",
    lookingfor: "male",
    location: "Miami MA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    name: "William Don",
    age: 23,
    gender: "male",
    lookingfor: "female",
    location: "GERMANY MA",
    image:
      "https://media.gettyimages.com/photos/smiling-hispanic-man-against-white-background-picture-id1314489757?s=612x612",
  },
];


document.getElementById("next").addEventListener("click",nextProfile)

function nextProfile(){
const currentProfile=profile.next().value
console.log(currentProfile);

   if(currentProfile!==undefined){
    document.getElementById("profileDisplay").innerHTML=`
  
    <ul >
    <li > name ${currentProfile.name}</li>
    <li >age: ${currentProfile.age}</li>
    <li >gender: ${currentProfile.gender}</li>
    <li>location: ${currentProfile.location}</li>
    <li >lookingfor: ${currentProfile.lookingfor}</li>
    </ul>
    `


    document.getElementById("imageDisplay").innerHTML=`
    <img style="width:250px;height:250px;object-fit:cover;border-radius:100%" src="${currentProfile.image}"/>
    `
   }
   else{
       window.location.reload()
   }
}

function ProfileInterator(profiles){
    let nextIndex=0
    return {
        next:function(){
        
          return nextIndex<profiles.length?
                {value:profiles[nextIndex++],done:false}
                :{done:true}

            
        }
    }
}
const profile =ProfileInterator(data)
console.log(profile);
console.log(profile.next());