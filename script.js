document.addEventListener("DOMContentLoaded", function () {
    const zoneContainer = document.getElementById("zone-container");

    const data = [
        { state: "Maharashtra", cases: 300000, population: 120000000 },
        { state: "Delhi", cases: 50000, population: 18000000 },
        { state: "Kerala", cases: 60000, population: 35000000 },
        // Add more states as needed
    ];

    data.forEach((stateData) => {
        const percentage = (stateData.cases / stateData.population) * 100;
        let zoneClass = "green";

        if (percentage >= 1 && percentage < 5) {
            zoneClass = "yellow";
        } else if (percentage >= 5) {
            zoneClass = "red";
        }

        const zoneDiv = document.createElement("div");
        zoneDiv.classList.add("zone", zoneClass);
        zoneDiv.innerHTML = `<strong>${stateData.state}</strong>: ${percentage.toFixed(2)}% cases`;

        zoneContainer.appendChild(zoneDiv);
    });
});
