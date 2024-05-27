const header = document.querySelector("header");
const links = document.querySelectorAll("a");

header.addEventListener("click", () => {
    header.style.color = "green";
});
links.forEach(link =>{
    link.addEventListener("click", (event) =>{
        event.preventDefault();
        alert("Acabas de hacer clic en el enlace: ${link.href}");
    });
});