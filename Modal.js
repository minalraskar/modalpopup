document.addEventListener("DOMContentLoaded", function() {
 
    if (!localStorage.getItem("cookiePreference")) {
      showCookiePopup();
    }
  
    
    function showCookiePopup() {
      var cookiePopup = document.getElementById("cookie-popup");
      cookiePopup.classList.remove("hidden");
    }
  
  
    function hideCookiePopup() {
      var cookiePopup = document.getElementById("cookie-popup");
      cookiePopup.classList.add("hidden");
    }
  
  
    function savePreference() {
      var checkboxes = document.querySelectorAll("input[name='cookies']");
      var selectedCookies = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      localStorage.setItem("cookiePreference", selectedCookies.join(","));
      hideCookiePopup();
    }
  
   
    var savePreferenceButton = document.getElementById("save-preference");
    savePreferenceButton.addEventListener("click", savePreference);
  
   
    setTimeout(hideCookiePopup, 10000);
  });