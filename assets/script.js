// Looping through hours 9 to 11
for (var i = 9; i <= 11; i++) {
  // Creating time-block element
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

//Creating hour element
var hour = $("<div>")
  .addClass("col-2 col-md-1 hour text-center py-3")
  .text(`${i}AM`);
timeBlock.append(hour);

//Creating description element
var description = $("<textarea>")
  .addClass("col-8 col-md-10 description")
  .attr("rows", "3");
timeBlock.append(description);

//Creating save button element
var saveBtn = $("<button>")
  .addClass("btn saveBtn col-2 col-md-1")
  .attr("aria-label", "save");
var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");
saveBtn.append(saveIcon);
timeBlock.append(saveBtn);

//Adding time-block element container
$(".container-lg").append(timeBlock);

//Adding click event listener to save button
saveBtn.on("click", function () {
  var descriptionText = $(this).siblings(".description").val();
  localStorage.setItem(`hour-${i}-description`, descriptionText());
});

//Loading description from local storage
var savedDescription = localStorage.getItem(`hour-${i}-description`);
if (savedDescription) {
  description.val(savedDescription);
}
