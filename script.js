const search = document.querySelector(".search-box input"),
  images = document.querySelectorAll(".image-box"),
  downloadButtons = document.querySelectorAll(".download-btn");

// Search Functionality
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let searchValue = search.value.toLowerCase();
    images.forEach((image) => {
      if (searchValue === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

search.addEventListener("keyup", () => {
  if (search.value !== "") return;
  images.forEach((image) => {
    image.style.display = "block";
  });
});

// Image Download Functionality
downloadButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const imgUrl = e.target.getAttribute("data-img");
    downloadImage(imgUrl);
  });
});

function downloadImage(imgUrl) {
  fetch(imgUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "verse.jpg"; // Optional: Change file name here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => alert("Failed to download image!"));
}
