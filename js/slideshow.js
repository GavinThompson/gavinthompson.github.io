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


function buildSlideShow(arr) {
    for (i = 0; i < arr.length; i++) {
        var img = document.createElement('img');
        img.src = arr[i];
        slideshow.appendChild(img);
    }
}

function slideShow() {
    
    function fadeIn(e) {
        e.className = "fadeIn";
    };

    function fadeOut(e) {
        e.className = "";
    };


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


