var list= document.querySelector('.list')
var sendData = document.querySelector('.send')
var data = JSON.parse(localStorage.getItem('listData')) || [];
var remove = document.querySelector('.delete')

sendData.addEventListener('click',addData);
remove.addEventListener('click',removeData);
update(data); //重開頁面也會跑出列表

function addData(e){
    e.preventDefault();
    var height = document.querySelector('.height').value;
    var weight = document.querySelector('.weight').value;
    var bmi = (weight / Math.pow(height/100,2)).toFixed(2);
    var today = new Date().toLocaleString().split(' ',1); //以空格切割取第一個值作為陣列
    var person = {
        shape: BMI(bmi),
        bmi: bmi,
        weight: weight,
        height: height,
        date: today,
    };
    data.push(person);
    localStorage.setItem('listData',JSON.stringify(data));
    update(data);
}

function BMI(num){
    if (num>=40){
        return '非常嚴重肥胖'
    } else if (num>=35 && num<40){
        return '嚴重肥胖'
    } else if (num>=30 && num<35){
        return '中等肥胖'
    } else if (num>=25 && num<30){
        return '體重過重'
    } else if (num>=18.5 && num<25){
        return '體重正常'
    } else if (num>=16 && num<18.5){
        return '體重過輕'
    } else if (num>=15 && num<16){
        return '嚴重體重不足'
    } else{
        return '非常嚴重體重不足'
    }
}

function level(num){
    if (num>=40){
        return 'level8'
    } else if (num>=35 && num<40){
        return 'level7'
    } else if (num>=30 && num<35){
        return 'level6'
    } else if (num>=25 && num<30){
        return 'level5'
    } else if (num>=18.5 && num<25){
        return 'level4'
    } else if (num>=16 && num<18.5){
        return 'level3'
    } else if (num>=15 && num<16){
        return 'level2'
    } else{
        return 'level1'
    }
}

function update(items){
    str="";
    var len= items.length;
    for (var i= 0; i< len; i++){
        var lv= level(items[i].bmi);
        str+= '<li data-index='+i+' class="'+lv+'"><span class="shape">'+items[i].shape+'</span><span class="bmi"><small>BMI</small>'+items[i].bmi+'</span><span class="kg"><small>weight</small>'+items[i].weight+'kg</span><span class="cm"><small>height</small>'+items[i].height+'cm</span><small class="date">'+items[i].date+'</small></li>';
        //兩個class中間記得要用空白隔開
    }
    list.innerHTML = str;
}

function removeData(e){
    e.preventDefault();
    data.length=0;
    //清空data之後要同步渲染跟更新資料庫
    update(data); 
    localStorage.setItem('listData',JSON.stringify(data));
}