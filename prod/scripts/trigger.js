var height = documentHeight();
// console.log(height);
var windowHeight = window.innerHeight;
var scrollHeightAmt = (height - windowHeight);
var hQuarter = (height / 4);
// console.log(hQuarter);
var hHalf = hQuarter * 2;
// console.log(hHalf);
var hThreeQ = hQuarter * 3;
// console.log(hThreeQ);
var scroll = 0;
// console.log(scroll);
function documentHeight() {
    return Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
}
var hQuarterMarker = false;
var hHalfMarker = false;
var hThreeQMarker = false;
var hBottomMarker = false;

window.addEventListener('scroll',function() {
  scroll = window.scrollY + windowHeight;
  // console.log(scroll);


  if (scroll >= hQuarter && scroll <= hHalf && hQuarterMarker == false) {
    // console.log('quarter');
    hQuarterMarker = true;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Blog Posts',
      eventAction: 'User Read',
      eventLabel: 'Read 25 Percent',
      eventValue: 1
    });

  };
  if (scroll >= hHalf && scroll <= hThreeQ && hHalfMarker == false) {
    // console.log('half');
    hHalfMarker = true;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Blog Posts',
      eventAction: 'User Read',
      eventLabel: 'Read 50 Percent',
      eventValue: 2
    });
  };
  if (scroll >= hThreeQ && scroll <= height && hThreeQMarker == false) {
    // console.log('three quarters');
    hThreeQMarker = true;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Blog Posts',
      eventAction: 'User Read',
      eventLabel: 'Read 75 Percent',
      eventValue: 3
    });
  };
  if (scroll >= (height - 100) && scroll <= height && hBottomMarker == false) {
    // console.log('bottom');
    hBottomMarker = true;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Blog Posts',
      eventAction: 'User Read',
      eventLabel: 'Read 100 Percent',
      eventValue: 4
    });
  };
// console.log(scroll);
});
