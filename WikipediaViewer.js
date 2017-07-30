$(document).ready(function() {
    var val ="en";
    $("#change li").click(function() {
        var text;
        console.log("msg");
        val = $(this).attr("id");
        console.log(val, "val");
        if (val === "en") {
            text = $(".btn-info").eq(0).text("英文");
        } else {
            text = $(".btn-info").eq(0).text("中文");
        }

    });

    function showText() {

        var searchText = $("#searchTeam").val();
        var url = "https://" + val + ".wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json&limit=20&callback=?";
        console.log("searchText", searchText);
        $.ajax({
            url: url,
            dataType: "json",
            type: "GET",
            async: false,
            success: function(data) {
                $("#output").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><a href=" + data[3][i] + "><h3>" + data[1][i] + "</h3>" + "<p>" + data[2][i] + "</p></a></li>");
                }
            },
            error: function(errorMessage) {
                alert("error");
            }
        });
    }
    $("#search").click(function() {
        showText();
    });
    $(document).keypress(function(e) {
        if (e.which == 13) {
            showText();
        }
    });


});
