window.onload = () => {
  const spheres = document.getElementsByClassName("js--sphere");
  const planes = document.getElementsByClassName("js--plane");
  const places = document.getElementsByClassName('js--place');

  const camera = document.getElementById('js--camera');
  const cursor = document.getElementById('js--entityCursor')

  let brush = "grey";

  for(let i=0; i < planes.length; i++){
    planes[i].onmouseenter = (event) => {
      console.log(brush);
      planes[i].setAttribute("color",brush);
    }
  }

  for(let i=0; i < spheres.length; i++){
    spheres[i].onmouseenter = (event) => {
      brush = spheres[i].getAttribute("color");
      console.log(brush);
      cursor.setAttribute("material", "color", brush);
    }
  }

  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt){
      let att = document.createAttribute("animation");
      att.value = "property: position; easing: linear; dur: 2000; to: " +
      this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);
    });
  }
}
