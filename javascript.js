
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
      authDomain: "fir-recent-user.firebaseapp.com",
      databaseURL: "https://fir-recent-user.firebaseio.com",
      storageBucket: "fir-recent-user.appspot.com"
    };
    firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();
    // Initial Values
    var trainname = "";
    var destination = "";
    var firsttrain = 0;
    var frequency = 0;
    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();
      
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      trainname = $("#train-name").val().trim();
      destination = $("#destination").val().trim();
      firsttrain = $("#first-train").val().trim();
      frequency = $("#frequency").val().trim();
      database.ref().set({
        trainname: trainname,
        destination: destination,
        firsttrain: firsttrain,
        frequency: frequency
      });
    });
    // Firebase listener + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {
      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().age);
      console.log(snapshot.val().comment);
      // Change the HTML to reflect
      $("#trainname-display").html(snapshot.val().name);
      $("#destination-display").html(snapshot.val().email);
      $("#firsttrain-display").html(snapshot.val().age);
      $("#frequency-display").html(snapshot.val().comment);
      // Handle the errors
    }, ;
  