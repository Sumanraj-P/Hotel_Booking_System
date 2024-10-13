const images = [
  "images/image-1.jpg",
  "images/image-2.jpg",
  "images/image-3.jpg",
  "images/image-4.jpg",
];
let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const sliderImage = document.getElementById("slider-image");
  sliderImage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${images[currentIndex]})`;
}

setInterval(showNextImage, 2000);



window.onload = function() {
  const username = sessionStorage.getItem('username');
  if (username) {
      document.getElementById('welcome-message').innerText = `Welcome, ${username}!`;
  }
};



window.onload = function() {
  const username = sessionStorage.getItem('username'); // Retrieve the username from session storage
  const welcomeMessage = document.getElementById('welcome-message');
  const signInLink = document.getElementById('sign-in-link');
  const signOutLink = document.getElementById('sign-out-link');

  if (username) {
      // If the user is signed in
      welcomeMessage.innerText = `Welcome, ${username}!`;
      signInLink.style.display = 'none'; // Hide sign-in link
      signOutLink.style.display = 'block'; // Show sign-out link
  } else {
      // If the user is not signed in
      welcomeMessage.innerText = ''; // Clear welcome message
      signInLink.style.display = 'block'; // Show sign-in link
      signOutLink.style.display = 'none'; // Hide sign-out link
  }

  // Handle Sign-Out
  const signOutButton = document.getElementById('sign-out');
  if (signOutButton) {
      signOutButton.addEventListener('click', () => {
          sessionStorage.removeItem('username'); // Remove username from session storage
          window.location.reload(); // Reload the page to update the navigation bar
      });
  }
};
