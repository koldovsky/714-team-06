// (function (){
    const btnPlus = document.querySelector('.bt_plus');
    const btnMinus = document.querySelector('.bt_minus');
    let inpt = +document.querySelector('.quantity').value;

    function funcAdd (inpt){
        return inpt+1;
    }

    function funcExstr(inpt){
        if ( inpt > 0){
           return inpt-1;
        } else {
            return inpt;
        }
    }

    btnPlus.addEventListener('click', funcAdd);
    btnMinus.addEventListener('click' , funcExstr);

// });
