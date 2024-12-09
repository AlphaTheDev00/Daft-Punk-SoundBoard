window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".board .box");


    board.forEach((box, index) => {
        box.addEventListener("mousedown", function() {
            box.classList.add('active');
            sounds[index].currentTime = 0;
            sounds[index].play();

        });

        box.addEventListener("mouseup", function(){
            box.classList.remove('active');
        });

        box.addEventListener("mouseleave", function() {
            box.classList.remove('active');
        });
    });
    
    
});

