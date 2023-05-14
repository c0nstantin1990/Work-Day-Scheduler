//Adding current day in header
$("#currentDay").text(dayjs().format("dddd, MMMM D"));
//Geting current hour using dayjs
var currentHour = dayjs().hour();
//Defining start & end hours
var startHour = 9;
var endHour = 17;
//Getting container element
var container = $(".container-lg");
//Creating message element
var $message = $("<div>").addClass("message py-3 text-center").hide();
//Appending message to container. Inserts message as the first child
container.prepend($message);
//Looping through each hour
for (let i = startHour; i <= endHour; i++) {
  //Creating new row element
  var $row = $("<div>").addClass("row time-block");
  //Setting id based on hour
  $row.attr("id", `hour-${i}`);
  //Checking if hour is current, past or future
  let status;
  if (i < currentHour) {
    status = "past";
  } else if (i === currentHour) {
    status = "present";
  } else {
    status = "future";
  }
  $row.addClass(status);
  //Creating hour element
  var $hour = $("<div>")
    .addClass("col-2 col-md-1 hour text-center py-3")
    .text(`${i % 12 || 12} ${i < 12 ? "AM" : "PM"}`);
  //Creating description textarea element
  const $description = $("<textarea>")
    .addClass("col-8 col-md-10 description")
  //Adds 2 rows for description
    .attr("rows", 2);
  //Creating save button element
  var $saveBtn = $("<button>")
    .addClass("btn saveBtn col-2 col-md-1")
    .attr("aria-label", "save")
    .html(`<i class="fas fa-save" aria-hidden="true"></i>`);
  //Adding event listener to save on local storage
  $saveBtn.on("click", function () {
    var descriptionText = $description.val().trim();
    localStorage.setItem(`${i}`, descriptionText);
    $message.text("Added to Local Storage!").show();
    setTimeout(function () {
      $message.text("").hide();
    }, 2000);
  });
  //Setting value to corresponding value
  $description.val(localStorage.getItem(`${i}`) || "");
  //Appending elements to rows
  $row.append($hour, $description, $saveBtn);

  //Appending row to container
  container.append($row);
}
