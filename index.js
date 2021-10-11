const dropZone= document.querySelector(".drop-zone");

dropZone.addEventListener("dragover", (e)=>{
    // console.log("dragging");
    e.preventDefault()

    if (!dropZone.classList.contains("dragged"))
    {
        dropZone.classList.add("dragged");
    }
    
})


dropZone.addEventListener("dragleave", (e)=>{
    dropZone.classList.remove("dragged");
    
})

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    
})