document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('imageForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Prediction result:', result);

                const resultContainer = document.getElementById('resultContainer');
                resultContainer.innerHTML = `
                    <p>Predicted Class: ${result.class}</p>
                    <p>Confidence: ${result.confidence}</p>
                `;
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    });
});
