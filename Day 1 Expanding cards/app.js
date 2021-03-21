var images = [
  {
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    desc: "Autumn",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
    desc: "Forest",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg",
    desc: "Mountain",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg",
    desc: "Beautiful Mountain",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg",
    desc: "Beautiful view",
  },
];

var cont = document.querySelector(".container");
var div = document.createElement("div");
var txt = document.createElement("h3");
images.forEach((data) => {
  var div = document.createElement("div");
  var txt = document.createElement("h3");
  div.classList.add("panel");
  div.style.backgroundImage = `url(${data.image})`;
  txt.innerHTML = data.desc;
  div.append(txt);
  cont.append(div);
  var panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeactiveclass();
      panel.classList.add("active");
    });
  });
  function removeactiveclass() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
});
