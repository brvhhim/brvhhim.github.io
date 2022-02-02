const projectContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");
const loadBtn = document.querySelector(".loadbtn");

loadBtn.addEventListener("click", () => {
  projects.forEach((project) => {
    if (project.classList.contains("hide")) {
      project.classList.remove("hide");
      loadBtn.style.display = "none";
    }
  });
});
