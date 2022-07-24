function menuPage(){
    let content = document.getElementById('content');
    content.replaceChildren()

    let h1 = document.createElement('h1');
    h1.innerText = 'Menu';
    h1.style.textAlign = "center"
    content.appendChild(h1);
    
    let mainpara1 = document.createElement('p');
    mainpara1.className = "";
    mainpara1.innerText = "Espresso Coffee";
    mainpara1.style.fontWeight = "bolder"
    mainpara1.style.textAlign = "center"
    content.appendChild(mainpara1);

    let subpara1 = document.createElement('p');
    subpara1.className = "";
    subpara1.innerText = "Best dark coffee made with finest beans!";
    subpara1.style.textAlign = "center"

    let coffeeimg = document.createElement('img')
    coffeeimg.src = "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
    coffeeimg.style.width = "30rem"
    coffeeimg.style.display = "block"
    coffeeimg.style.marginLeft = "auto"
    coffeeimg.style.marginRight = "auto"

    subpara1.appendChild(coffeeimg)
    content.appendChild(subpara1);

    let mainpara2 = document.createElement('p');
    mainpara2.className = "";
    mainpara2.innerText = "Chicken & Rice";
    mainpara2.style.fontWeight = "bolder"
    mainpara2.style.textAlign = "center"
    content.appendChild(mainpara2);

    let subpara2 = document.createElement('p');
    subpara2.className = "";
    subpara2.innerText = "Chicken & Rice with lemon and bananas";
    subpara2.style.textAlign = "center"

    let chickenimg = document.createElement('img')
    chickenimg.src = "https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    chickenimg.style.width = "30rem"
    chickenimg.style.display = "block"
    chickenimg.style.marginLeft = "auto"
    chickenimg.style.marginRight = "auto"

    subpara2.appendChild(chickenimg)
    content.appendChild(subpara2);
    
}

export {menuPage}