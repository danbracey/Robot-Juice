$( document ).ready(function() {
    $("input[name='option']").change(function () {
        //Hide the elements when clicked
        $(this).hide();
        $(this).siblings().hide();

        //Create new elements
        let heading = "<h3>Poll Results</h3>";
        let yes = "<div class='poll_result' style='width:75%;'>Yes (75%)</div>";
        let no = "<div class='poll_result' style='width:25%;'>No (25%)</div>";

        //Put the elements together and prepend to form (radio button's parent)
        $(heading + yes + "<br>" + no).prependTo($(this).parent());
    });
});