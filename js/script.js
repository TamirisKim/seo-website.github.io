
/*активация navbar */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
   menu.classList.toggle('fa-times'); /*бургер -> крест */
   navbar.classList.toggle('active'); /*navbar опускался вниз */
};

/*из луны в солнец*/
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
   themeBtn.classList.toggle('fa-sun');

   if (themeBtn.classList.contains('fa-sun')) {
      document.body.classList.add('active');
   } else {
      document.body.classList.remove('active');
   }
};

/*при скроле navbar исчизает*/
window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   /*скрол горизонтальный*/
   let maxHeight = window.document.body.scrollHeight - window.innerHeight;
   let percentage = ((window.scrollY) / maxHeight) * 100;
   document.querySelector('.header .scroll-indicator').style.width = percentage + '%';

};