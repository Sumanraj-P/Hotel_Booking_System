const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});


//chatgpt


signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// Handle Sign-Up
const signUpForm = document.getElementById('signupForm');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
// After successful login

  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert(`Signup failed: ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during signup');
  }
});

// Handle Sign-In
const signInForm = document.getElementById('signinForm');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        const response = await fetch('http://localhost:5000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Check if the response is in JSON format
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (response.ok) {
                // Store user data in sessionStorage
                sessionStorage.setItem('username', data.user.username); // Save username
                sessionStorage.setItem('userId', data.user.id); // Save user ID

                // Redirect to index.html after successful login
                window.location.href = '/index.html';
            } else {
                alert(`Sign-in failed: ${data.message}`);
            }
        } else {
            // If the response is not JSON (like an error page), handle it
            console.error('Received non-JSON response:', await response.text());
            alert('An unexpected error occurred during sign-in');
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        alert('An error occurred during sign-in');
    }
});
