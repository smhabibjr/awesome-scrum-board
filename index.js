$(document).ready(function () {
  console.log("hi there");

  $("#sortable").sortable();
  






















});
// open a modal box function
function open_bootstrap_modalBox(status) {
  $("#myModalBox").find(".modal-body").text(status);
  $("#myModalBox").modal("show");
}
