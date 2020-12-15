window.onload = () => {
  const spheres = document.getElementsByClassName("js--sphere");
  const planes = document.getElementsByClassName("js--plane");
  const places = document.getElementsByClassName('js--place');

  const camera = document.getElementById('js--camera');
  const cursor = document.getElementById('js--entityCursor')

  const mengbal1 = document.getElementsByClassName('js--mengbal1');
  const mengbal2 = document.getElementsByClassName('js--mengbal2');
  const mengplaat1 = document.getElementById('js--mengplaat1');
  const mengbox1 = document.getElementById('js--mengbox1');
  const mengplaat2 = document.getElementById('js--mengplaat2');
  const mengbox2 = document.getElementById('js--mengbox2');
  const gemengd = document.getElementById('js--gemengd');



  let brush = "grey";
  var gekozenKleur1;
  var gekozenKleur2;

  for(let i=0; i < mengbal1.length; i++){
    mengbal1[i].onmouseenter = (event) => {
      gekozenKleur1 = mengbal1[i].getAttribute("color");
      mengplaat1.setAttribute("color", gekozenKleur1);
      mengbox1.setAttribute("color", gekozenKleur1);
      mengKleuren();
    }
  }

  for(let i=0; i < mengbal2.length; i++){
    mengbal2[i].onmouseenter = (event) => {
      gekozenKleur2 = mengbal2[i].getAttribute("color");
      mengplaat2.setAttribute("color", gekozenKleur2);
      mengbox2.setAttribute("color", gekozenKleur2);
      mengKleuren();
      }
    }

  function mengKleuren() {
    console.log("Start functie");
    if(gekozenKleur1 == gekozenKleur2){
      console.log("Dezelfde kleur");
      gemengd.setAttribute("color", gekozenKleur1);
  } else if (gekozenKleur1 == 'red' && gekozenKleur2 == 'blue') {
      gemengd.setAttribute("color", "purple");
    }
  }


  for(let i=0; i < planes.length; i++){
    planes[i].onmouseenter = (event) => {
      planes[i].setAttribute("color",brush);
    }
  }

  for(let i=0; i < spheres.length; i++){
    spheres[i].onmouseenter = (event) => {
      brush = spheres[i].getAttribute("color");
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
