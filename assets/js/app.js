// AOS Animation
AOS.init({
    duration: 2000,// values from 0to 3000, with step 50ms
});


//Counter effect

document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 500, 3000);
 counter("count2", 0, 300, 3000);
 counter("count3", 0, 100, 3000);
 counter("count4", 100, 3000, 1000);
});
