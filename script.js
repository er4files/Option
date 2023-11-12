const listMenu = document.querySelector(".menu-pilihan"),
    tombolMenu = listMenu.querySelector(".tombol-menu"),
    sosmeds = listMenu.querySelectorAll(".sosmed"),
    sosmedTeks = listMenu.querySelector(".tombol-teks");

    tombolMenu.addEventListener("click", () => listMenu.classList.toggle("active"));

    sosmeds.forEach(sosmed => {
        sosmed.addEventListener("click", () => {
            let selectedSosmed = sosmed.querySelector(".sosmed-teks").innerText;
            sosmedTeks.innerHTML = selectedSosmed;

            listMenu.classList.remove("active");
        })
    })