function openVideo(type) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  if(type === "editor") {
    frame.src = "https://www.youtube.com/embed/ipj8uJTzgqU?si=LJ3eybBPaaemYhhT";
  } else {
    frame.src = "https://youtube.com/embed/rb74wHQK3W8?feature=share";
  }

  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  frame.src = "";
  modal.style.display = "none";
}
