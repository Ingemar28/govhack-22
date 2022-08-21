function show(flag){
    var checkBox = document.getElementById(flag);
    var x = document.getElementsByClassName('col-lg-3 col-md-6');
    if (checkBox.checked == true){
        for (let i = 0; i < x.length; i++) {
            if (!x[i].className.includes(flag)){
                x[i].hidden = "True";
            }
        }
    }
    else{
        for (let i = 0; i < x.length; i++) {
            x[i].hidden = "";
        }

    }
}

function loca_click(flag){
    var checkBox = document.getElementById(flag);
    var x = document.getElementsByClassName('col-lg-3 col-md-6');
    var y = document.getElementsByClassName('slider-item-content');

    if (checkBox.checked == true){
        for (let i = 0; i < x.length; i++) {
            // hide post not in the right location
            if (!x[i].className.includes('in')){
                x[i].hidden = "True";
            }
        }
        for (let j = 0; j < y.length; j++){
            // animation 
            if (!y[j].className.includes(flag)){
                // document.getElementsByClassName(y[j].className).style.opacity = '0.5';
                console.log((document.getElementsByClassName(y[j].className)[0].style['opacity'] = 0.2));
            }
        }
    }
    else{
        for (let i = 0; i < x.length; i++) {
            x[i].hidden = "";
        }
        for (let j = 0; j < y.length; j++){
            // animation 
            if (!y[j].className.includes(flag)){
                console.log((document.getElementsByClassName(y[j].className)[0].style['opacity'] = 1));
            }
        }
    }
}
