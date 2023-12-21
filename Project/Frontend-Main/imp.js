document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.querySelector('#uploadForm');

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fileInput = document.querySelector('input[type="file"]');
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append('file', file);

        // Make a POST request to the FastAPI backend
        fetch('http://localhost:8000/predict', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            console.log(data);
            alert(`Predicted class: ${data.class}\nConfidence: ${data.confidence}`);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error predicting image. Please try again.');
        });
    });
});
