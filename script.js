// URL of the Jikan API for Manga
const apiUrl = 'https://api.jikan.moe/v4/manga';

async function fetchManga() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const mangaList = data.data; // List of manga from the API
        
        // Get the container to display manga items
        const mangaContainer = document.querySelector('.manga-list');
        
        // Loop through the manga data and add it to the page
        mangaList.forEach(manga => {
            const mangaItem = document.createElement('div');
            mangaItem.classList.add('manga-item');
            
            // Create the image and text for each manga item
            const mangaImage = document.createElement('img');
            mangaImage.src = manga.images.jpg.image_url; // The image URL from the API
            mangaImage.alt = manga.title;
            
            const mangaTitle = document.createElement('h2');
            mangaTitle.innerText = manga.title; // Manga title from the API
            
            // Append elements to the page
            mangaItem.appendChild(mangaImage);
            mangaItem.appendChild(mangaTitle);
            mangaContainer.appendChild(mangaItem);
        });
    } catch (error) {
        console.error("Error fetching manga data: ", error);
    }
}

// Call the function to fetch and display manga
fetchManga();