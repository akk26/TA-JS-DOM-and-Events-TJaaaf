let btnSection = document.querySelector(".btn-section");

let ul = document.querySelector(".ul")

let allHouses = got.houses.reduce((acc, cv)=>{
  acc =  acc.concat(cv)
  return acc;
 
}, [])

let houseName = got.houses.reduce((acc,houseName) =>{
  acc = acc.concat(houseName.name);
  return acc
},[])

houseName.forEach((eachName) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = eachName;
btn.addEventListener("click", () => {
  allHouses.forEach((elem) => {
    // console.log(elem.name)
    if (elem.name.includes("Lannisters")) {
      elem.people.map((each) => {
        createUI(each);
      });
    } else {
      createUI(allHouses)
    }
  })
});
  
  btnSection.append(btn)
});


  

  function createUI(element) {

    let li = document.createElement("li");
    li.classList.add("li");

    let img = document.createElement("img");
    img.src = element.image;

    let h4 = document.createElement("h4");
    h4.innerText = element.name;

    let description = document.createElement("p");
    description.innerText = element.description;

    let btn = document.createElement("a");
    btn.classList.add("btn2");
    btn.innerText = "Know More!";
    btn.href = element.wikiLink;

    li.append(img, h4, description, btn);
    ul.append(li);
  }

