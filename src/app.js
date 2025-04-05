import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here'
  let adj = ['feio', 'bonita', 'estranho', 'apertado', 'feliz']
  let obj = ['joelho', 'coração', 'tibia', 'fratura', 'infecção']
  let random = ['cirugia', 'doutor', 'enfermeiro', 'transplante', 'sangue'];
  const domainNames = [];
  for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
    const domainAdj = adj[adjIndex];
    for (let objIndex = 0; objIndex < obj.length; objIndex++) {
      const domainObj = obj[objIndex];
      for (let randomIndex = 0; randomIndex < random.length; randomIndex++) {
        const domainRandom = random[randomIndex];
        const domainName = domainAdj + domainObj + domainRandom + '.com';
        domainNames.push(domainName);
      }
    }
  }

  console.log("Nomes de domínios:"); domainNames.forEach(name => console.log(name));
};
