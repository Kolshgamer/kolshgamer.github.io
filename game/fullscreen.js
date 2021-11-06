var fullscreen;
if (game.fullscreenchange) {
  fullscreen = true;
} else if (!game.fullscreenchange) {
  fullscreen = false;
}
function openFullscreen() {
  if (game.requestFullscreen) {
    game.requestFullscreen();
  } else if (game.webkitRequestFullscreen) { /* Safari */
    game.webkitRequestFullscreen();
  } else if (game.msRequestFullscreen) { /* IE11 */
    game.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (game.exitFullscreen) {
    game.exitFullscreen();
  } else if (game.webkitExitFullscreen) { /* Safari */
    game.webkitExitFullscreen();
  } else if (game.msExitFullscreen) { /* IE11 */
    game.msExitFullscreen();
  }
}
if (fullscreen = true) {
  game.style.backgroundSize = "fill";
}