// URL for the Jikan API to fetch manga data
const apiUrl = "https://api.jikan.moe/v4/manga";

// Function to fetch and display manga data
async function fetchManga() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const mangaList = document.getElementById("manga-list");

        // Loop through the fetched manga data and display each item
        data.data.forEach(manga => {
            // Create a new manga item div
            const mangaItem = document.createElement("div");
            mangaItem.classList.add("manga-item");

            // Add manga image, title, and link
            mangaItem.innerHTML = `
                <img src="${manga.images.jpg.image_url}" alt="${manga.title}">
                <h2>${manga.title}</h2>
                <p>${manga.synopsis}</p>
                <a href="${manga.url}" target="_blank">Read more</a>
            `;

            // Append the manga item to the manga list section
            mangaList.appendChild(mangaItem);
        });
    } catch (error) {
        console.error("Error fetching manga data: ", error);
    }
}

// Call the function to fetch and display manga data when the page loads
window.onload = fetchManga;