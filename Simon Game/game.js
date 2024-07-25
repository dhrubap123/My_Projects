let sequencecomp = [];
let sequencp = [];
let point = 0;

$(document).keydown(function (e) {
  if (e.key == "s" || e.key == "r" || e.key == "S" || e.key == "R") {
    if(e.key == "r" || e.key == "R"){
      point = 0;
      $("h1").text("POINT : " + point);
      $("h2").text("");
      $(".btn").removeClass("disabled");
    }
    generater();
  }
});
function generater() {
  $("h2").text("WAIT");
  let num = Math.floor(Math.random() * 4); //random numbetween 0 to 3
  // console.log(num);
  switch (num) {
    case 0:
      sequencecomp.push("green");
      break;
    case 1:
      sequencecomp.push("red");
      break;
    case 2:
      sequencecomp.push("yellow");
      break;
    case 3:
      sequencecomp.push("blue");
      break;
  }

  compclick();
}

//computer
//using async await

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function compclick() {
  for (let color of sequencecomp) {
    await sleep(1000);
    console.log("#" + color);
    $("#" + color).addClass("pressed");
    let audio1 = new Audio("./green.mp3");
    audio1.play();
    setTimeout(() => {
      $("#" + color).removeClass("pressed");
    }, 500);
  }
  await sleep(500);
  $("h2").text("PLAY");
  playerclick();
}

//player

function playerclick() {
  $(".btn").unbind("click"); // Unbind the click event
  $(".btn").click(playergenerater); // Bind the click event
}

function playergenerater(e) {
  sequencp.push(e.target.id);
  clickanim(e.target.id);
  console.log(sequencp);
  if (sequencecomp.length == sequencp.length) {
    check();
  }
}

function clickanim(color) {
  $("#" + color).addClass("pressed");
  let audio1 = new Audio("./yellow.mp3");
  audio1.play();
  setTimeout(() => {
    $("#" + color).removeClass("pressed");
  }, 500);
}

//checking result

function check() {
  let f = 0;
  for (let i = 0; i < sequencp.length; i++) {
    if (sequencp[i] != sequencecomp[i]) {
      f++;
    }
  }
  if (f == 0) {
    point++;
    $("h1").text("POINT : " + point);
    sequencp = [];
    console.log(sequencp);
    generater();
  } else {
    console.log("you lost");
    let len = sequencecomp.length;
    sequencecomp = [];
    sequencp = [];
    $(".btn").addClass("disabled");
    let audio1 = new Audio("./wrong.mp3");
    audio1.play();
    
    $("h1").text("TOTAL POINT : "+point);
    $("h2").text("[Press R to restart]");
  }
}

/*

The issue of getting multiple pushed elements while pressing a button for just one time is likely due to event binding. It seems that the playerclick() function is being called multiple times, causing the event listener to bind to the button click event multiple times.

To fix this issue, you can unbind the click event before binding it again in the playerclick() function. This ensures that the event listener is only bound once to the button click event.

Here's an updated version of the code:

javascript
Copy code
function playerclick() {
  $(".btn").unbind("click"); // Unbind the click event
  $(".btn").click(playergenerater); // Bind the click event
}
By using the unbind() function before binding the click event, you can prevent multiple event bindings and ensure that the playergenerater() function is only called once per button click.

Make sure to update the code in your original implementation with the corrected version provided above.









I apologize, but as a text-based AI model, I'm unable to provide direct video sources or links. However, I can try to explain the concept in more detail.

The issue you're facing with multiple pushed elements being added when pressing a button for just one time is typically caused by event binding. When the playerclick() function is called multiple times, it binds the playergenerater() function to the click event of the buttons each time it is called. As a result, when you click a button, the playergenerater() function is executed multiple times.

To fix this issue, you need to ensure that the click event is only bound once. One way to achieve this is by unbinding the click event before binding it again. By doing this, you remove any previously bound click event handlers and ensure that only one event handler is active at a time.

Here's an example of how you can modify the code to unbind the click event before binding it again:

javascript
Copy code
function playerclick() {
  $(".btn").unbind("click"); // Unbind the click event
  $(".btn").click(playergenerater); // Bind the click event
}
By including the unbind("click") line before binding the click event, you remove any existing click event handlers and prevent multiple executions of the playergenerater() function.

I hope this explanation helps you understand the concept. If you have further questions or need additional assistance, please let me know.

*/
