$(document).ready(function() {
    $(".content").slice(0, 3).show();
    $("#loadMore").on("click", function(e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 3).slideDown();
        if ($(".content:hidden").length == 0) {
            $("#loadMore").addClass("noContent");
        }
    });

})