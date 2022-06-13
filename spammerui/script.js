document.querySelector("#panel1").remove();
document.querySelector("#tab1").remove();
for (let child of document.querySelector(".mods").children) {
  if (child.id != "panel2") {
    child.style.display = "none";
  }
}

for (let elem of document.querySelectorAll('button[id^="tab"]')) {
  elem.addEventListener("click", function() {
    for (let child of document.querySelector(".tabs").children) {
      $(child).children().first().removeClass("selected");
    }
    for (let child of document.querySelector(".mods").children) {
      child.style.display = "none";
    }
    document.getElementById(elem.dataset.correspondsWith).style.display = document.getElementById(elem.dataset.correspondsWith).style.display == "none" ? "initial" : "none";
    $(elem).children().first().addClass("selected");
  });
}

function updateRange(elem) {
  var val = ($(elem).val() - $(elem).attr("min")) / ($(elem).attr("max") - $(elem).attr("min"));
  $(elem).css("background-image", "-webkit-gradient(linear, left top, right top, " + "color-stop(" + val + ", #364d7b), " + "color-stop(" + val + ", #1f2229)" + ")");
}
$('input[type="range"]').mousemove(function(e) {
  updateRange(this);
});
for (var elem of document.querySelectorAll('input[type="range"]')) {
  updateRange(elem);
}

var config = {
  particles: {
    number: {
      value: 800,
      density: {
        enable: true,
        value_area: 200
      }
    },
    color: {
      value: ["#ffffff"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 12
      },
      image: {
        src: "",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: "#fff",
      opacity: 0.023674428,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.3,
      direction: "bottom",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 2082.2488,
        rotateY: 3363.6328
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 70,
        line_linked: {
          opacity: 0.25
        }
      },
      bubble: {
        distance: 100,
        size: 5,
        duration: 8.598243,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 150,
        duration: 2
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
window.onload = function() {
  let clause = window.innerWidth < 768;
  config.particles.number.value = clause ? 80 : 150;
  particlesJS('particle', config);
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

$('#lol').text(["registered with my dad's company", "never trust villainsrule4000", "let xotic have another day of extorting children for intentionally broken exploits"].random());
