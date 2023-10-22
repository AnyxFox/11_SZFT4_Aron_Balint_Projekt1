const header = document.getElementById("head")
const mt = document.getElementById("mt")
const st = document.getElementById("st")
const nav = document.getElementById("nav")

window.onload = function() {
    header.classList.add('slideout');
    mt.classList.add('mtupslide');
    st.classList.add('stupslide')
    nav.classList.add("navdownslide")
    setTimeout(function() {
        header.classList.remove('slideout');
        mt.classList.remove('mtupslide');
        nav.classList.remove("navdownslide")
    }, 1500);
    setTimeout(function() {
        st.classList.add('stupslide')
    }, 2500);
};