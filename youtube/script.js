document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById("video-container");
    const API_KEY = "YOUR_PEXELS_API_KEY"; // Replace with your Pexels API key
    const API_URL = "https://api.pexels.com/videos/popular";
  
    // Fetch popular videos from Pexels API
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY, // Add your API key in the request header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.videos && data.videos.length > 0) {
          const video = data.videos[0]; // Get the first video from the response
          const videoHTML = `
            <video controls>
              <source src="${video.video_files[0].link}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          `;
          videoContainer.innerHTML = videoHTML; // Add the video to the container
        } else {
          videoContainer.innerHTML = "<p>No videos found.</p>";
       
  