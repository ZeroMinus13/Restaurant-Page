import { creatingPage } from "./homePage"; 
import { menuPage } from "./menu";
import { aboutPage } from "./about";

creatingPage()

let tabSwitching = (() =>{
    let main = document.getElementById('main')
    main.addEventListener('click',creatingPage)

    let menu = document.getElementById('menu')
    menu.addEventListener('click', menuPage)

    let about = document.getElementById('about')
    about.addEventListener('click',aboutPage)

})()



