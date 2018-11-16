(function () {
  const tabLink = document.querySelector('.tabs__navigation');
  const tabWraps = document.querySelectorAll('div[data-tabcontent]');
  document.querySelector('a[data-link="home"]').focus();

  tabLink.addEventListener('click', (event) => {
    event.preventDefault();
    const dataLink = event.target.dataset.link;
    for (let i = 0; i < tabWraps.length; i++) {
      tabWraps[i].dataset.tabcontent === dataLink ? tabWraps[i].classList.remove('hide') : tabWraps[i].classList.add('hide');
    }
  });
}());
