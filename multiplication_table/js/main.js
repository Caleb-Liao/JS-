let list= document.querySelector('.list')

for(let i=2; i<=9; i++){ 
    let li= document.createElement('li');
    li.setAttribute('class','content');
    list.appendChild(li);
    let str='';
    
    for(let j=1; j<=9; j++){               
        str +=`<li class=equation>${i} x ${j} = ${i*j}</li>`       
    }
    
    let text = `<ul class="numberList"><li><h2 class="number">${i}</h2></li>${str}</ul>`
    li.innerHTML= text
}