var gridItems;
// var extraInfo;

window.addEventListener('DOMContentLoaded', (event) => {
    gridItems = document.getElementsByClassName("gridItem");
    // extraInfo1Element = document.getElementsByClassName("extraInfo-1");

    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].addEventListener('click', function() {
        console.log("clicked #" + i);

        // Hide every info box we don't want - this simple implementation has some issues, so I've commented it out.
        // var infoBoxes = document.getElementsByClassName("extraInfo");
        // for (let g = 0; g < infoBoxes.length; g++) {
        //   infoBoxes[g].classList.remove("visibleInfo");
        // }

        // Show the info box we want
        var correspondingInfoID = "extraInfo-" + (i + 1);
        console.log(correspondingInfoID);
        var correspondingInfoElement = document.getElementById("extraInfo-" + (i+1));
        correspondingInfoElement.classList.toggle("visibleInfo");
      });
    }

});
