const turtle = document.getElementById("turtle");
const rock = document.getElementById("rock")


function jump () {
    turtle.classList.add('jump-animation');
    setTimeout (() => {
        turtle.classList.remove('jump-animation');
    }, 800);
}

document.addEventListener('keypress', () => {
    if (!turtle.classList.contains('jump-animation')) { 
jump ();
    }
});


setInterval(() => {
const turtleTop = parseInt(window.getComputedStyle(turtle)
.getPropertyValue ('top'));
const rockLeft = parseInt(window.getComputedStyle(rock)
.getPropertyValue ('left'));
console.log(rockLeft)

if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = '';
  }

  if (rockLeft < 60 && rockLeft > 0 && turtleTop > 160) {
    alert("GAME OVER - HOW ABOUT DONATE INSTEAD?");
    location.reload();
  }




}, 50);

    
