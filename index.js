$(document).ready(function () {


  $("#add-new-iteam").click(function () {
    console.log("hi there");
  });

  $("#add-new-iteam").click(function () {
    alert("Handler for .click() called.");
  });


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
    cursor: "grabbing",
  });




  


});
// open a modal box function
function open_bootstrap_modalBox(status) {
  $("#myModalBox").find(".modal-body").text(status);
  $("#myModalBox").modal("show");
}
