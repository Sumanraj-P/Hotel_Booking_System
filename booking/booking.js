function showSuggestions() {
    const suggestions = ["Afghanistan",
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
    "Ambasamudram",]; // Example suggestions
    const input = document.getElementById('search-box').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions-box');
    
    suggestionsBox.innerHTML = '';
    
    if (input.length > 0) {
        const filteredSuggestions = suggestions.filter(place => place.toLowerCase().startsWith(input));
        
        if (filteredSuggestions.length > 0) {
            suggestionsBox.classList.add('active');
            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.textContent = suggestion;
                div.onclick = function() {
                    document.getElementById('search-box').value = suggestion;
                    suggestionsBox.classList.remove('active');
                };
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.classList.remove('active');
        }
    } else {
        suggestionsBox.classList.remove('active');
    }
}
