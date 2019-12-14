$(document).ready( function () {

    // hid all content to start
    $(".work, .bio, .contact, .tools").hide();
    $(".modal").hide();

    //
    $("#work").on("click", function () {
        $(".work").html("");
        $(".bio, .contact, .tools").hide();
        $(".work").show();
        for (let i = 0; i < myWork.w.length; i++) {
            $("<div/>", {
                class: "work-img bloom",
                html: "<div class='w-title'>" + myWork.w[i].name + "</div>",
            }).css("background-image", "url('" + myWork.w[i].image + "')").appendTo(".work");
        }
        $(".work").prepend("<div class='section-title bloom'>recent work</div>");
    });

    //
    $("#bio").on("click", function () {
        $(".bio").html("");
        $(".work, .contact, .tools").hide();
        $(".bio").show();
        
        $(".bio").prepend("<div class='section-title bloom'>biography</div>");
    });

    //
    $("#contact").on("click", function () {
        $(".contact").html("");
        $(".work, .bio, .tools").hide();
        $(".contact").show();
        
        $(".contact").prepend("<div class='section-title bloom'>contact me</div>");
    });

    //
    $("#tools").on("click", function () {
        $(".tools").html("");
        $(".work, .bio, .contact").hide();
        $(".tools").show();
        
        $(".tools").prepend("<div class='section-title bloom'>helpful tools</div>");
    });

    // listens for which work is clicked on / calls modal
    $(document).on("click", ".work-img", function (event) {
        let chosen = $(this).html();
        let chosenName = $(chosen).text();
        workModal(chosenName);
    });

    // work info modal
    function workModal(name) {
        $(".modal").show();
        let modalInfo;
        for (let i = 0; i < myWork.w.length; i++) {
            if (myWork.w[i].name === name) {
                modalInfo = myWork.w[i];
                $(".modal-content").html("<img class='modal-img' src='" + modalInfo.image + "'>");
            }
        }
    }

});