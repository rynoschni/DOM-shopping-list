'use strict';
const listButton = document.getElementById("generateList");
const myList = document.getElementById("myList") 

listButton.addEventListener('click', function (event){ 
    event.preventDefault();

    
    const listUL = document.createElement('ul');
    listUL.setAttribute('id', 'shop-list')
    listUL.classList.add('ul-shop');
    listUL.innerHTML = "Need to buy";
    myList.appendChild(listUL);

    const inputGroup = document.querySelectorAll(".input");
    inputGroup.forEach(function(item,i) {
        const listItem = document.createElement('li');
        myList.appendChild(listItem);
        listItem.classList.add("list"+i);
        listItem.innerText = item.value;

    });

    

    // const listLi_1 = document.createElement('li');
    // listLi_1.classList.add('li-list');
    // listLi_1.innerHTML = "Front-end peace";
    // listUL.appendChild(listLi_1);

    // const listLi_2 = document.createElement('li');
    // listLi_2.classList.add('li-list');
    // listLi_2.innerHTML = "Back-end aggressive negotiations";
    // listUL.appendChild(listLi_2);

    // const listLi_3 = document.createElement('li');
    // listLi_3.classList.add('li-list');
    // listLi_3.innerHTML = "Interview Force Mastery";
    // listUL.appendChild(listLi_3);
    
    // const listLi_4 = document.createElement('li');
    // listLi_4.classList.add('li-list');
    // listLi_4.innerHTML = "Interview Force Mastery";
    // listUL.appendChild(listLi_4);

});