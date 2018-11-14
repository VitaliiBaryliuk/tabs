(function () {
  const links = document.querySelectorAll('.navigation__link');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
      event.preventDefault();
      // console.log(links[i].dataset.link);
      for (let j = 0; j < links.length; j++) {
        if (i == j) {
          document.querySelector(`.${links[j].dataset.link}`).classList.remove('invisible');
        } else {
          document.querySelector(`.${links[j].dataset.link}`).classList.add('invisible');
        }
      }
    });
  }
}());
