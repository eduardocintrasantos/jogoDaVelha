var aux = 0;
var vet = [[-1, -2, -3],[-4, -5, -6],[-7, -8, -9]];
var pergunta = true;


    function funcaoClick(id, i, j){

        console.log(vet)
        if (i == 0 && j == 0){
            if (vet[0][0] == -1){
                vet[0][0] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 0 && j == 1){
            if (vet[i][j] == -2){
                vet[0][1] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 0 && j == 2){
            if (vet[i][j] == -3){
                vet[0][2] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 1 && j == 0) {
            if (vet[i][j] == -4){
                vet[1][0] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 1 && j == 1) {
            if (vet[i][j] == -5){
                vet[1][1] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 1 && j == 2) {
            if (vet[i][j] == -6){
                vet[1][2] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 2 && j == 0) {
            if (vet[i][j] == -7){
                vet[2][0] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 2 && i == 1) {
            if (vet[i][j] == -8){
                vet[2][1] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }
        else if (i == 2 && i == 2) {
            if (vet[i][j] == -9){
                vet[2][2] = aux;
                if (aux == 1){
                    id.className = "conf X";
                    aux = 0;
                }
                else {
                    id.className = "conf bolinha";
                    aux = 1;
                }
            }
        }

        if(vet[0][0] == vet[0][1] && vet[0][0] == vet[0][2]){
            if(aux == 1){
                alert("Vencedor = O");
            }
            else{
                alert("Vencedor = X");
            }
        }
        else if(vet[1][0] == vet[1][1] && vet[1][0] == vet[1][2]){
            if(aux == 1){
                alert("Vencedor = O");
            }
            else{
                alert("Vencedor = X");
            }
        }
        else if(vet[2][0] == vet[2][1] && vet[2][0] == vet[2][2]){
            if(aux == 1){
                alert("Vencedor = O");
            }
            else{
                alert("Vencedor = X");
            }
        }
        //pergunta = prompt("Quer jogar novamente?");
    }

