let currentTravelStep = 0;

let mapSteps = new Map([
    [1, {
        map: "background: url('img/maps/map0005.png",  
        snp: "background: url('img/snapshots/begin.gif",
        com: "<p>We just finished going through the parents’ room, Sam’s room, and the bathroom so we head to the sitting room.         </p>"
    }],
    [2, {
        map: "background: url('img/maps/map0006.png",  
        snp: "background: url('img/snapshots/curtain\ silhouette.gif",
        com: "<p>The curtains framing the windows keep making it look like people are at the end of the hallways we pass. I used to get a half-second moment of panic when I walked past, but an hour into the game, not I’m not as bothered. Ish. The red hair-dye blood fake-out makes me more convinced that the game will not have anything that will actually scare me.</p>"
        
    }],
    [3, {
        map: "background: url('img/maps/map0006.png",  
        snp: "background: url('img/snapshots/attic.gif",
        com: "<p>Despite what I said, the red lights surrounding the attic scared me for a moment. </p>"
        
    }],
    [4, {
        map: "background: url('img/maps/map0006.png",  
        snp: "background: url('img/snapshots/sams\ note.gif",
        com: "<p>We see the note that Sam left at the door of the guest bedroom. Her wording feels ominous, and I worry that she’s done something drastic. The foreboding red light of the attic is in my peripheral vision. The fact that it’s locked makes me suspect the worst.</p>"
        
    }],
    [5, {
        map: "background: url('img/maps/map0007.png",  
        snp: "background: url('img/snapshots/ghost\ journal.gif",
        com: "<p> Inside the guest room we find the ghost hunter journal. It’s goofy, and I imagine Kate is probably endeared by the very obvious romantic contrivances- what with her sister and Lonnie using the pretext of “ghost hunting” to build a pillow fort and snuggle close together.</p> <p> The “TALL SHADOW” note gives me pause though. I wonder if that’s just Sam being Sam, or if she’s experiencing the thing with the curtains that I am. </p>"
        
    }],
    [6, {
        map: "background: url('img/maps/map0008.png",  
        snp: "background: url('img/snapshots/rick.gif",
        com: "<p>In the sitting room, we find the mom’s performance review of Rick. I’m not as invested in her storyline, but I read it all the same because I don't wanna miss any details. It doesn’t feel great seeing more stuff about Rick just laying around the house. Why’d she even bring this home?        </p>"
        
    }],
    [7, {
        map: "background: url('img/maps/map0008.png",  
        snp: "background: url('img/snapshots/misfits.gif",
        com: "<p>Also, a hand-drawn Misfits concert poster in one of the drawers. Cute. I do not keep Heavens to Betsy playing in the background, though that would make the house feel less empty, cuz unfortunately I don’t have the same taste in music as Sam.        </p>"
        
    }],
    [8, {
        map: "background: url('img/maps/map0008.png",  
        snp: "background: url('img/snapshots/sewing\ machine.gif",
        com: "<p> I am very impressed by the sewing machine. </p>"
        
    }],
    [9, {
        map: "background: url('img/maps/map0008.png",  
        snp: "background: url('img/snapshots/complicated\ white\ girl.gif",
        com: "<p>I spend like two minutes trying to flip around the cassette case to see why Lonnie wrote “Don’t look here,” expecting some lore. Finally, I see “Complicated White Girl.” </p><p>Jury’s out on whether it was worth two minutes. </p>"
        
    }],
    [10, {
        map: "background: url('img/maps/map0008.png",  
        snp: "background: url('img/snapshots/closet\ outer.gif",
        com: "<p>We find the note about the secret passageway in the parents’ closet. It feels really exciting since it means there’ll be some backtracking, and progression won’t be as linear as it has been so far. We hurry over back to the parents’ bedroom.        </p>"
        
    }],
    [11, {
        map: "background: url('img/maps/map0009.png",  
        snp: "background: url('img/snapshots/vintage.gif",
        com: "<p>The interior of the secret passageway is interesting, plastered with vintage clothes ads. I expected that any secret passageways in a house like this would’ve been used by the servants, so I wonder if the interior decoration was their choice or if Oscar used these himself.</p>"
        
    }],
    [12, {
        map: "background: url('img/maps/map0009.png",  
        snp: "background: url('img/snapshots/closet.gif",
        com: "<p>We finish reading Sam and Lonnie’s notes about the secret compartments and find the scribbled-on cross. I quip about how B-List horror movie of a prop this looks, but just as I finish speaking, the light goes out with an incredibly loud snap. I jump in my seat and run back out the way I came. (Yes, I am laughed at)        </p>"
        
    }],
    [13, {
        map: "background: url('img/maps/map0010.png",  
        snp: "background: url('img/snapshots/backtrack.gif",
        com: "<p>Embarrassingly, I’m still a bit spooked, so rather than going back down into the passageway, we backtrack to one of the secret compartments Sam and Lonnie mentioned, since it’s right across the hall.</p> <p> I refrain from making another horror movie quip when we find the Ouija board in there. But I do note that the long shadow the plant casts from the window gives “TALL SHADOW” vibes, even moreso than before. </p>        "
        
    }]
]);
let end = mapSteps.size+1;

window.addEventListener("keydown", function(event){
    if (event.code === 'Space') {
        currentTravelStep += 1;
        update_travel();
        console.log(currentTravelStep);
        console.log(end);
    }
})

function update_travel () {
    console.log("updated");
    if (currentTravelStep == end){
        document.getElementById("instructions").innerHTML = "You've reached the end of this 10 minute snapshot. Refresh the page to experience again."
        
    }
    else {
        let currentStepInfo = mapSteps.get(currentTravelStep);
        let randomVar = "?" + Math.random()+"') no-repeat; background-size: contain; background-position: center;"; //makes sure these once-looping gifs are reloaded on step
        document.getElementById("map").style = currentStepInfo.map+"') no-repeat; background-size: contain; background-position: center;";
        document.getElementById("snp").style = currentStepInfo.snp+randomVar;
        document.getElementById("com").innerHTML = currentStepInfo.com;
    }
}
