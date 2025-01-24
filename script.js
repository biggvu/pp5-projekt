document.addEventListener("DOMContentLoaded", function () {
    const formSelect = document.getElementById("form");
    const tabletOptions = document.getElementById("tabletOptions");
    const shapeField = document.getElementById("shape").closest(".mb-3");
    const shapeSelect = document.getElementById("shape");
    const form = document.getElementById("medicineForm");
    const colorSelect = document.getElementById("color");
    const customColorDiv = document.getElementById("customColorDiv");
    const customColorInput = document.getElementById("customColor");

    // obsługa zmiany pola "Postać leku"
    formSelect.addEventListener("change", function () {
        const selectedValue = formSelect.value;

        // opcja wyboru nadruku/graweru tylko po wybraniu pola "Tabletka" albo "Kapsułka"
        if (selectedValue === "tablet" || selectedValue === "capsule") {
            tabletOptions.classList.remove("d-none");
        } else {
            tabletOptions.classList.add("d-none");
        }

        // opcja wyboru kształtu tylko po wybraniu pola "Tabletka"
        if (selectedValue === "tablet") {
            shapeField.classList.remove("d-none");
            shapeSelect.setAttribute("required", "required");
        } else {
            shapeField.classList.add("d-none");
            shapeSelect.removeAttribute("required");
        }
    });

    // obsługa zmiany w polu "Kolor"
    colorSelect.addEventListener("change", function () {
        if (colorSelect.value === "custom") {
            customColorDiv.classList.remove("d-none");
        } else {
            customColorDiv.classList.add("d-none");
        }
    });

    // obsługa wysyłania formularza
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // pobranie danych z formularza
        const formData = {
            form: formSelect.value,
            color: colorSelect.value === "custom" ? customColorInput.value : colorSelect.value,
            time: document.getElementById("time").value,
            shape: formSelect.value === "tablet" ? shapeSelect.value : null,
            hasEmphasis: document.getElementById("hasEmphasis").checked,
            comments: document.getElementById("comments").value
        };

        // wyświetlenie danyuch w konsoli
        console.log("Dane z formularza:", formData);

        // wyświetlenie komunikatu po wysłaniu
        alert("Formularz został wysłany!");

        // reset formularza do wartości domyślnych
        form.reset();

        // ukrycie opcji nadruku/graweru i niestandardowego koloru po resecie
        tabletOptions.classList.add("d-none");
        customColorDiv.classList.add("d-none");
        shapeField.classList.add("d-none");
        shapeSelect.removeAttribute("required");
    });
});
