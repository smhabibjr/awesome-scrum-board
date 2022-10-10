$(document).ready(function () {
  console.log("hi there");

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


  $(".sortable").sortable({
    connectWith: ".sortable",
  });

});
// open a modal box function
function open_bootstrap_modalBox(status) {
  $("#myModalBox").find(".modal-body").text(status);
  $("#myModalBox").modal("show");
}
