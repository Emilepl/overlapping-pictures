function overlap() {
    const imgUrl1 = "https://image-service.onefootball.com/transform?w=32&h=32&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F554.png";
    const imgUrl2 = "https://image-service.onefootball.com/transform?w=32&h=32&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F369.png";

    // Load the images
    const img1 = new Image();
    const img2 = new Image();

    img1.src = imgUrl1;
    img2.src = imgUrl2;

    // Wait for both images to load
    Promise.all([img1.decode(), img2.decode()]).then(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions
        const width = img1.width + img2.width * 0.5; // adjust width to fit both images with overlap
        const height = img1.height + img2.height * 0.5;
        canvas.width = width;
        canvas.height = height;

        // Draw the first image (foreground) on the left
        ctx.drawImage(img2, img1.width * 0.5, img1.height * 0.5);

        // Draw the second image (background) with 40% overlap to the right
        ctx.drawImage(img1, 0, 0);
    }).catch((err) => {
        console.error('An error occurred while loading the images:', err);
    }); 
}

// Call the overlap function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    overlap();
});
