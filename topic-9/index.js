// Task 1

$(".head").css("background-color", "lightGreen");
$(".inner").css("font-size", "35px");

// Task 2

$('a[href^="https://"]').attr("target", "_blank");

// Task 3

$("h3 + div").each(function () {
  $(this).insertBefore($(this).prev("h3"));
});

// Task 4

let count = 0;
let checkboxes = $('input[type="checkbox"]');
checkboxes.on("change", function () {
  count += $(this).is(":checked") ? 1 : -1;
  if (count >= 3) {
    count = 0;
    checkboxes.prop("checked", false);
  }
});
