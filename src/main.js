
const imagens = ['dist/images/Bowser-Super-Mario-Free-PNG.png', 'dist/images/princesspeach.png', 'dist/images/supermario.png', 'dist/images/toad.png', 'dist/images/Luigi-PNG-Pic.png'];
const imagemElement = document.querySelector('#imagem');
const textElement = document.querySelector('#text');
const titleElement = document.querySelector('#title');
const button = document.querySelector('#sortear');
const close = document.querySelector('#close');
const frame = document.querySelector('#frame');
const frameContainer = document.querySelector('#frameContainer');

function closeFrame(){
    frame.classList.add('hidden')
    console.log("funcionou")

    frameContainer.parentNode.removeChild(frameContainer);
}


function sortearImagem() {
    imagemElement.src = 'dist/images/super-mario-correndo.gif';
    textElement.innerText = '...'
    titleElement.innerText = 'Verificando seus dados biologicos, caracteristicas e habilidades'
    button.innerText = 'ANALISANDO'

    setTimeout(() => {

      const indice = Math.floor(Math.random() * imagens.length);

    if(indice == 0){
        textElement.innerText = 'Ambicioso e com sede de dominar o mundo, você é capaz de tudo para conseguir o que deseja, inclusive, sequestrar uma princesa indefesa que gosta de encanadores'
        titleElement.innerText = 'VOCÊ É O TERRÍVEL BOWSER'
        button.innerText = 'REFAZER'
    } else if (indice == 1){
        textElement.innerText = 'Delicada, vaidosa e inteligente, essas são as caracteristicas mais marcantes de uma princesa ao nível Peach. Sinta-se preparada(o) para conquistar o coração de encanadores.'
        titleElement.innerText = 'VOCÊ É A DELICADA PRINCESS PEACH'
        button.innerText = 'REFAZER'
    } else if( indice == 2){
        textElement.innerText = 'It´s me Mario! Você tem o poder do protagonismo, alguma coisa importa mais do que isso? O roteiro da vida ta a seu favor.'
        titleElement.innerText = 'VOCÊ É O SUPER MARIO'
        button.innerText = 'REFAZER'
    } else if( indice == 3){
        textElement.innerText = 'Sim você é um cogumelo fofinho'
        titleElement.innerText = 'VOCÊ É O TOAD'
        button.innerText = 'REFAZER'
    } else if( indice == 4){
        textElement.innerText = 'Olha, as vezes é bom ser o coadjuvante e não o protagonista, além do mais, roupinha verde muito melhor que roupinha vermelha.'
        titleElement.innerText = 'VOCÊ É O LUIGI'
        button.innerText = 'REFAZER'
    }

    imagemElement.src = imagens[indice];
    }, 2000);
}


document.querySelector('#sortear').addEventListener('click', sortearImagem);
document.querySelector('#close').addEventListener('click', closeFrame);
