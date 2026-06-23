
const planets = {

mercury:{
name:"Mercury",
image:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
description:"Mercury is the closest planet to the Sun and the smallest planet in our Solar System.",
moons:[]
},

venus:{
name:"Venus",
image:"https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
description:"Venus is Earth's sister planet and the hottest planet in the Solar System.",
moons:[]
},

earth:{
name:"Earth",
image:"https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
description:"Earth is the only known planet that supports life.",
moons:[
{
name:"Moon",
image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
}
]
},

mars:{
name:"Mars",
image:"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
description:"Mars is known as the Red Planet and may have supported life in the past.",
moons:[
{
name:"Phobos",
image:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg"
},
{
name:"Deimos",
image:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Deimos-MRO.jpg"
}
]
},

jupiter:{
name:"Jupiter",
image:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
description:"Jupiter is the largest planet in the Solar System.",
moons:[
{
name:"Io",
image:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg"
},
{
name:"Europa",
image:"https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg"
},
{
name:"Ganymede",
image:"https://upload.wikimedia.org/wikipedia/commons/2/21/Ganymede_g1_true-edit1.jpg"
},
{
name:"Callisto",
image:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg"
}
]
},

saturn:{
name:"Saturn",
image:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
description:"Saturn is famous for its spectacular ring system.",
moons:[
{
name:"Titan",
image:"https://upload.wikimedia.org/wikipedia/commons/8/85/Titan_in_true_color.jpg"
},
{
name:"Enceladus",
image:"https://upload.wikimedia.org/wikipedia/commons/8/83/PIA17202_-_Approaching_Enceladus.jpg"
}
]
},

uranus:{
name:"Uranus",
image:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
description:"Uranus rotates on its side unlike other planets.",
moons:[
{
name:"Titania",
image:"https://upload.wikimedia.org/wikipedia/commons/5/59/Titania_%28moon%29_color.jpg"
},
{
name:"Oberon",
image:"https://upload.wikimedia.org/wikipedia/commons/3/35/Oberon_%28moon%29.jpg"
}
]
},

neptune:{
name:"Neptune",
image:"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
description:"Neptune is known for its strong winds and deep blue color.",
moons:[
{
name:"Triton",
image:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Triton_moon_mosaic_Voyager_2.jpg"
}
]
},

pluto:{
name:"Pluto",
image:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg",
description:"Pluto is a dwarf planet located in the Kuiper Belt.",
moons:[
{
name:"Charon",
image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Charon_in_True_Color_-_High-Res.jpg"
}
]
}

};

function showPlanet(planet){

const data = planets[planet];

let moonsHTML = "";

if(data.moons.length > 0){

data.moons.forEach(moon=>{

moonsHTML += `

<div class="moon-card">

<img src="${moon.image}">

<h4>${moon.name}</h4>

</div>

`;

});

}else{

moonsHTML = `
<p style="text-align:center;">
No moons discovered.
</p>
`;

}

document.getElementById("planetData").innerHTML = `

<h2 class="planet-title">

🪐 ${data.name}

</h2>

<img
src="${data.image}"
class="planet-main-image">

<p class="planet-description">

${data.description}

</p>

<h3 style="
text-align:center;
margin-top:30px;
margin-bottom:20px;
color:#4fc3ff;">

🌕 Related Moons

</h3>

<div class="moon-grid">

${moonsHTML}

</div>

`;

document.getElementById("planetModal")
.style.display="block";

}

function closeModal(){

document.getElementById("planetModal")
.style.display="none";

}

window.onclick = function(event){

const modal =
document.getElementById("planetModal");

if(event.target === modal){

modal.style.display="none";

}

};

const searchBox =
document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const value =
searchBox.value.toLowerCase();

const cards =
document.querySelectorAll(".planet-card");

cards.forEach(card=>{

const name =
card.querySelector("h3")
.textContent
.toLowerCase();

if(name.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

