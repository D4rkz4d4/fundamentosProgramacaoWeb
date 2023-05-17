let inputMedia = document.querySelector("#inputMedia")
let btVerificaMedia = document.querySelector("#btVerificaMedia")

function verificarMedia(){
    let media = Number(inputMedia.value)

    if (media>60){
        alert("o aluno foi aprovado :)");
    }
    else{
        if (media<60){
            alert("o aluno reprovou kk xd");
        }
    }
    if (media=60){
            alert("o aluno passou raspando");
        }
    }


btVerificaMedia.onclick = function(){
    verificarMedia();
}