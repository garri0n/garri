const formOpenBtn=document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide=document.querySelector(".pw_hide");

formOpenBtn.addEventListener("click", ()=> home.classList.add("show"))
formCloseBtn.addEventListener("click", ()=> home.classList.remove("show"))

pwShowHide.forEach((icon) =>{
    icon.addEventListener("click", () =>{
        let getPwInput=icon.parentElement.querySelector("input");
        console.log(getPwInput);
        if(getPwInput.type==="password"){
            getPwInput.type="text";
            icon.classList.replace("uil-eye-slash", "uil-eye");     
        }else{
            getPwInput.type="password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
})

signupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
});

/* scroll */
let navLinks = select('.nav_items .scrollto', true)
const navlinksActive = () => {
  let position = window.scrollY + 200
  navlinks.forEach(navlink => {
    if (!navlink.hash) return
    let section = select(navlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navlink.classList.add('active')
    } else {
      navlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navlinksActive)
onscroll(document, navlinksActive)

