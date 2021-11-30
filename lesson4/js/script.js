const mouseMove = document.getElementById('mouseMove');
const listener = (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
};

const move = () => {
  document.addEventListener('mousemove', listener);
}

move()


mouseMove.onmouseup = function() {
  document.removeEventListener('mousemove', listener);
  mouseMove.onmouseup = null;
}