var aux = 1;
var vet = [[-3, -3, -3], [-3, -3, -3], [-3, -3, -3]];
var pergunta = true;

function funcaoClick(id, i, j) {

    console.log(vet)
    if (i == 0 && j == 0) {
        if (vet[0][0] == -3) {
            vet[0][0] = aux;
            if (aux == 1) {
                id.className = "conf X";
                aux = 0;
            }
            else {
                id.className = "conf bolinha";
                aux = 1;
            }
        }
    }
    else if (i == 0 && j == 1) {
        if (vet[i][j] == -3) {
            vet[0][1] = aux;
            if (aux == 1) {
                id.className = "conf X";
                aux = 0;
            }
            else {
                id.className = "conf bolinha";
                aux = 1;
            }
        }
    }
    else if (i == 0 && j == 2) {
        if (vet[i][j] == -3) {
            vet[0][2] = aux;
            if (aux == 1) {
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
        if (vet[i][j] == -3) {
            vet[1][0] = aux;
            if (aux == 1) {
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
        if (vet[i][j] == -3) {
            vet[1][1] = aux;
            if (aux == 1) {
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
        if (vet[i][j] == -3) {
            vet[1][2] = aux;
            if (aux == 1) {
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
        if (vet[i][j] == -3) {
            vet[2][0] = aux;
            if (aux == 1) {
                id.className = "conf X";
                aux = 0;
            }
            else {
                id.className = "conf bolinha";
                aux = 1;
            }
        }
    }
    else if (i == 2 && j == 1) {
        if (vet[i][j] == -3) {
            vet[2][1] = aux;
            if (aux == 1) {
                id.className = "conf X";
                aux = 0;
            }
            else {
                id.className = "conf bolinha";
                aux = 1;
            }
        }
    }
    else if (i == 2 && j == 2) {
        if (vet[i][j] == -3) {
            vet[2][2] = aux;
            if (aux == 1) {
                id.className = "conf X";
                aux = 0;
            }
            else {
                id.className = "conf bolinha";
                aux = 1;
            }
        }
    }

    if (vet[0][0] + vet[0][1] + vet[0][2] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[0][0] + vet[0][1] + vet[0][2] == 0) {
        alert("Vencedor = O");
    }
    else if (vet[1][0] + vet[1][1] + vet[1][2] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[1][0] + vet[1][1] + vet[1][2] == 0) {
        alert("Vencedor = O");
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 0) {
        alert("Vencedor = O");
    }
    else if (vet[0][0] + vet[1][0] + vet[2][0] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[0][0] + vet[1][0] + vet[2][0] == 0) {
        alert("Vencedor = O");
    }
    else if (vet[0][1] + vet[1][1] + vet[2][1] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[0][1] + vet[1][1] + vet[2][1] == 0) {
        alert("Vencedor = O");
    }
    else if (vet[0][2] + vet[1][2] + vet[2][2] == 3) {
        alert("Vencedor = X");
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 0) {
        alert("Vencedor = O");
    }


    if (vet[0][0] != -3 && vet[0][1] != -3 && vet[0][2] != -3 && vet[1][0] != -3 && vet[1][1] != -3 && vet[1][2] != -3 && vet[2][0] != -3 && vet[2][1] != -3 && vet[2][2] != -3) {
        alert("Deu velha!")
    }
}


