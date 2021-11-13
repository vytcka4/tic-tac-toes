const containers = document.querySelectorAll(".container");
containers.addEventListener("click", function (x) {
  x.preventDefault();
  const newContent = document.createTextNode("X");
  containers.appendChild(newContent);
});
const result = document.querySelector(".result-name");
