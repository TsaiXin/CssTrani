function addLifeList () {
    let input = document.querySelector(".input input");
    if(input.value ===""){
        return
    };
    let Time = new Date();
    let nowTime = Time.getMonth()+1 + "/" + Time.getDate();
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let checkBtn = document.createElement("div");
    let trashBtn = document.createElement("div");

    div.setAttribute("class" , "list-text");
    h3.setAttribute("class" , "time");
    p.setAttribute("class" , "text");
    checkBtn.setAttribute("class" , "check");
    trashBtn.setAttribute("class" , "trash");
    
    h3.innerText = nowTime;
    p.innerText = input.value;
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(checkBtn);
    div.appendChild(trashBtn);

    checkBtn.addEventListener("click" , e => {
        p.classList.toggle("none")
    });
    trashBtn.addEventListener("click" , e => {
        div.classList.add("scaleDown")
        div.addEventListener("animationend" , () => {
            div.remove();
        })
    });

    let lifeList =  document.querySelector(".life-list");
    lifeList.appendChild(div);

    input.value = "";
};
function addworkList () {
    let input = document.querySelector(".input input");
    if(input.value ===""){
        return
    };
    let Time = new Date();
    let nowTime = Time.getMonth()+1 + "/" + Time.getDate();
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let checkBtn = document.createElement("div");
    let trashBtn = document.createElement("div");

    div.setAttribute("class" , "list-text");
    h3.setAttribute("class" , "time");
    p.setAttribute("class" , "text");
    checkBtn.setAttribute("class" , "check");
    trashBtn.setAttribute("class" , "trash");
    
    h3.innerText = nowTime;
    p.innerText = input.value;
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    div.appendChild(h3);
    div.appendChild(p)
    div.appendChild(checkBtn)
    div.appendChild(trashBtn)

    checkBtn.addEventListener("click" , e => {
        p.classList.toggle("none")
    });
    trashBtn.addEventListener("click" , e => {
        div.classList.add("scaleDown")
        div.addEventListener("animationend" , () => {
            div.remove();
        })
    });

    let workList =  document.querySelector(".work-list");
    workList.appendChild(div);

    input.value = "";
};
function adddreamsList () {
    let input = document.querySelector(".input input");
    if(input.value ===""){
        return
    };
    let Time = new Date();
    let nowTime = Time.getMonth()+1 + "/" + Time.getDate();
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let checkBtn = document.createElement("div");
    let trashBtn = document.createElement("div");

    div.setAttribute("class" , "list-text");
    h3.setAttribute("class" , "time");
    p.setAttribute("class" , "text");
    checkBtn.setAttribute("class" , "check");
    trashBtn.setAttribute("class" , "trash");
    
    h3.innerText = nowTime;
    p.innerText = input.value;
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    div.appendChild(h3);
    div.appendChild(p)
    div.appendChild(checkBtn)
    div.appendChild(trashBtn)

    checkBtn.addEventListener("click" , e => {
        p.classList.toggle("none")
    });
    trashBtn.addEventListener("click" , e => {
        div.classList.add("scaleDown")
        div.addEventListener("animationend" , () => {
            div.remove();
        })
    });

    let dreamsList =  document.querySelector(".dreams-list");
    dreamsList.appendChild(div);

    input.value = "";
};

document.querySelector(".life").addEventListener("click", addLifeList);
document.querySelector(".work").addEventListener("click", addworkList);
document.querySelector(".dreams").addEventListener("click", adddreamsList);


document.body.addEventListener("keypress" , e => {
    if(e.keyCode === 13){
        addLifeList();
        document.querySelector(".input input").value = "";
    }
});