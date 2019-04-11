var aux = 1;
var vet = [[-3, -3, -3], [-3, -3, -3], [-3, -3, -3]];
var resp;


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
        jogarNovamente()
    }
    else if (vet[0][0] + vet[0][1] + vet[0][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[1][0] + vet[1][1] + vet[1][2] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[1][0] + vet[1][1] + vet[1][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[0][0] + vet[1][0] + vet[2][0] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[0][0] + vet[1][0] + vet[2][0] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[0][1] + vet[1][1] + vet[2][1] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[0][1] + vet[1][1] + vet[2][1] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[0][2] + vet[1][2] + vet[2][2] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[0][2] + vet[1][2] + vet[2][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[2][0] + vet[2][1] + vet[2][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[0][0] + vet[1][1] + vet[2][2] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[0][0] + vet[1][1] + vet[2][2] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else if (vet[0][2] + vet[1][1] + vet[2][0] == 3) {
        alert("Vencedor = X");
        jogarNovamente()
    }
    else if (vet[0][2] + vet[1][1] + vet[2][0] == 0) {
        alert("Vencedor = O");
        jogarNovamente()
    }
    else {
        var sds = 0;
        for (var x = 0; x <= 2; x++) {
            for (var j = 0; j <= 2; j++) {
                sds += vet[x][j];
            }
        }
        if (sds == 4 || sds == 5) {
            alert("Deu velha");
            jogarNovamente()
        }
    }
}

function jogarNovamente() {
    resp = prompt("Jogar novamente? (Y/N)").toUpperCase();
    if (resp == 'Y') {
        for (var x = 1; x <= 3; x++) {
            for (var j = 1; j <= 3; j++) {
                document.getElementById("l" + x + "c" + j).className = "conf";
            }
        aux = 1;
        vet = [[-3, -3, -3], [-3, -3, -3], [-3, -3, -3]];           
        }
    }
}
