function desplieguemenu() {
    var a = document.getElementById('desplegable_menu');
    if (a.style.display === 'none') {
       a.style.display = 'flex'; 
    }
    else {
      a.style.display = 'none';
    }
  };

function despliegueContact(){
    var b = document.getElementById('desplegable_Contact');
    if (b.style.display === 'none'){
        b.style.display = 'flex';
    }
    else {
        b.style.display = 'none';
    }
    
};

function buttonhorario(){
  var c = document.getElementById('a__2');
  var c_a = document.getElementById('a__2--img');
  var main = document.getElementById('main');

  //noche
  if(c.style.justifyContent === 'end'){
    c.style.justifyContent = 'start';
    c.style.backgroundColor = "black";
    c_a.style.backgroundImage = "url(./multimedia/iconoluna.jpg)";
    main.style.backgroundImage = "linear-gradient(to right bottom, #050505, #0f091c, #130c2d, #160e3f, #1c0b50, #2d074d, #3a034a, #440046, #461137, #401529, #351e23, #272525)";   
  }
  
  //dia
  else {
    c.style.justifyContent = 'end'
    c.style.backgroundColor = "white";
    c_a.style.backgroundImage = "url(./multimedia/iconosol.jpg)";
    main.style.backgroundImage = "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)";
    main.style.backgroundColor = "#A9C9FF";    
  }
};



