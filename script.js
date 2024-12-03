document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.classList.add("highlighted");
    });

    link.addEventListener("mouseout", () => {
      link.classList.remove("highlighted");
    });
  });
});
