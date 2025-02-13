// this is the script
console.log("hollopollo");

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