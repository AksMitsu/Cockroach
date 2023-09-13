
var audio = new Audio(); // Создаём новый элемент Audio
function soundClick() {
    
    audio.remove();
    audio.src = randomMusic(); // Указываем путь к звуку "клика"
    audio.play(); // Автоматически запускаем
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomMusic(){

    r = getRandomInt(7)+1;
    return r+'.mp3';

  }