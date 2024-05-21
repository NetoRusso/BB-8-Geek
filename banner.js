

const corpo = document.getElementById("corpo");
const antena = document.getElementById("antena");
const cabeca = document.getElementById("cabeca");
const olhos = document.getElementById("olhos");
const detalhe = document.getElementById("detalhe");
const bola = document.getElementById("bola");

const data = {
  droidX: 0,
  mouseX: 0,
  speed: 0.5,
  accelMod: 0.5,
};

function styleTag() {
  const calculo = data.mouseX - data.droidX;
  corpo.style.cssText = `transform: translateX(${data.droidX}px);`;
  antena.style.cssText = `transform: translateX(${calculo / 25}px) rotateZ(${calculo / 80}deg);`;
  cabeca.style.cssText = `transform: translateX(${calculo / 15}px) rotateZ(${calculo / 25}deg);`;
  bola.style.cssText = `transform: rotateZ(${data.droidX / 2}deg);`;
}

function mouse() {
  const distancia = data.mouseX - data.droidX;
  const aceleracao = Math.abs(distancia * data.accelMod) / 100;
  const comeco = Math.abs(Math.round(data.droidX) - data.mouseX);

  if (comeco !== 1) {
    if (data.droidX < data.mouseX) {
      data.droidX += data.speed * aceleracao;
    } else {
      data.droidX -= data.speed * aceleracao;
    }

    styleTag();
    requestAnimationFrame(mouse); // Usar requestAnimationFrame para movimento suave
  }
}

addEventListener("mousemove", (event) => {
  data.mouseX = event.pageX;

  setTimeout(() => {
    mouse();
  }, 1000)
});
