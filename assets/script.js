//Adding current day in header
$("#currentDay").text(dayjs().format("dddd, MMMM D"));
//Geting current hour using dayjs
const currentHour = dayjs().hour();
//Defining start & end hours
const startHour = 9;
const endHour = 17;
//Getting container element
const container = $(".container-lg");
//Looping through each hour
for (let i = startHour; i <= endHour; i++) {
  //Creating new row element
  const $row = $("<div>").addClass("row time-block");
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
  const $hour = $("<div>")
    .addClass("col-2 col-md-1 hour text-center py-3")
    .text(`${i % 12 || 12} ${i < 12 ? "AM" : "PM"}`);
  //Creating description textarea element
  const $description = $("<textarea>")
    .addClass("col-8 col-md-10 description")
    .attr("rows", 3);
  //Creating save button element
  const $saveBtn = $("<button>")
    .addClass("btn saveBtn col-2 col-md-1")
    .attr("aria-label", "save")
    .html(`<i class="fas fa-save" aria-hidden="true"></i>`);
  //Adding event listener to save on local storage
  $saveBtn.on("click", function () {
    var descriptionText = $description.val().trim();
    localStorage.setItem(`${i}`, descriptionText);
  });
  //Setting value to corresponding value
  $description.val(localStorage.getItem(`${i}`) || "");
  //Appending elements to rows
  $row.append($hour, $description, $saveBtn);

  //Appending row to container
  container.append($row);
}
