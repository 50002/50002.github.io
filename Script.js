// this is the script
console.log("hollopollo");

const HowJammin = 314159265358979;
var foodCount = 18;
var AAA = ["Rodrigez", "Kabir", "Jamal", "William"] 
var BBB = ["Tacos", "Kebab curry", "KFC", "Beans on toast"]


var slider = document.getElementByid("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
function toggleMute() {
    var video = document.getElementById('Tony');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/* Delay Function to Add SetTimeOut After Defined Interval */

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/* Show Video Function to Add Display Property to Show the Video on Click of Button which will fulfilled User Interaction Needs to Browser to Run the Video with Unmute State */

function showVideo() {
    alert("OH NO! Is's the Mafia!")
    var element = document.getElementById('Tony');
    var button = document.getElementById('button');
    element.style.display = 'block';
    button.style.display = 'none';
    delay(100).then(() => toggleMute());
}

function Jammin(a){
    if(a == HowJammin){
        alert("Correct");
    }else if(a > HowJammin){
        alert("Too Far (SKill Issue).");
    }else if(a < HowJammin){
        alert("More than that (Thee seemeth to be Lacking in the skill department)");
    }else{
        alert("Nuh uh")
    }
}

function Teht(a){
    alert(`you ate ${a} apples, leaving  ${(foodCount-a)}  apples left`)
}

function Teht2(){
    for (i=0; i<AAA.length; i++){
        if (i == 1){alert(`${AAA[i]} ate ${foodCount-i} ${BBB[i]}.`)}else if (i == 2){alert(`${AAA[i]} ate ${(foodCount-(i*5))} ${BBB[i]}.`)}else if (i == 3){alert(`${AAA[i]} ate ${(foodCount-(i**2))} ${BBB[i]}.`)}else{alert(`${AAA[i]} ate ${(foodCount-(i**i))} ${BBB[i]}.`)}
    }
}
