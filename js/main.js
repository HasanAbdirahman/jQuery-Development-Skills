$("button").on("click", function () {
  let $skills = $("#skills");
  let $inputContent = $skills.val();
  let $ulCreated = `<li> ${$inputContent} </li>`;
  $("#items").append($ulCreated);
  $skills.val("");
  console.log($inputContent);
});
