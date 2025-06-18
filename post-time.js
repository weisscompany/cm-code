document.addEventListener("DOMContentLoaded", function () {
  var sourceElements = document.querySelectorAll("[post-time-source]");

  sourceElements.forEach(function (sourceElement) {
    var rawTime = sourceElement.getAttribute("post-time-source");

    // Convert "YYYY-MM-DD HH:MM" to ISO
    var isoTime = rawTime.replace(" ", "T");
    var postedDate = new Date(isoTime);

    if (isNaN(postedDate.getTime())) {
      // Optional: handle invalid date
      var displayElement = sourceElement.querySelector("[post-time]");
      if (displayElement) displayElement.innerText = "Ungültiges Datum";
      return;
    }

    var currentDate = new Date();
    var timeDifference = Math.floor((currentDate - postedDate) / 1000);

    var timeAgo = "";

    if (timeDifference < 60) {
      timeAgo = "Gerade eben";
    } else if (timeDifference < 3600) {
      var minutes = Math.floor(timeDifference / 60);
      timeAgo = "Vor " + minutes + (minutes === 1 ? " Minute" : " Minuten");
    } else if (timeDifference < 86400) {
      var hours = Math.floor(timeDifference / 3600);
      timeAgo = "Vor " + hours + (hours === 1 ? " Stunde" : " Stunden");
    } else if (timeDifference < 604800) {
      var days = Math.floor(timeDifference / 86400);
      timeAgo = "Vor " + days + (days === 1 ? " Tag" : " Tagen");
    } else if (timeDifference < 2592000) {
      var weeks = Math.floor(timeDifference / 604800);
      timeAgo = "Vor " + weeks + (weeks === 1 ? " Woche" : " Wochen");
    } else if (timeDifference < 31536000) {
      var months = Math.floor(timeDifference / 2592000);
      timeAgo = "Vor " + months + (months === 1 ? " Monat" : " Monaten");
    } else {
      var years = Math.floor(timeDifference / 31536000);
      timeAgo = "Vor " + years + (years === 1 ? " Jahr" : " Jahren");
    }

    // Find and update the child element with post-time attribute
    var displayElement = sourceElement.querySelector("[post-time]");
    if (displayElement) {
      displayElement.innerText = timeAgo;
    }
  });
});
