document.addEventListener('DOMContentLoaded', () => {

  const navBar = document.querySelector('nav')
  const body = document.querySelector('body')
  const offsetYNavBar = navBar.offsetTop

  function fixNav(){
    if(offsetYNavBar < window.scrollY){
      body.classList.add('fixed-nav')
    } else {
      body.classList.remove('fixed-nav')
    }
  }
  window.addEventListener('scroll', fixNav)
})
