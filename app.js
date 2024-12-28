function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent = document.createElement("span");
        var child = document.createElement("span");
    
        parent.classList.add("parent")
        child.classList.add("child");
    
        child.innerHTML = elem.innerHTML
        parent.appendChild(child);
    
        elem.innerHTML = "";
        elem.appendChild(parent);
    })
    }
    revealToSpan()
    var tl = gsap.timeline();
    tl
    .from(" .child span",{
        x:"50%",
        ease:Power3.easeInOut,
        stagger:.2,
        duration:1.5,
        delay:1
    })
    
    .to(".parent .child",{
        y:"-100%",
        ease:Circ.easeInOut,
        duration:1,
        
    })
    .to("#loader",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    })
    
    
    
    
    let listBg = document.querySelectorAll('.bg');
    let listTab = document.querySelectorAll('.tab');
    let titleBanner = document.querySelector('.banner h1');
    window.addEventListener("scroll", (event) => {
        
        let top = this.scrollY;
        
        listBg.forEach((bg, index) => {
            if(index != 0 && index != 8){
                bg.style.transform = `translateY(${(top*index/2)}px)`;
            }else if(index == 0){
                bg.style.transform = `translateY(${(top/3)}px)`;
            }
        })
        titleBanner.style.transform = `translateY(${(top*3/1)}px)`;
    
        
        listTab.forEach(tab =>{
            if(tab.offsetTop - top < 550){
                tab.classList.add('active');
            }else{
                tab.classList.remove('active');
            }
        })
    });  
    
    