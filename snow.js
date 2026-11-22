// UNION - ANIMOITU LUMISADE

document.addEventListener("DOMContentLoaded", function () {

    const snowContainer = document.createElement("div");
    snowContainer.id = "snowfall";
    snowContainer.setAttribute("aria-hidden", "true");

    document.body.appendChild(snowContainer);

    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {

        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";

        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * -20;
        const drift = Math.random() * 200 - 100;

        snowflake.style.width = size + "px";
        snowflake.style.height = size + "px";
        snowflake.style.left = left + "%";
        snowflake.style.opacity = Math.random() * 0.6 + 0.3;

        snowflake.style.animationDuration = duration + "s";
        snowflake.style.animationDelay = delay + "s";

        snowflake.style.setProperty(
            "--drift",
            drift + "px"
        );

        snowContainer.appendChild(snowflake);
    }

});