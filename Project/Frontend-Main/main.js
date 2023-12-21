//document.addEventListener('DOMContentLoaded', function () {
//    const form = document.getElementById('imageForm');
//
//    form.addEventListener('submit', async function (event) {
//        event.preventDefault();
//
//        const fileInput = document.getElementById('imageInput');
//        const file = fileInput.files[0];
//
//        const formData = new FormData();
//        formData.append('file', file);
//
//        try {
//            const response = await fetch('http://localhost:8000/predict', {
//                method: 'POST',
//                body: formData,
//            });
//
//            if (response.ok) {
//                const result = await response.json();
//                console.log('Prediction result:', result);
//
//                const resultContainer = document.getElementById('resultContainer');
//                resultContainer.innerHTML = `
//                    <p>Predicted Class: ${result.class}</p>
//                    <p>Confidence: ${result.confidence}</p>
//                `;
//            } else {
//                console.error('Error:', response.status, response.statusText);
//            }
//        } catch (error) {
//            console.error('Fetch error:', error);
//        }
//    });
//});

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
