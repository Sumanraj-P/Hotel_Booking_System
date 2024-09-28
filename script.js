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

// Static data for countries, cities, and districts in Tamil Nadu
const data = [
  // Countries
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",

  //
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Beijing",

  // Districts in Tamil Nadu
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Kodaikanal",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Ooty",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivagangai",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Cumbum",
  "Chinniyampettai",
  "Ambasamudram",
];

document.getElementById("search-box").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query)
  );
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (query) {
    filteredData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.textContent = item;
      div.addEventListener("click", function () {
        document.getElementById("search-box").value = item;
        suggestions.innerHTML = "";
      });
      suggestions.appendChild(div);
    });
  }
});
