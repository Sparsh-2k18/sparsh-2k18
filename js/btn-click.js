var btns = document.querySelectorAll(".day .col-xs-3 div");




function showTrans() {
    console.log(this.dataset);
    if (this.dataset.key == 1) {
        $(".btn-btn1 .col-xs-3").removeClass('notShow');
        $(".btn-btn1 .col-xs-3").addClass('show');
        $("div .btn-btn1").addClass('overlay1');
        $("div .btn-btn1").animateCss('bounceInLeft');

        setTimeout(() => {
            $(".btn-btn1 .col-xs-9").removeClass('overlay');
        }, 1000);
        setTimeout(() => {
            $(".btn-btn1 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn1 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn1 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn1 .cont4").animateCss('jello')
        }, 1800)
    }
    if (this.dataset.key == 2) {
        $(".btn-btn2 .col-xs-3").removeClass('notShow');
        $(".btn-btn2 .col-xs-3").addClass('show');
        $("div .btn-btn2").addClass('overlay2');
        $("div .btn-btn2").animateCss('bounceInRight');

        setTimeout(() => {
            $(".btn-btn2 .col-xs-9").removeClass('overlay');
        }, 100);
        setTimeout(() => {
            $(".btn-btn2 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn2 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn2 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn2 .cont4").animateCss('jello')
        }, 1800)

    }
    if (this.dataset.key == 3) {
        $(".btn-btn3 .col-xs-3").removeClass('notShow');
        $(".btn-btn3 .col-xs-3").addClass('show');
        $("div .btn-btn3").addClass('overlay3');
        $("div .btn-btn3").animateCss('bounceInLeft');

        setTimeout(() => {
            $(".btn-btn3 .col-xs-9").removeClass('overlay');
        }, 1000);
        setTimeout(() => {
            $(".btn-btn3 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn3 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn3 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn3 .cont4").animateCss('jello')
        }, 1800)


    }
    if (this.dataset.key == 4) {
        $(".btn-btn4 .col-xs-3").removeClass('notShow');
        $(".btn-btn4 .col-xs-3").addClass('show');
        $("div .btn-btn4").addClass('overlay4');
        $("div .btn-btn4").animateCss('bounceInRight');

        setTimeout(() => {
            $(".btn-btn4 .col-xs-9").removeClass('overlay');
        }, 1000);
        setTimeout(() => {
            $(".btn-btn4 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn4 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn4 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn4 .cont4").animateCss('jello')
        }, 1800)


    }
    if (this.dataset.key == 5) {
        $(".btn-btn5 .col-xs-3").removeClass('notShow');
        $(".btn-btn5 .col-xs-3").addClass('show');
        $("div .btn-btn5").addClass('overlay5');
        $("div .btn-btn5").animateCss('bounceInLeft');

        setTimeout(() => {
            $(".btn-btn5 .col-xs-9").removeClass('overlay');
        }, 1000);
        setTimeout(() => {
            $(".btn-btn5 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn5 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn5 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn5 .cont4").animateCss('jello')
        }, 1800)


    }
    if (this.dataset.key == 6) {
        $(".btn-btn6 .col-xs-3").removeClass('notShow');
        $(".btn-btn6 .col-xs-3").addClass('show');
        $("div .btn-btn6").addClass('overlay6');
        $("div .btn-btn6").animateCss('bounceInRight');

        setTimeout(() => {
            $(".btn-btn6 .col-xs-9").removeClass('overlay');
        }, 1000);
        setTimeout(() => {
            $(".btn-btn6 .cont1").animateCss('jello')
        }, 1200)
        setTimeout(() => {
            $(".btn-btn6 .cont2").animateCss('jello')
        }, 1400)
        setTimeout(() => {
            $(".btn-btn6 .cont3").animateCss('jello')
        }, 1600)
        setTimeout(() => {
            $(".btn-btn6 .cont4").animateCss('jello')
        }, 1800)


    }




}









btns.forEach(btn => {
    btn.addEventListener('click', showTrans);
});