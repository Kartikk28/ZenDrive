// src/utils/imageService.js
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export async function fetchCarImage(query) {
  console.log("🔍 Fetching Unsplash image for:", query); // ✅ Debug log
  console.log("🔑 Using key:", UNSPLASH_ACCESS_KEY?.slice(0, 8) + "..."); // Partial key check

  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: `${query} car`,
        per_page: 1
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    const results = response.data.results;

    if (results.length > 0) {
      const imageUrl = results[0].urls.regular;
      console.log("✅ Image found:", imageUrl); // ✅ Found image
      return imageUrl;
    } else {
      console.warn("⚠️ No image found, using placeholder");
      return `https://via.placeholder.com/400x300?text=${encodeURIComponent(query)}`;
    }
  } catch (error) {
    console.error("❌ Image fetch error:", error.message);
    return `https://via.placeholder.com/400x300?text=${encodeURIComponent(query)}`;
  }
}
