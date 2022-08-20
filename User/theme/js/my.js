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

