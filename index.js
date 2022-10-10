$(document).ready(function () {
  $("#submit-iteam").click(function (e) {
    e.preventDefault();
    var new_iteam = $("#new-iteam").val();

    if (new_iteam != "") {
      var newIteam = $(".new-added-iteam")
        .clone()
        .removeClass("new-added-iteam d-none")
        .addClass("new-iteam");
      newIteam.find(".itam-name").addClass("new_added_iteam_name");
      newIteam.find(".new_added_iteam_name").text(new_iteam);
      $("#iteam-list").append(newIteam);

      $(".to-do-done").on("change", function () {
        // on change of state
        if ($(this).prop("checked") == true) {
          // if changed state is "CHECKED"
          $(this).closest(".new-iteam").find("#asdf").wrap("<strike>");
        } else if ($(this).prop("checked") == false) {
          $(this).closest(".new-iteam").find("#asdf").unwrap();
        }
      });

      $(".remove-iteam").click(function () {
        var paren_element = $(this).closest(".new-iteam");
        if (paren_element.find(".to-do-done").prop("checked") == true) {
          paren_element.fadeOut("slow");
        } else if (paren_element.find(".to-do-done").prop("checked") == false) {
          // call bootstrap modal box to open
          open_bootstrap_modalBox("Mark the list as Done.");
        }
      });

      $("#new-iteam").val("");
    } else {
      // call bootstrap modal box to open
      open_bootstrap_modalBox("To Do Item cannot be empty !");
    }
  });
});
// open a modal box function
function open_bootstrap_modalBox(status) {
  $("#myModalBox").find(".modal-body").text(status);
  $("#myModalBox").modal("show");
}
