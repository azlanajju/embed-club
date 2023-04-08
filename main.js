const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const popup = document.getElementById('popup');
    const popupcontent = document.getElementById('popupcontent');
    const eventname = document.getElementById('eventname');
    const ebtn = document.getElementById('ebtn');
    const exitbtn = document.getElementById('exitbtn');
    const ctent = document.getElementById('ctent');





    
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

function pop(){
  popup.style.width="100%";

}    
setTimeout(pop, 2000);

     
    function exit(){
      popup.classList.add('minimize');
      popup.style.right="10px";

      eventname.style.fontSize="10px"
      ebtn.style.fontSize="6px";
      ebtn.style.padding="1px 3px";

      popupcontent.classList.add('minicontnent');
      exitbtn.style.display="none";
      ctent.style.display="none";

    }

  