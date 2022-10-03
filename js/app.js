$(document).ready(function () {
    // console.log("hoi");

    /* ============= Start Progress ================ */
    $(window).scroll(function () {
        var getprogress = $("#progress");
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        // formula
        // (scrolltop * 100) / pjheight - clientheight

//By jQuery
        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);
        // var calcheight = getscrollheight - getclientheight;
        // // console.log(calcheight);
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight)


// By Jacascript
        var getscrollheight = document.documentElement.scrollHeight;
        var getclientheight = document.documentElement.clientHeight;
        var calcheight = getscrollheight - getclientheight;
        var getfinalheight = Math.round((getscrolltop * 100)/ calcheight)
    
        getprogressval.text(`${getfinalheight}%`)

        getprogress.css({
            "background": `conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`
        })

    })
    /* ============= End Progress ================ */


    /* ============= Start Header ==================== */

    /* -----start banner------ */
    $("#mycarousel").carousel({
        interval: 1000
    })
    /* -----end banner------ */

    /* ============= End Header ==================== */


    /* ============= Start Info ==================== */
    $(window).scroll(function () {
        var getscrolltop = $(this).scrollTop();
        if (getscrolltop >= 220) {
            $(".fromlefts").addClass("active");
            $(".fromrights").addClass("active");
        } else {
            $(".fromlefts").removeClass("active");
            $(".fromrights").removeClass("active");
        }
    })
    /* ============= End Info ==================== */

    /* ============= Start Adv ==================== */
    $("#video").click(function () {
        var getmodal = $(this).data("bs-target")
        var getvideosrc = $(this).data("video")
        var videourlwithauto = getvideosrc + "?autoplay=1"
        
        $(getmodal + " iframe").attr("src", videourlwithauto)

        $(getmodal + " button.btn-close").click(function () {
            $(getmodal + " iframe").attr("src", getvideosrc)
        })

        $(getmodal).click('hidden.bs.modal',function () {
            $(getmodal + " iframe").attr("src", getvideosrc)
        })

    })
    /* ============= End Adv ==================== */


    /* start lightslider */
    $("#light-slider").lightSlider({
        // auto: true,
        item:4,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        pauseOnHover: true
    }).play();
    /* end lightslider */


    /* ============= Start Pricing ================ */
    $(window).scroll(function () {
        var getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);
        if (getscrolltop >= 2670) {
            $(".pricingboxes").addClass("active");
        } else {
            $(".pricingboxes").removeClass("active");
        }
    })
    /* ============= End Pricing ================ */


    /* ============= Start Join US ================ */
    $('#accordion').accordion();
    /* ============= End Join US ================ */


    /* ============= Start Footer ================ */
    $('#getyear').text(new Date().getUTCFullYear());
    /* ============= End Footer ================ */

    

})