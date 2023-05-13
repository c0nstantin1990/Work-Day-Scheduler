$(document).ready(function () {
  // Display current day & time in header
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  var currentHour = dayjs().hour();
  var startHour = 9;
  var endHour = 17;

  var container = $(".container-lg")

  
  // Looping through each time block and update its color based on the current time
  for (var i = startHour; i <= endHour; i++) {
    var $row = $("<div>").addClass("row time-block")
    $row.attr("id", `hour-${i}`);
  }
 

    // Determine past, present & future class
    var status;
    if (i < currentHour) {
      status = "past";
    } else if (i === currentHour) {
      status = "present";
    } else {
      status = "future";
    }
    $row.addClass(status);
//Create hour element
var $hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");
$hour.text(`${i % 12 || 12} ${i < 12 ? "AM" : "PM"}`);

//creating the description textarea element
var $description = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);

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
