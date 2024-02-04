document.addEventListener("DOMContentLoaded", function() {
  var soundToggle = document.getElementById("soundToggle");
  var languageSelect = document.getElementById("languageSelect");

  soundToggle.addEventListener("change", function() {
    if (soundToggle.checked) {
      console.log("Sound enabled");
      // Tambahkan logika atau kode untuk mengaktifkan suara di sini
    } else {
      console.log("Sound disabled");
      // Tambahkan logika atau kode untuk menonaktifkan suara di sini
    }
  });

  languageSelect.addEventListener("change", function() {
    var selectedLanguage = languageSelect.value;
    console.log("Selected language:", selectedLanguage);
    // Tambahkan logika atau kode untuk mengubah bahasa di sini
  });
});