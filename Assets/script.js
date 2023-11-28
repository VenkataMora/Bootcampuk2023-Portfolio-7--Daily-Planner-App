// Get the current date and time using dayjs library, and display it in the #currentDay element.
var dayEl = $('#currentDay');
var currenTime = dayjs().format('dddd, MMM D');
dayEl.text(currenTime);
//Define the 'container' element and an array of hours from 9 to 17.
var containerEl = $('.container');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// Function to generate time blocks for each hour of the workday.
function timeBlocks() {
    // loop through each hour of the day
    for (var i = 0; i < hours.length; i++) {
        // create a new time block with row class
        var hour = $("<div>").addClass("time-block row");
        // set data attribute to the current hour
        hour.attr("data-hour", hours[i]);
        // create a column for the hour and set the text to the current hour
        var hourcolumn = $("<div>").addClass("hour col-2");
        hourcolumn.text(dayjs().hour(hours[i]).format("hA"));
        // create a column for the description textarea
        var textAreacolumn = $("<textarea>").addClass("description col-8");
        // create a column for the save button
        var saveBtncolumn = $("<button>").addClass("saveBtn col-2");
        // add a save icon to the save button
        saveBtncolumn.append($("<i>").addClass("fas fa-save"));
        // append all columns to the time block
        hour.append(hourcolumn, textAreacolumn, saveBtncolumn);
        // append the time block to the container element
        containerEl.append(hour);
    }

}
// Call the timeBlocks function to generate initial time blocks.
timeBlocks();
// Function to apply styles to time blocks based on current time.
function hourStyles() {
    // Get current hour
    var currentHour = dayjs().hour();
    // Iterate through time-blocks
    $(".time-block").each(function () {
        // Get block hour
        var blockhour = parseInt($(this).attr("data-hour"));
        // Update class based on current hour
        if (blockhour < currentHour) {
            // Remove future, present
            // Add past class
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockhour === currentHour) {
            // Remove past, future
            // Add present class
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            // Remove present, past
            // Add future class
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }


    });
}
// Function to load events from local storage and populate the text areas.
function loadEvents() {
    // Loop through each time block
    $(".time-block").each(function () {
        // Get the time attribute
        var time = $(this).attr("data-hour");
         // Retrieve the event from local storage
        var event = JSON.parse(localStorage.getItem("event_" + time));
       // If there is an event, set the value of the description field
        if (event) {
            $(this).find(".description").val(event);
        }
    });
}
// Attach a click event listener to the container to save events when the save button is clicked.
$(".container").on('click', saveEvent);

// Function to save events to local storage.
function saveEvent(event) {
    // check if clicked element has class 'saveBtn'
    if ($(event.target).hasClass('saveBtn')) {
        // get data-hour attribute value of parent element
        var times = $(event.target).parent().attr("data-hour");
         // get the value of sibling element with class 'description'
        var eventDescription = $(event.target).siblings(".description").val();
         // store the event data in local storage
        localStorage.setItem("event_" + times, JSON.stringify(eventDescription));
    }
}
// Load events on page load and set interval to update styles every minute.
loadEvents();
setInterval(hourStyles, 60000);
hourStyles();
// Call the hourStyles function to apply styles initially.
aveEvent();
