// Loop through hours 9 to 11
for (var i = 9; i <= 11; i++) {
  // Create time-block element
  var timeBlock = $("div").attr("id", `hour-${i}`).addClass("row time-block");
}

//Determine past, present & future class
var currentHour = dayjs().hour();
if (i < currentHour) {
  timeBlock.addClass("past");
} else if (i === currentHour) {
  timeBlock.addClass("present");
} else {
  timeBlock.addClass("future");
}

//Create hour element
var hour = $("<div>")
  .addClass("col-2 col-md-1 hour text-center py-3")
  .text(`${i}AM`);
timeBlock.append(hour);
