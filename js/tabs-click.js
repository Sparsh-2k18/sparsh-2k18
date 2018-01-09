

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
// desktop site js
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
        this.classList.remove("tabs-isClicked");
    }


    list.forEach(ele=>{
        ele.addEventListener('click',transition);
        ele.addEventListener('transitionend',off);
    });

    // mobile js

    var listMob=document.querySelectorAll(".wrapper div .mobTab");
    console.log(listMob);
    


    function transitionMob(){
        console.log('this ran');
        this.classList.add("tabs-isClicked");
        console.log(this.dataset)
        if(this.dataset.no==1)
        {
            console.log(this.dataset.no)
            $(".wrapperMob .content").removeClass("show");
            $(".wrapperMob .content").addClass("notShow");
            $(".wrapperMob .imgMob").addClass("show");
            $(".wrapperMob .imgMob").animateCss("rotateIn");
        }
        if(this.dataset.no==2)
        {
            console.log(this.dataset.no)
            $(".wrapperMob > *").removeClass("show");
            $(".wrapperMob > *").addClass("notShow");
            $(".wrapperMob .imgMob[data-no='2']").addClass("show");
            $(".wrapperMob .imgMob[data-no='2']").animateCss("zoomIn");
            $(".wrapperMob p[data-no='2']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapperMob p[data-no='2']").animateCss("animated tada");
                
            },1000);
            
            
        }
        if(this.dataset.no==3)
        {
            $(".wrapperMob > *").removeClass("show");
            $(".wrapperMob > *").addClass("notShow");
            $(".wrapperMob .imgMob[data-no='3']").addClass("show");
            $(".wrapperMob .imgMob[data-no='3']").animateCss("zoomIn");
            $(".wrapperMob p[data-no='3']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapperMob p[data-no='3']").animateCss("animated tada");
                
            },1000);
            
        }
        if(this.dataset.no==4)
        {
            $(".wrapperMob > *").removeClass("show");
            $(".wrapperMob > *").addClass("notShow");
            $(".wrapperMob .imgMob[data-no='4']").addClass("show");
            $(".wrapperMob .imgMob[data-no='4']").animateCss("zoomIn");
            $(".wrapperMob p[data-no='4']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapperMob p[data-no='4']").animateCss("animated tada");
                
            },1000);
            
        }
        if(this.dataset.no==5)
        {
            $(".wrapperMob > *").removeClass("show");
            $(".wrapperMob > *").addClass("notShow");
            $(".wrapperMob .imgMob[data-no='5']").addClass("show");
            $(".wrapperMob .imgMob[data-no='5']").animateCss("zoomIn");
            $(".wrapperMob p[data-no='5']").addClass("show");
            
            setTimeout(()=>{
                $(".wrapperMob p[data-no='5']").animateCss("animated tada");
                
            },1000);
           
        }
        if(this.dataset.no==6)
        {
            $(".wrapperMob > *").removeClass("show");
            $(".wrapperMob > *").addClass("notShow");
            $(".wrapperMob .imgMob[data-no='2']").addClass("show");
            $(".wrapperMob .imgMob[data-no='2']").animateCss("jello");
            
            $(".wrapperMob .imgMob[data-no='3']").addClass("show");
            $(".wrapperMob .imgMob[data-no='3']").animateCss("jello");
            
            
            
           
        }
    }

    function offMob(e){
        if(e.propertyName==='color')
        this.classList.remove("tabs-isClicked");
    }

        listMob.forEach(elem=>{
            elem.addEventListener('click',transitionMob);
            elem.addEventListener('transitionend',offMob);
        });