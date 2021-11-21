let mouseMove = document.getElementById('mouseMove');
let listener = function(e) {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
};

function move() {
  document.addEventListener('mousemove', listener);
}

function stop() {
  document.removeEventListener('mousemove', listener);
}