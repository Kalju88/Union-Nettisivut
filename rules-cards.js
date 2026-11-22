document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".union-rule-card");

    cards.forEach(card => {
        const heading = card.querySelector("h2");
        if (!heading) return;

        // Luodaan avattava sääntökortti.
        const details = document.createElement("details");
        details.className = "union-rule-details";

        const summary = document.createElement("summary");
        summary.textContent = heading.textContent;

        const content = document.createElement("div");
        content.className = "union-rule-content";

        // Säilytetään kaikki alkuperäiset sääntötekstit.
        Array.from(card.children).forEach(child => {
            if (child !== heading) {
                content.appendChild(child);
            }
        });

        details.append(summary, content);
        card.replaceChildren(details);
    });
});
