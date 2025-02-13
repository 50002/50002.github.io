// this is the script
console.log("hollopollo");

const HowJammin = 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
var foodCount = 18;
var AAA = ["Rodrigez", "Kabir", "Jamal", "William"] 
var BBB = ["Tacos", "Kebab curry", "KFC", "Beans on toast"]

/////}

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
        alert("not yet.");
    }else if(a < HowJammin){
        alert("Longer than that");
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
