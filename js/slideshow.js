var curIndex = 0,
    imgDuration = 3000,
    slider = document.getElementById("slideshow"),
    slides = slider.childNodes; //get a hook on all child elements, this is live so anything we add will get listed
    imgArray = [
        'img/nccmt-portfolio.png',
        'img/otru-portfolio.png',
        'img/rogers1-portfolio.png',
        'img/rogers2-portfolio.png',
        'img/magazinescanada-portfolio.png',
        'img/crafty-portfolio.png',
        'img/mars1-portfolio.png',
        'img/mars2-portfolio.png',
        'img/mars3-portfolio.png',
        'img/mars4-portfolio.png'
        ];


//
// Dynamically add each image frame into the dom;
//
function buildSlideShow(arr) {
    for (i = 0; i < arr.length; i++) {
        var img = document.createElement('img');
        img.src = arr[i];
        slideshow.appendChild(img);
    }
    // note the slides reference will now contain the images so we can access them
}

//
// Our slideshow function, we can call this and it flips the image instantly, once it is called it will roll
// our images at given interval [imgDuration];
//
function slideShow() {
    
    function fadeIn(e) {
        e.className = "fadeIn";
    };

    function fadeOut(e) {
        e.className = "";
    };

        // debugger;

        fadeOut(slides[curIndex]);
        curIndex++;
        if (curIndex === slides.length) {
            curIndex = 0;
        }
        
        fadeIn(slides[curIndex]);

        setTimeout(function () {
            slideShow();
        }, imgDuration);
    };
    buildSlideShow(imgArray);
    slideShow();
    console.log("show")