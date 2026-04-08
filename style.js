let input = document.querySelector("input");
let btns = document.querySelector("button");
let username = document.querySelector(".username");
let description = document.querySelector(".description");
let power = document.querySelector(".power");
let universe = document.querySelector(".universe");
let image = document.querySelector("img");

async function user() {
  let data = await fetch("./data.json");
  let asun = await data.json();
  return asun;
}

btns.addEventListener("click", () => {
  let userinput = input.value.trim(); 

  user().then((data) => {
    let heroes = data.superheroes;

    let data2 = heroes.filter((e) => {
      return e.name.toLowerCase() === userinput.toLowerCase();
    });

    console.log(data2);

    if (data2.length > 0) {
      let hero = data2[0];

      image.src = hero.image;
      image.alt = hero.name;

      username.innerHTML = `<b>Name:</b> ${hero.name}`;
      power.innerHTML = `<b>Power:</b> ${hero.superpower}`;
      description.innerHTML = `<b>Abilities:</b> ${hero.abilities.join(", ")}`;
      universe.innerHTML = ""; // 
    } else {
      image.src = "";
      username.innerHTML = "No superhero found!";
      description.innerHTML = "";
      power.innerHTML = "";
      universe.innerHTML = "";
    }
  });
});