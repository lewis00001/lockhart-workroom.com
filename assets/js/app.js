$(document).ready(function () {

    $(".modal").hide();

    homeScreen();
    // loads homescreen when link is clicked
    $("#home").on("click", function () {
        homeScreen();
    });

    // home screen on load
    function homeScreen() {
        $(".home").html("");
        $(".link-1, .link-2, .link-3, .link-4").removeClass("active-link");
        $(".link-0").addClass("active-link");
        $(".bio, .work, .work-other, .contact, .dev").hide();
        $(".home").show();
        for (let i = 0; i < quotes.q.length; i++) {
            $(".home").append("<div class='card bloom'>" +
            "<p class='quotes'>" +
                "<span class='quoteMarks'>\"</span>" + quotes.q[i].quote + 
                "<span class='quoteMarks'>\"</span>" +
                "<br>" + 
                "<span class='qName'>" + quotes.q[i].source + 
                "</span>" + 
            "</p>" + 
            "</div>");
        }
        $(".home").prepend("<div class='section-title bloom'>about lewis</div>");
    }

    // creates all the project cards on the recent work page
    $("#work").on("click", function () {
        $(".work").html("");
        $(".link-0, .link-2, .link-3, .link-4").removeClass("active-link");
        $(".link-1").addClass("active-link");
        $(".home, .bio, .contact, .dev").hide();
        $(".work").show();
        for (let i = 0; i < myWork.w.length; i++) {
            $("<div/>", {
                class: "work-img bloom",
                html: "<div class='w-title'>" + myWork.w[i].name + "</div>",
            }).css("background-image", "url('" + myWork.w[i].image + "')").appendTo(".work");
        }
        $(".work").prepend("<div class='section-title bloom'>featured work</div>");
    });

    // other work
    $("#work").on("click", function () {
        $(".work-other").html("");
        $(".home, .bio, .contact, .dev").hide();
        $(".work-other").show();
        $(".work-other").append("<div class='section-title bloom w-o'>other work</div>");
        for (let i = 0; i < myWorkOther.w.length; i++) {
            $(".work-other").append("<a href='" + myWorkOther.w[i].link +
            "' target='_blank'><div class='work-o'>" + myWorkOther.w[i].name + "</div></a>");
        }
    });

    //
    $("#bio").on("click", function () {
        $(".bio").html("");
        $(".link-0, .link-1, .link-3, .link-4").removeClass("active-link");
        $(".link-2").addClass("active-link");
        $(".home, .work, .work-other, .contact, .dev").hide();
        $(".bio").show();
        for (let i = 0; i < quotes.bio.length; i++) {
            $(".bio").append("<div class='bio-text bloom'>" + quotes.bio[i] + "</div>");
        }
        $(".bio").prepend("<div class='section-title bloom'>biography</div>");
    });

    // generates the contact page/form 
    $("#contact").on("click", function () {
        $(".contact").html("");
        $(".link-0, .link-1, .link-2, .link-4").removeClass("active-link");
        $(".link-3").addClass("active-link");
        $(".home, .work, .work-other, .bio, .dev").hide();
        $(".contact").show();
        // output information 
        $(".contact").html("<div class='logos'></div>");
        for (let i = 0; i < logos.l.length; i++) {
            $(".logos").append(
                "<div class='logo bloom'>" + 
                    "<a href='" + logos.l[i].link + "' target='_blank'>" + 
                        "<i class='fab " + logos.l[i].logo + "'></i>" + 
                    "</a>" + 
                "</div>"
            );
        }
        $(".contact").append("<div class='contact-direct'>" +
            "<div class='email-d d-pad'>lewis00001@gmail.com</div>" +
            "<div class='phone-d d-pad'>801-691-2121</div>" +                  
            "<div class='resume-d d-pad'>" +
                "<a class='d-pad' href='assets/Resume_L_Lockhart_2020.pdf' target='_blank'>resume: view/download</a>" +
                "</div>" +         
        "</div>"); 
        $(".contact").append("<div class='contact-form'>" + 
            "<form class='form bloom' action='sendEmail.php' method='post'>" + 
                "<label class='form-e' for='email'>E-mail</label>" + 
                "<input class='form-e' type='email' id='email' name='from' placeholder='your@email.com'>" +
                "<label class='form-e' for='subject'>Subject</label>" + 
                "<input class='form-e' type='text' id='subject' name='subject' placeholder='email subject line'>" +  
                "<label class='form-e' for='message'>Message</label>" + 
                "<textarea class='form-e text-area' id='message' name='message' placeholder='message ... '></textarea>" + 
                "<input class='form-button' type='submit' value='Submit'>" + 
            "</form>" + 
        "</div>");

        $(".contact").prepend("<div class='section-title bloom'>contact me</div>");
    });

    //
    $("#dev").on("click", function () {
        $(".dev").html("");
        $(".link-0, .link-1, .link-2, .link-3").removeClass("active-link");
        $(".link-4").addClass("active-link");
        $(".home, .work, .work-other, .bio, .contact").hide();
        $(".dev").show();
        $(".dev").append("<div class='tools-text'>HTML, JavaScript, CSS, Bootstrap, jQuery, Firebase, Node.js, Express.js, React.js, MongoDB, MySQL, API, Command Line, Git'</div>")
        $(".dev").prepend("<div class='section-title bloom'>languages and frameworks</div>");
    });

    // listens for which work is clicked on / calls modal
    $(document).on("click", ".work-img", function (event) {
        let chosen = $(this).html();
        let chosenName = $(chosen).text();
        workModal(chosenName);
    });

    // modal index used for changing between projects from the modal
    let m_index;

    // listens for left click within the modal nav
    $(document).on("click", ".fa-chevron-circle-left", function () {
        if (m_index === 0) {
            m_index = myWork.w.length - 1;
            let mLeft = myWork.w[m_index].name;
            workModal(mLeft);
        } else {
            m_index--;
            let mLeft = myWork.w[m_index].name;
            workModal(mLeft);
        }
    });

    // listens for right click within the modal nav
    $(document).on("click", ".fa-chevron-circle-right", function () {
        if (m_index === (myWork.w.length - 1)) {
            m_index = 0;
            let mRight = myWork.w[m_index].name;
            workModal(mRight);
        } else {
            m_index++;
            let mRight = myWork.w[m_index].name;
            workModal(mRight);
        }
    });

    // work info modal
    function workModal(name) {
        $(".modal").show();
        $(".modal-links").html("");
        let modalInfo;
        for (let i = 0; i < myWork.w.length; i++) {
            if (myWork.w[i].name === name) {
                m_index = i;
                modalInfo = myWork.w[i];
                $(".modal-title").text(modalInfo.name);
                $(".modal-image").html("<img class='modal-img' src='" + modalInfo.image + "'>");
                $(".description-text").text(modalInfo.description);
                $(".modal-links").append("<div class='modal-link-title m-head'>- Site Links -</div>");
                $(".modal-links").append("<a href='" + modalInfo.proj_url + "' target='_blank'" +
                    "<div class='proj-url m-link'>GitHub Repo</div></a>");
                $(".modal-links").append("<a href='" + modalInfo.hosted_url + "' target='_blank'" +
                    "<div class='hosted-url m-link'>Hosted Site</div></a>");
            }
        }
    }

    // closes the modal (X)
    $(document).on("click", ".close-modal", function () {
        $(".modal").hide();
    });

});