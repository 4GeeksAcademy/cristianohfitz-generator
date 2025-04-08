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
  for (const domainAdj of adj) {
    for (const domainObj of obj) {
      for (const domainRandom of random) {
        const domainName = domainAdj + domainObj + domainRandom + '.com';
        domainNames.push(domainName);
      }
    }
  }

  console.log("Nomes de domínios:"); domainNames.forEach(name => console.log(name));
};
