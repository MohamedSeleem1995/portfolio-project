setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  const seconds = date / 1000;
document.getElementById("timer").innerHTML = seconds.toLocaleString();
}
