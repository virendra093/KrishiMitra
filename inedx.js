const features = [
    { image: "images/sugercane.jpg", title: "Sugercane Farming guidance", description: "Our experties supports the farmers to grow the crop better." },
    { image: "images/grapes.jpg", title: "Grapes Farming guidance", description: "By studying climate our team will guide the farmer to grow and protect the grapes crop, create more profit with minimum cost." },
    { image: "images/banana.jpg", title: "Banana Farming guidance", description: "Guide the farmers to grow the export quality Banana and give them good market opportunity." },
    { image: "images/cows.webp", title: "Cow Farming guidance", description: "Our team will give the farmer to build the Cows farming of Indian breed and enhance quality of the Dairy project." },
    { image: "images/hen.jpg", title: "Hen Farming guidance", description: "Support for the initial capital for hen farming ." }
];

const container = document.getElementById("featureCards");

features.forEach((feature, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${feature.image}" alt="${feature.title}">
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;
    container.appendChild(card);
    
    setTimeout(() => {
        card.classList.add("show");
    }, index * 300); // Adds a delay effect for each card
});