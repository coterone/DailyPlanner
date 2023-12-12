// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY hh:mm A'))
});

var hour = dayjs().hour();

  $(".time-block").each(function () {
    var timeblockNum = parseInt($(this).data("value"));

    if (hour < timeblockNum) {
      $(this).removeClass("empty").addClass("future");
    } else if (hour === timeblockNum) {
      $(this).removeClass("empty").addClass("present");
    } else {
      $(this).removeClass("empty").addClass("past");
    }
  });

    // Add a click event listener to the save buttons
    $(".saveBtn").on("click", function () {
      var textareaValue = $(this).siblings(".description").val();
      var timeblockId = $(this).parent().attr("id");
  
      // Save the textarea value in local storage using timeblockId as the key
      localStorage.setItem(timeblockId, textareaValue);
    });
  
    // Load saved data from local storage and populate the textareas
    $(".time-block").each(function () {
      var timeblockId = $(this).attr("id");
      var savedValue = localStorage.getItem(timeblockId);
  
      if (savedValue) {
        $(this).find(".description").val(savedValue);
      }
    });

 