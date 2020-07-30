let number= document.querySelectorAll('.number')
let operator= document.querySelectorAll('.operator')
let clear= document.querySelector('.clear')
let back= document.querySelector('.back')
let total= document.querySelector('.total')
let equal= document.querySelector('.equal')
let equation= document.querySelector('.equation')

let data= []; //運算全部數字的陣列
let equationList= []; //畫面顯示的方程式的陣列
let newNumber= [];  //數字暫放的陣列

number.forEach(item => item.addEventListener('click',addNumber))  //按數字
operator.forEach(item => item.addEventListener('click',addOperator))  //按運算子
equal.addEventListener('click',sumNumber) //按"="
clear.addEventListener('click',clearAll) //按"AC"
back.addEventListener('click',clearOne) //按"⌫"


function addNumber(e){
    //前一輪沒要繼續運算可直接按數字清掉畫面的算式
    if(data.length == 0){
        clearAll();
        data.push('')   //避免重複觸發
    };

    //將數字放進暫放陣列，並顯示於畫面，"00"要算兩筆資料，以免⌫時出錯誤
    if(e.target.innerText !== "00"){
        newNumber.push(e.target.innerText)
    } else{newNumber.push("0","0")};

    total.innerHTML= thousands(newNumber.join(''));
}

function addOperator(e){
    //將暫放陣列的數字加入要處裡的陣列，並清空暫置的數字陣列讓下一批數字成為新一組資料
    data.push(newNumber.join(''));
    equationList.push(thousands(newNumber.join('')));
    newNumber= [];

    //把運算子也加進去要處理的陣列
    data.push(this.dataset.operator);
    equationList.push(e.target.innerText);
    
    //畫面呈現出之前的算式
    equation.innerHTML= equationList.join('');
}

function sumNumber(){
    //同之前將最新的資料放進要處理的陣列
    data.push(newNumber.join(''));
    equationList.push(thousands(newNumber.join('')));
    newNumber= [];

    //同之前顯示之前的算式，並呈現最終算式運行結果
    equation.innerHTML= equationList.join('');
    let result= eval(data.join(''))
    total.innerHTML=thousands(result);

    //將運算結果暫存起來可以繼續運算，並清除之前資料
    newNumber.push(result) 
    data= [];
    equationList= [];
}

function clearAll(){
    newNumber= [];
    data= [];
    equationList= [];
    total.innerHTML='0'; //畫面預設值為'0'
    equation.innerHTML='&nbsp;' //畫面預設值為一個空白
}

function clearOne(){
    newNumber.pop();
    total.textContent=total.textContent.substr(0,total.textContent.length-1);
}

function thousands(num){    //資料每三位數加一個","
    var str = num.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg,"$1,");
}