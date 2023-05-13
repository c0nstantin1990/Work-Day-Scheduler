$(document).ready(function () {
  // Display current day & time in header
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  var startHour = 9;
  var endHour = 17;

  var container = $(".container-lg")

  // Looping through each time block and update its color based on the current time
  $(".time-block").each(function () {
    var currentHour = dayjs().hour();
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Determine past, present & future class
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Save user input to local storage when button clicked
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, input);
  });

  // Load saved input from local storage
  $(".description").each(function () {
    var time = $(this).parent().attr("id");
    var input = localStorage.getItem(time);

    if (input !== null) {
      $(this).val(input);
    }
  });
});
