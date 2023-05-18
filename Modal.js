window.addEventListener("load", function () {
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
    
     
      
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

