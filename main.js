function formatMoney(value){
    value =Math.ceil(value*100)/100;
    value = value.toFixed(2);
    return "₹ "+value;
}

function formatSpilit(value){
    if(value==1){
        return value + " Person";
    }else{
        return value + " People";
    }
}

function update(){
    let billValue = Number(document.getElementById("billInput").value);
    let tipPercent = document.getElementById("tipInput").value;
    let splitValue = document.getElementById("splitInput").value;

    let tipValue =  (billValue*(tipPercent/100));
    let tipEach = tipValue/splitValue;
    let billEach = (billValue + tipValue)/splitValue;

    document.getElementById("tipPercent").innerHTML = tipPercent+"%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML =formatMoney(billValue + tipValue);
    document.getElementById("splitValue").innerHTML = formatSpilit(splitValue);
    document.getElementById("billEach").innerHTML = formatMoney(billEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

let container = document.getElementById("container");
container.addEventListener("input",update)