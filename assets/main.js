
const p = document.querySelector("input");
p.addEventListener("change", () => {
    const pop = new FileReader();
    pop.onloadend = e => {
        let l = pop.result.split("\n").map(e => {
            return e.split(",");
        });
        console.log(l);
        l.forEach(e => {
            let ui = e.map(e => {
                return `<td>${e}</td>`;
            }).join("");
            const lpu = document.createElement("tr");
            lpu.innerHTML = ui;

            if (lpu.innerText !== "") {
                document.querySelector("table").append(lpu);

            }
        });

    }
    pop.readAsText(p.files[0]);

})
