document.addEventListener('DOMContentLoaded', function () {
    const umbrellaImage = document.getElementById('umbrella-image');
    const logoUpload = document.getElementById('logo-upload');
    const logoPreview = document.getElementById('logo-preview');
    const loader = document.getElementById('loader');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    // Handle color swatch clicks
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            const newColor = swatch.getAttribute('data-color');
            umbrellaImage.src = newColor;

            document.body.style.backgroundColor = swatch.style.backgroundColor;
        });
    });

    // Handle logo upload
    logoUpload.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            loader.style.display = 'block';
            logoPreview.style.display = 'none';
            reader.onload = function (e) {
                logoPreview.src = e.target.result;
                logoPreview.style.display = 'block';
                loader.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
});
