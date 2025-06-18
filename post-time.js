document.addEventListener("DOMContentLoaded", function () {
    var timeElements = document.querySelectorAll("[post-time]");
  
    timeElements.forEach(function (element) {
      var postedTime = element.getAttribute("post-time-source");
      var postedDate = new Date(postedTime.replace(/-/g, "/")); // Convert '-' to '/' for wider date format support
      var currentDate = new Date();
  
      var timeDifference = Math.floor((currentDate - postedDate) / 1000); // in Sekunden
  
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
  
      element.innerText = timeAgo;
    });
  });