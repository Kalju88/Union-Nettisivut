
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");

    if (!nav) return;

    nav.id = "union-mobile-navigation";
    nav.classList.add("menu-ready");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-menu-toggle";
    button.textContent = "☰ Valikko";

    button.setAttribute("aria-controls", nav.id);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Avaa navigointivalikko");

    nav.parentNode.insertBefore(button, nav);

    function closeMenu() {
        nav.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Avaa navigointivalikko");
        button.textContent = "☰ Valikko";
    }

    button.addEventListener("click", () => {
        const open = nav.classList.toggle("menu-open");

        button.setAttribute("aria-expanded", String(open));
        button.setAttribute(
            "aria-label",
            open ? "Sulje navigointivalikko" : "Avaa navigointivalikko"
        );
        button.textContent = open ? "✕ Sulje" : "☰ Valikko";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });
});
