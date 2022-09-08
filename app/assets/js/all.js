ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    console.log(editor);
  })
  .catch((error) => {
    console.error(error);
  });


$(function () {
  $(".comment-reply").click(function () {
    $(".card-comment").addClass("d-none");
    $(".comment-btn").addClass("d-none");
    $(".chevron").hide();
    $(".comment-collapse").show();
  });
  $(".edit-cancel").click(function () {
    $(".card-comment").removeClass("d-none");
    $(".comment-btn").removeClass("d-none");
    $(".comment-collapse").hide();
    $(".chevron").show();
  });
});