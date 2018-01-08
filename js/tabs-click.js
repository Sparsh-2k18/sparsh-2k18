

// jquery function to add and attach a callback to an animation
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});


var list=document.querySelectorAll("ul li");
    list.forEach(ele=>{
        ele.classList.add("tabs");

    });
    
    
    function transition(){
        this.classList.add("tabs-isClicked");
        if(this.dataset.no==1)
        {
            console.log(this.dataset.no)
            $(".wrapper .content").removeClass("show");
            $(".wrapper .content").addClass("notShow");
            $(".wrapper .img").addClass("show");
            $(".wrapper .img").animateCss("rotateIn");
            
            
            
        }
        if(this.dataset.no==2)
        {
            console.log(this.dataset.no)
            $(".wrapper > *").removeClass("show");
            $(".wrapper > *").addClass("notShow");
            $(".wrapper .img[data-no='2']").addClass("show");
            $(".wrapper .img[data-no='2']").animateCss("zoomIn");
            $(".wrapper p[data-no='2']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapper p[data-no='2']").animateCss("animated tada");
                
            },1000);
            
            
        }
        if(this.dataset.no==3)
        {
            $(".wrapper > *").removeClass("show");
            $(".wrapper > *").addClass("notShow");
            $(".wrapper .img[data-no='3']").addClass("show");
            $(".wrapper .img[data-no='3']").animateCss("zoomIn");
            $(".wrapper p[data-no='3']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapper p[data-no='3']").animateCss("animated tada");
                
            },1000);
            
        }
        if(this.dataset.no==4)
        {
            $(".wrapper > *").removeClass("show");
            $(".wrapper > *").addClass("notShow");
            $(".wrapper .img[data-no='4']").addClass("show");
            $(".wrapper .img[data-no='4']").animateCss("zoomIn");
            $(".wrapper p[data-no='4']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapper p[data-no='4']").animateCss("animated tada");
                
            },1000);
            
        }
        if(this.dataset.no==5)
        {
            $(".wrapper > *").removeClass("show");
            $(".wrapper > *").addClass("notShow");
            $(".wrapper .img[data-no='5']").addClass("show");
            $(".wrapper .img[data-no='5']").animateCss("zoomIn");
            $(".wrapper p[data-no='5']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapper p[data-no='5']").animateCss("animated tada");
                
            },1000);
           
        }
            
        


    }

    function off(e){
        if(e.propertyName==='color')
        this.classList.remove("tabs-isClicked")
    }


    list.forEach(ele=>{
        ele.addEventListener('click',transition);
        ele.addEventListener('transitionend',off);
    });

    function show(){

    }

    var images=document.querySelectorAll(".wrapper img");
    images.forEach(img=>{
        img.addEventListener('mouseover',show);
    })