// Definição completa das matérias
const materias = [
  {
    id: "fundCalc",
    nome: "Fund. Cálculo",
    periodo: 1,
    cat: "matematica",
    pre: [],
  },
  {
    id: "geoAnalitica",
    nome: "Geometria Analítica",
    periodo: 1,
    cat: "matematica",
    pre: [],
  },
  {
    id: "introLogica",
    nome: "Introdução à Lógica",
    periodo: 1,
    cat: "computacao",
    pre: [],
  },
  {
    id: "introComp",
    nome: "Introdução à Computação",
    periodo: 1,
    cat: "computacao",
    pre: [],
  },
  {
    id: "compSoc",
    nome: "Computação e Sociedade",
    periodo: 1,
    cat: "humanistica",
    pre: [],
  },
  // 2º período
  {
    id: "calcDif",
    nome: "Cálculo Dif. e Integral",
    periodo: 2,
    cat: "matematica",
    pre: ["fundCalc"],
  },
  {
    id: "algebraLin",
    nome: "Álgebra Linear",
    periodo: 2,
    cat: "matematica",
    pre: ["geoAnalitica"],
  },
  {
    id: "circDigitais",
    nome: "Circuitos Digitais",
    periodo: 2,
    cat: "computacao",
    pre: ["introLogica"],
  },
  {
    id: "progComp",
    nome: "Prog. de Computadores",
    periodo: 2,
    cat: "computacao",
    pre: ["introComp"],
  },
  {
    id: "anExpText",
    nome: "Análise e Exp. Textual",
    periodo: 2,
    cat: "humanistica",
    pre: [],
  },
  // 3º período
  {
    id: "est",
    nome: "Estatística",
    periodo: 3,
    cat: "matematica",
    pre: ["calcDif"],
  },
  {
    id: "bd",
    nome: "Banco de Dados",
    periodo: 3,
    cat: "computacao",
    pre: [],
  },
  {
    id: "arq",
    nome: "Arquitetura e Org. de Computadores",
    periodo: 3,
    cat: "computacao",
    pre: ["circDigitais"],
  },
  {
    id: "poo",
    nome: "Prog. Orientada a Obj",
    periodo: 3,
    cat: "computacao",
    pre: ["progComp"],
  },
  {
    id: "fil",
    nome: "Filosofia e Met Científica",
    periodo: 3,
    cat: "humanistica",
    pre: [],
  },
  {
    id: "matDis",
    nome: "Matemática Discreta",
    periodo: 3,
    cat: "matematica",
    pre: [],
  },
  {
    id: "calc",
    nome: "Calculo Numérico",
    periodo: 4,
    cat: "matematica",
    pre: ["calcDif", "algebraLin"],
  },
  {
    id: "estI",
    nome: "Estrutura de Dados I",
    periodo: 4,
    cat: "computacao",
    pre: ["poo"],
  },
  {
    id: "sis",
    nome: "Sistemas Operacionais",
    periodo: 4,
    cat: "computacao",
    pre: ["arq"],
  },
  {
    id: "anap",
    nome: "Análise e Proj Orientada a Obj",
    periodo: 4,
    cat: "computacao",
    pre: ["poo"],
  },
  {
    id: "op1",
    nome: "Optativa I",
    periodo: 4,
    cat: "computacao",
    pre: [],
  },
  {
    id: "lingform",
    nome: "Ling. Formais e Autômatos",
    periodo: 4,
    cat: "computacao",
    pre: ["matDis"],
  },
  {
    id: "intart",
    nome: "Inteligência Artificial",
    periodo: 5,
    cat: "computacao",
    pre: ["poo"],
  },
  {
    id: "estii",
    nome: "Estrutura de Dados II",
    periodo: 5,
    cat: "computacao",
    pre: ["estI"],
  },
  {
    id: "red",
    nome: "Redes de Computadores",
    periodo: 5,
    cat: "computacao",
    pre: ["circDigitais"],
  },
  {
    id: "engs",
    nome: "Eng. de Software",
    periodo: 5,
    cat: "computacao",
    pre: ["anap"],
  },
  {
    id: "op2",
    nome: "Optativa II",
    periodo: 5,
    cat: "computacao",
    pre: [],
  },
  {
    id: "teoComp",
    nome: "Teoria da Computação",
    periodo: 5,
    cat: "computacao",
    pre: ["lingform"],
  },
  {
    id: "teoGraf",
    nome: "Teoria dos Grafos",
    periodo: 6,
    cat: "computacao",
    pre: ["estI"],
  },
  {
    id: "anAlg",
    nome: "Análise de Algoritmos",
    periodo: 6,
    cat: "computacao",
    pre: ["estii"],
  },
  {
    id: "sisDist",
    nome: "Sistemas Distribuídos",
    periodo: 6,
    cat: "computacao",
    pre: ["red", "sis"],
  },
  {
    id: "op3",
    nome: "Optativa III",
    periodo: 6,
    cat: "computacao",
    pre: [],
  },
  {
    id: "op4",
    nome: "Optativa IV",
    periodo: 6,
    cat: "computacao",
    pre: [],
  },
  {
    id: "comp",
    nome: "Compiladores",
    periodo: 6,
    cat: "computacao",
    pre: ["lingform"],
  },
  {
    id: "compGraf",
    nome: "Computação Gráfica",
    periodo: 7,
    cat: "computacao",
    pre: ["algebraLin", "estii"],
  },
  {
    id: "sisMult",
    nome: "Sistemas Multimídia",
    periodo: 7,
    cat: "computacao",
    pre: ["estii", "red"],
  },
  {
    id: "op5",
    nome: "Optativa V",
    periodo: 7,
    cat: "computacao",
    pre: [],
  },
  {
    id: "op6",
    nome: "Optativa VI",
    periodo: 7,
    cat: "computacao",
    pre: [],
  },
  {
    id: "op7",
    nome: "Optativa VII",
    periodo: 7,
    cat: "computacao",
    pre: [],
  },
  {
    id: "empre",
    nome: "Empreendorismo",
    periodo: 8,
    cat: "humanistica",
    pre: [],
  },
  {
    id: "segOp",
    nome: "Segurança Operacional",
    periodo: 8,
    cat: "computacao",
    pre: ["red"],
  },
  {
    id: "op8",
    nome: "Optativa VIII",
    periodo: 8,
    cat: "computacao",
    pre: [],
  },
  {
    id: "op9",
    nome: "Optativa IX",
    periodo: 8,
    cat: "computacao",
    pre: [],
  },
  {
    id: "op10",
    nome: "Optativa X",
    periodo: 8,
    cat: "computacao",
    pre: [],
  },
];

let concluidas = JSON.parse(localStorage.getItem("concluidas")) || [];

function salvar() {
  localStorage.setItem("concluidas", JSON.stringify(concluidas));
}

function podeLiberar(m) {
  return m.pre.every((id) => concluidas.includes(id));
}

function renderizarGrade() {
  const container = document.getElementById("grade");
  container.innerHTML = "";
  // Cria coluna para cada período
  for (let p = 1; p <= 8; p++) {
    const col = document.createElement("div");
    col.className = "periodo";
    col.id = "periodo" + p;
    col.innerHTML = `<h2>${p}º Período</h2>`;
    container.appendChild(col);
  }

  materias.forEach((m) => {
    const card = document.createElement("label");
    card.id = m.id;
    card.className = `materia ${m.cat}`;

    const titulo = document.createElement("div");
    titulo.innerText = m.nome;
    card.appendChild(titulo);

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = concluidas.includes(m.id);
    cb.disabled = m.pre.length && !podeLiberar(m);
    card.classList.add(
      cb.checked
        ? "concluida"
        : podeLiberar(m) || m.pre.length === 0
        ? "disponivel"
        : "bloqueada"
    );
    cb.addEventListener("change", () => {
      if (cb.checked) concluidas.push(m.id);
      else concluidas = concluidas.filter((x) => x !== m.id);
      salvar();
      renderizarGrade();
      drawLines();
    });
    card.appendChild(cb);

    document.getElementById("periodo" + m.periodo).appendChild(card);
  });
  drawLines();
}

let linhas = [];
function drawLines() {
  linhas.forEach((l) => l.remove());
  linhas = [];
  materias.forEach((m) => {
    m.pre.forEach((p) => {
      const start = document.getElementById(p);
      const end = document.getElementById(m.id);
      if (start && end)
        linhas.push(
          new LeaderLine(start, end, {
            color: "#333",
            size: 2,
            path: "straight",
            startSocket: "bottom",
            endSocket: "top",
          })
        );
    });
  });
}
function handleCheckboxChange(materia) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Update state
  materia.completed = !materia.completed;

  checkboxes.forEach((checkbox) => {
    const dependentMateria = materias.find((m) => m.id == checkbox.dataset.id);

    if (!dependentMateria) return;

    const allPrerequisitesCompleted = dependentMateria.prerequisites.every(
      (prereqId) => {
        const prereqMateria = materias.find((m) => m.id == prereqId);
        return prereqMateria && prereqMateria.completed;
      }
    );
    if (!dependentMateria.prerequisites.every)
      return dependentMateria.disabled && checkbox.disabled;
    checkbox.disabled = !allPrerequisitesCompleted;

    // Update visual class
    const card = checkbox.parentElement;
    if (checkbox.disabled) {
      card.classList.remove("completed");
      card.classList.add("locked");
    } else {
      card.classList.remove("locked");
      if (dependentMateria.completed) {
        card.classList.add("completed");
      }
    }
  });

  // Also update the clicked card's class
  const clickedCard = document.querySelector(
    `input[data-id="${materia.id}"]`
  ).parentElement;
  if (materia.completed) {
    clickedCard.classList.add("completed");
    clickedCard.classList.remove("locked");
  } else {
    clickedCard.classList.remove("completed");
  }
}

document.addEventListener("DOMContentLoaded", () => renderizarGrade());
