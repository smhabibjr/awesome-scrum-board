$(document).ready(function () {
  // add sortable
  $(".sortable").sortable({
    connectWith: ".sortable",
    cursor: "grabbing",
  });

  //open_bootstrap_modalBox("hi there");

  // add a new task

  $("#btn-add-task").click(function (e) {
    e.preventDefault();
    open_bootstrap_modalBox_with_form();

    console.log("hi there");

    /*
    var form_data = {
      new_category: $("#category").val(),
      new_task: $("#task").val(),
      new_date: $("#date").val(),
    };

    var { new_category, new_task, new_date } = form_data;



    var due_days = getNumberOfDays(
      current_date(),
      dateFormat(new_date, "MM/dd/yyyy")
    );

    var add_new_task = $(".clone-new-task")
      .clone()
      .removeClass("clone-new-task d-none")
      .addClass("new-task-iteam");
    add_new_task.find(".category-name").text(new_category);
    add_new_task.find(".task-name").text(new_task);
    add_new_task.find(".submit-date").text(new_date);
    add_new_task.find(".due-date").text("Due " + due_days + "days");
    $("#task-todo-list").append(add_new_task);


    */
  });

  /*$("form").on("submit", function (e) {
    e.preventDefault();
    console.log("hi there");
    var formValues = $(this).serialize();
    console.log;
  });*/

  /* $(".cube").draggable({
    containment: "parent",
    cursor:"grabbing",
    opacity: 0.5,
    //snap:true,
    //snapTolerance:100
  });*/

  //$(".droppable").droppable();

  /*$("#task-todo-list").sortable({
    connectWith: "#task-in-progress",
  });

  $("#task-in-progress").sortable({
    connectWith: "#task-todo-list",
  });*/
});
// open a modal box function
function send_notify(status) {
  $("#myModalBox").find(".modal-body").text(status);
  $("#myModalBox").modal("show");
}

function open_bootstrap_modalBox_with_form() {
  $("#modalbox-with-form").modal("show");
}

function current_date() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

//a simple date formatting function
function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", month.toString().padStart(2, "0"));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2, "0"));

  return format;
}

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}
