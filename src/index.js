import {homeContent} from './home'
import {contactContent} from './contact'
import {menuContent} from './menu'
import {containerMaker} from './containerMaker'

const homeButton = document.querySelector('#home-button')
const menuButton = document.querySelector('#menu-button')
const contactButton = document.querySelector('#contact-button')

const content = containerMaker()
document.querySelector('#page-container').appendChild(content)
content.innerHTML = homeContent()

homeButton.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML="";
    content.innerHTML = homeContent();
})

menuButton.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML="";
    content.innerHTML = menuContent();
})

contactButton.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML="";
    content.innerHTML = contactContent();
})

