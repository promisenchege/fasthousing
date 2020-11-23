var hamburgger = document.querySelector(' .hamburgger').addEventListener('click', show)
var body = document.querySelector('#hideNavbar').addEventListener('click', hide)
function show(){
    var navbar =  document.querySelector('.navbar')
   navbar.style.display = 'block'
}
function hide(){
    var navbar =  document.querySelector('.navbar')
    navbar.style.display = 'none'
}