const lista = document.getElementById("lista");
const filtros = document.getElementById("filtros");
const busca = document.getElementById("busca");
const progresso = document.getElementById("progresso");
const btnTodas = document.getElementById("btnTodas");
const sistemas = ["Todos", ...new Set(exames.map(e => e.sis))];
let filtro = "Todos";
const vistas = new Set();

sistemas.forEach(s => {
  const b = document.createElement("button");
  b.textContent = s;
  b.onclick = () => { filtro = s; render(); };
  filtros.appendChild(b);
});

function render() {
  const termo = busca.value.toLowerCase();
  lista.innerHTML = "";
  [...filtros.children].forEach(b => b.classList.toggle("ativo", b.textContent === filtro));
  let atual = "";
  exames
    .filter(e => (filtro === "Todos" || e.sis === filtro) && JSON.stringify(e).toLowerCase().includes(termo))
    .forEach(e => {
      if (e.sis !== atual) {
        atual = e.sis;
        const h = document.createElement("h2");
        h.textContent = atual;
        lista.appendChild(h);
      }
      const card = document.createElement("article");
      card.className = "card" + (vistas.has(e.n) ? " aberto" : "");
      card.innerHTML = `
        <img src="img/${e.img}" alt="${e.t}">
        <div>
          <h3>Exame ${String(e.n).padStart(2, "0")}</h3>
          <div class="tipo">${e.t}</div>
          <button>${vistas.has(e.n) ? "Esconder resposta" : "Ver resposta"}</button>
          <div class="resposta">
            <p><strong>a) Plano anatômico:</strong> ${e.a}</p>
            <p><strong>b) Eixo anatômico:</strong> ${e.b}</p>
            <p><strong>c) Localização (região):</strong> ${e.c}</p>
            <p><strong>d) Estrutura indicada:</strong> ${e.d}</p>
          </div>
        </div>`;
      card.querySelector("button").onclick = () => {
        vistas.has(e.n) ? vistas.delete(e.n) : vistas.add(e.n);
        render();
      };
      card.querySelector("img").onclick = () => ampliar(e);
      lista.appendChild(card);
    });
  progresso.textContent = `Respostas vistas: ${vistas.size}/${exames.length}`;
}

function ampliar(e) {
  const d = document.createElement("dialog");
  d.innerHTML = `<img src="img/${e.img}" alt="${e.t}">`;
  d.onclick = () => { d.close(); d.remove(); };
  document.body.appendChild(d);
  d.showModal();
}

btnTodas.onclick = () => {
  const todas = vistas.size === exames.length;
  exames.forEach(e => todas ? vistas.delete(e.n) : vistas.add(e.n));
  btnTodas.textContent = todas ? "Mostrar todas as respostas" : "Esconder todas as respostas";
  render();
};
busca.oninput = render;
render();
