let currentTravelStep = parseInt(document.getElementsByClassName("travel-step")[0].id);
let end = 5;

window.addEventListener("keydown", function(event){
    if (event.code === 'Space') {
        currentTravelStep += 1;
        update_travel();
        console.log(currentTravelStep);
    }
})

function update_travel () {
    if (currentTravelStep == end){
        document.getElementById("instructions").innerHTML = "You've reached the end of this 10 minute snapshot. Refresh the page to experience again."
    }
    else {
        document.getElementById("map").src = img.src.replace();
        document.getElementById("snp").src = img.src.replace();
        document.getElementById("com").innerHTML = "whatever";
    }
}
