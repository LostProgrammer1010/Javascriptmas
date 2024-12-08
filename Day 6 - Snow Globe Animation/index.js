const snowGlobe = document.querySelector('.snow-globe')
const container = document.querySelector('.container')
var startSnow = false;
var snowflakeCount = 0;

function createSnowflake() {
    
  if (snowflakeCount++ > 15) {
      createSnowMan()
      snowflakeCount = 0
  }
  let snow = document.createElement('div');

    snow.classList.add('snowflake');
    snow.innerHTML = "❄️"
    snow.style.left = Math.floor(Math.random() * 300) + 'px'
    snow.style.fontSize = (Math.floor(Math.random() * (70-50))+50) + 'px'
    snowGlobe.appendChild(snow);
    snow.addEventListener('animationend', function() {
      // Remove the element from the DOM after the animation ends
            snow.remove();
        });
    /* 
    Challenge:
    1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
    2. See index.css
    */ 
}

function createSnowMan() {
  let snowman = document.createElement('div');

  snowman.classList.add('snowman');
  snowman.innerHTML = "☃️"
  snowman.style.left = Math.floor(Math.random() * 300) + 'px'
  snowman.style.fontSize = (Math.floor(Math.random() * (25-16))+16) + 'px'
  snowGlobe.appendChild(snowman);
    
  snowman.addEventListener('animationend', function() {
  // Remove the element from the DOM after the animation ends
        snowman.remove();
    });
}

setInterval(function() {
  if (startSnow){
      createSnowflake();
  }
}, 100);


// Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?

- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/

function shake() {
  container.style.animation = 'shake 1s ease forwards'
  startSnow = true;
  
  setTimeout(function() {
      container.style.animation = "";

      setTimeout(function() {
          startSnow = false;
      }, 6000)
  }, 1000)
}
