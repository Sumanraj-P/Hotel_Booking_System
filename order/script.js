document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
        rooms: document.getElementById("rooms").value,
    };

    // Send data to the server
    fetch("http://127.0.0.1:5000/api/book", {  // Change the port to 5000
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("response-message").innerText = data.message;
        document.getElementById("booking-form").reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
