const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick= function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}


const buttons = document.querySelectorAll('.accordian-btn');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )