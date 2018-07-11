var bgs = document.getElementById("hero-background__slideshow").childNodes.length;
 var myVar = setInterval(fncBackgroundSwap, 6000);
 var i = 1;
  var p = 1;

function fncBackgroundSwap() {
  var slideshow = document.getElementById("hero-background__slideshow").childNodes[i];
  // console.log(bgs);
  // console.log(slideshow);
  slideshow.classList.remove("slideshow__image-active");

  // console.log(slideshow);
  if (i < bgs - 2) {
    i = i + 2;
  p++;
  // console.log(i);
  // console.log(p);
  var addclass = document.getElementById("hero-background__slideshow").childNodes[i];
   addclass.classList.add("slideshow__image-active");
    // console.log(slideshow);
        // console.log(addclass);
  } else {
  i = 1;
  p = 1;
  // console.log(i);
  // console.log(p);
     var addclass = document.getElementById("hero-background__slideshow").childNodes[i];
   addclass.classList.add("slideshow__image-active");
    // console.log(slideshow);
        // console.log(addclass);
  }
}
