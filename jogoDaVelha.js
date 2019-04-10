var aux = 0;

function funcaoClick(id){
    if (aux == 1){
        id.className = "conf X";
        aux = 0;
    }
    else {
        id.className = "conf bolinha";
        aux = 1;
    }
}
