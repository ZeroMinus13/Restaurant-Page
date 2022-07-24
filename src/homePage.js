function creatingPage(){
    let content = document.getElementById('content');
    content.replaceChildren()
   
    let h1 = document.createElement('h1');
    h1.innerText = 'Welcome to the Restaurant!';
    h1.style.textAlign = "center"
    content.appendChild(h1);

    let para1 = document.createElement('p');
    para1.className = "description";
    para1.innerText = "Get the best food available.";
    para1.style.textAlign = "center"
    content.appendChild(para1);

    let imgcenter = document.createElement('div')
    let img = document.createElement('img');
    img.className = "mainImg";
    img.src= "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    img.style.width = "80rem";
    imgcenter.style.display = "flex";
    imgcenter.style.justifyContent = "center"
    imgcenter.appendChild(img);
    content.appendChild(imgcenter) 
}

export {creatingPage};