// // Flowchart
// document.addEventListener("DOMContentLoaded", () => {
//   const flowchart = document.getElementById("flowchart");
//   flowchart.innerHTML = `
//       <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
//           <rect x="50" y="30" width="300" height="50" rx="10" style="fill:lightblue; stroke:black; stroke-width:2;"></rect>
//           <text x="200" y="60" text-anchor="middle" font-size="14" fill="black">Industrial Sources</text>
//           <line x1="200" y1="80" x2="200" y2="110" style="stroke:black;stroke-width:2;"></line>
//           <rect x="100" y="110" width="200" height="50" rx="10" style="fill:lightgreen; stroke:black; stroke-width:2;"></rect>
//           <text x="200" y="140" text-anchor="middle" font-size="14" fill="black">Water Contamination</text>
//       </svg>
//   `;
// });

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
