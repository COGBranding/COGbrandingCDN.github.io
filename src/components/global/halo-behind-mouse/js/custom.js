document.addEventListener("DOMContentLoaded", (event) => {
    if (document.querySelectorAll("#tabs__col").length) {
        var tabColumn = document.querySelectorAll("#tabs__col");

        for (let i = 0; i < tabColumn.length; i++) {
            tabColumn[i].onmousemove = (e) => {
                for (const card of document.getElementsByClassName(
                    "tabs__item"
                )) {
                    const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            };
        }
    }
});
