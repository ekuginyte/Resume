function toggleSection(header) {
  const content = header.nextElementSibling;
  const expanded = content.style.display === "block";

  // collapse all except timeline
  if (!header.parentElement.classList.contains("timeline")) {
    document.querySelectorAll("section .content").forEach(c => {
      if (!c.parentElement.classList.contains("timeline")) c.style.display = "none";
    });
  }

  // toggle clicked section
  content.style.display = expanded ? "none" : "block";

  // rotate arrow
  header.querySelector("::after");
}
