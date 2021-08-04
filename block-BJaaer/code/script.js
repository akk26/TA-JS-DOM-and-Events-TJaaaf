let form = document.querySelector("form");
let boxTwo = document.querySelector(".box-two")


let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.name = form.elements.text.value;
  
  userInfo.email = form.elements.emailTwo.value;

  userInfo.watch = form.elements.movies.value;

  userInfo.color = form.elements.color.value;
  
  userInfo.rating = form.elements.rating.value;

  userInfo.genre = form.elements.drone.value;
  
  userInfo.terms = form.elements.terms.checked;
  form.style.display = "none";


  let div = document.createElement("div");
  div.classList.add("user-details");
  document.body.append(div);

  let details = document.querySelector(".user-details");
  let h3 = document.createElement("h3");
  h3.classList.add("top");
  details.append(h3);
  h3.innerText = `Hello ${userInfo.name}`
  
  let p = document.createElement("p");
  details.append(p);
  p.innerText = userInfo.email;
  
  let p2 = document.createElement("p");
  details.append(p2);
  p2.innerText = userInfo.watch;

  let p3 = document.createElement("p");
  details.append(p3);
  p3.innerText = userInfo.color;

  let p4 = document.createElement("p");
  details.append(p4);
  p4.innerText = userInfo.rating;

  let p5 = document.createElement("p");
  details.append(p5);
  p5.innerText = userInfo.genre;

  let link = document.createElement("a");
  details.append(link);

  if (userInfo.terms === true) {
    link.innerText = "🤜 You agree to terms and conditions"
  } else {
    link.innerText = "Please accept terms and conditions"
  }
  let btn = document.createElement("button");
  btn.classList.add("btn-cross");
  btn.innerText = "close"
  div.prepend(btn);

  btn.addEventListener("click", () => {
    div.style.display = "none";
    form.style.display = "block";
    document.location.reload(true);
  })
}



form.addEventListener("submit",handleSubmit)