(function () {
  const tabLink = document.querySelector('.tabs__navigation');
  const tabLinks = document.querySelectorAll('.tabs__link');
  const tabWraps = document.querySelectorAll('div[data-tabcontent]');
  document.querySelector('a[data-link="home"]').focus();

  tabLink.addEventListener('click', (event) => {
    event.preventDefault();
    const dataLink = event.target.dataset.link;
    for (let i = 0; i < tabWraps.length; i += 1) {
      console.log(tabLinks[i]);
      tabLinks[i].dataset.link === dataLink ? event.target.classList.add('show') : tabLinks[i].classList.remove('show'); 
      tabWraps[i].dataset.tabcontent === dataLink ? tabWraps[i].classList.remove('hide') : tabWraps[i].classList.add('hide');
    }
  });
}());
