/* ===========================
   Intégrales — BTS (SPA)
   HTML/CSS/JS pur, moderne.
   =========================== */

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

const STORAGE_KEY = "integrales_bts_progress_v1";
const THEME_KEY = "integrales_bts_theme_v1";

const tips = [
  "Toujours repérer une dérivée « cachée » : ∫ f'(x)·g(f(x)) dx → substitution.",
  "Avant une intégration par parties, pose la question : « est-ce que la dérivée simplifie ? »",
  "Pour une intégrale définie, pense à l’interprétation aire algébrique et aux symétries.",
  "Si tu hésites, dérive ton résultat : c’est le contrôle le plus rapide.",
  "Pour ∫ e^{ax} dx : c’est (1/a) e^{ax} + C (si a ≠ 0).",
  "Pour ∫ 1/(x-a) dx : ln|x-a| + C. Les valeurs absolues comptent.",
  "Pour ∫ x^n dx (n≠-1) : x^{n+1}/(n+1) + C.",
  "Avec cos(ax) et sin(ax), n’oublie pas le facteur 1/a.",
];

const curriculum = [
  { id: "prim", label: "Primitives & tables", level: "BTS" },
  { id: "sub", label: "Changement de variable", level: "BTS" },
  { id: "ibp", label: "Intégration par parties", level: "BTS" },
  { id: "frac", label: "Fractions rationnelles", level: "BTS+" },
  { id: "def", label: "Intégrale définie", level: "BTS" },
  { id: "apps", label: "Applications (aire, moyenne)", level: "BTS" },
  { id: "method", label: "Méthode & stratégie", level: "BTS" },
];

const lessons = [
  {
    id: "prim",
    title: "1) Primitives : définitions et table essentielle",
    time: "25–40 min",
    objectives: [
      "Comprendre primitive / dérivée",
      "Savoir utiliser la table",
      "Éviter les erreurs de constantes"
    ],
    content: `
      <div class="panel">
        <h2>Définition</h2>
        <p>Une fonction <b>F</b> est une <b>primitive</b> de <b>f</b> sur un intervalle si <span class="kbd">F'(x)=f(x)</span>.</p>
        <p>On note : <span class="kbd">∫ f(x) dx = F(x) + C</span> (où <span class="kbd">C</span> est une constante réelle).</p>
      </div>

      <div class="panel">
        <h2>Table BTS (à connaître)</h2>
        <div class="code">
∫ x^n dx = x^(n+1)/(n+1) + C (n≠-1)
∫ 1/x dx = ln|x| + C
∫ e^x dx = e^x + C
∫ e^(ax) dx = (1/a)e^(ax) + C (a≠0)
∫ cos(x) dx = sin(x) + C
∫ sin(x) dx = -cos(x) + C
∫ cos(ax) dx = (1/a)sin(ax) + C
∫ sin(ax) dx = -(1/a)cos(ax) + C
∫ 1/(x-a) dx = ln|x-a| + C
        </div>
      </div>

      <div class="panel">
        <h2>Pièges classiques</h2>
        <ul>
          <li><b>Oublier le +C</b> (sauf si on demande une primitive particulière).</li>
          <li><b>Oublier le facteur</b> : ex. ∫ e^(3x) dx = (1/3)e^(3x)+C.</li>
          <li><b>Valeur absolue</b> : ln|x| et ln|x-a|.</li>
        </ul>
      </div>
    `
  },
  {
    id: "sub",
    title: "2) Changement de variable (substitution)",
    time: "30–45 min",
    objectives: [
      "Repérer f'(x)·g(f(x))",
      "Savoir changer les bornes en intégrale définie",
      "Rédiger proprement"
    ],
    content: `
      <div class="panel">
        <h2>Principe</h2>
        <p>Si l’intégrande contient une forme <span class="kbd">f'(x)·g(f(x))</span>, on pose <span class="kbd">u=f(x)</span>.</p>
        <p>Alors <span class="kbd">du=f'(x)dx</span> et <span class="kbd">∫ f'(x)·g(f(x)) dx = ∫ g(u) du</span>.</p>
      </div>

      <div class="panel">
        <h2>Exemples types</h2>
        <div class="code">
1) ∫ 2x·(x²+1)^5 dx
   u = x²+1 → du = 2x dx
   = ∫ u^5 du = u^6/6 + C = (x²+1)^6/6 + C

2) ∫ cos(3x) dx
   u = 3x → du = 3 dx → dx = du/3
   = (1/3)∫ cos(u) du = (1/3)sin(u) + C = (1/3)sin(3x)+C
        </div>
      </div>

      <div class="panel">
        <h2>Substitution en intégrale définie</h2>
        <p>Si <span class="kbd">I = ∫[a→b] f'(x)·g(f(x)) dx</span> et <span class="kbd">u=f(x)</span>, alors les bornes deviennent :</p>
        <ul>
          <li><span class="kbd">u(a)=f(a)</span></li>
          <li><span class="kbd">u(b)=f(b)</span></li>
        </ul>
      </div>
    `
  },
  {
    id: "ibp",
    title: "3) Intégration par parties (IPP)",
    time: "30–50 min",
    objectives: [
      "Appliquer la formule IPP",
      "Choisir u et v’ intelligemment",
      "Gérer les intégrales définies"
    ],
    content: `
      <div class="panel">
        <h2>Formule</h2>
        <p><span class="kbd">∫ u·v' dx = u·v − ∫ u'·v dx</span></p>
        <p>Astuce de choix : choisir <b>u</b> qui se simplifie en dérivant, et <b>v'</b> qui s’intègre facilement.</p>
      </div>

      <div class="panel">
        <h2>Exemples types BTS</h2>
        <div class="code">
1) ∫ x e^x dx
   u = x → u' = 1
   v' = e^x → v = e^x
   = x e^x − ∫ 1·e^x dx = x e^x − e^x + C = e^x(x−1)+C

2) ∫ x cos(x) dx
   u=x → u'=1
   v'=cos(x) → v=sin(x)
   = x sin(x) − ∫ sin(x) dx = x sin(x) + cos(x) + C
        </div>
      </div>

      <div class="panel">
        <h2>IPP en intégrale définie</h2>
        <p><span class="kbd">∫[a→b] u·v' dx = [u·v]_{a}^{b} − ∫[a→b] u'·v dx</span></p>
      </div>
    `
  },
  {
    id: "frac",
    title: "4) Fractions rationnelles (niveau BTS+)",
    time: "35–60 min",
    objectives: [
      "Décomposer en éléments simples (cas simples)",
      "Intégrer 1/(ax+b), 1/(x-a), et formes usuelles",
      "Savoir reconnaître quand c’est hors-programme"
    ],
    content: `
      <div class="panel">
        <h2>Idée générale</h2>
        <p>On cherche à écrire une fraction rationnelle comme somme de termes plus simples (logarithmes / arctan).</p>
        <p>En BTS, on voit surtout des cas <b>simples</b> : décomposition sur facteurs du 1er degré.</p>
      </div>

      <div class="panel">
        <h2>Cas typique : degré(num) &lt; degré(den)</h2>
        <div class="code">
Ex : ∫ (3x+5)/((x+1)(x+2)) dx
Décomposition : (3x+5)/((x+1)(x+2)) = A/(x+1) + B/(x+2)
3x+5 = A(x+2)+B(x+1) = (A+B)x + (2A+B)
⇒ A+B=3 ; 2A+B=5 → A=2 ; B=1
Donc ∫ = ∫ (2/(x+1) + 1/(x+2)) dx
= 2 ln|x+1| + ln|x+2| + C
        </div>
      </div>

      <div class="panel">
        <h2>À savoir</h2>
        <ul>
          <li>Si le numérateur est de degré ≥ dénominateur : faire d’abord la <b>division euclidienne</b>.</li>
          <li>Si tu tombes sur du (x²+1) au dénominateur : ça mène souvent à <b>arctan</b> (selon ton programme).</li>
        </ul>
      </div>
    `
  },
  {
    id: "def",
    title: "5) Intégrale définie : calcul et sens",
    time: "25–45 min",
    objectives: [
      "Calculer ∫[a→b] f(x) dx avec une primitive",
      "Comprendre aire algébrique",
      "Utiliser symétries simples"
    ],
    content: `
      <div class="panel">
        <h2>Théorème fondamental</h2>
        <p>Si F est une primitive de f, alors :</p>
        <p><span class="kbd">∫[a→b] f(x) dx = F(b) − F(a)</span></p>
      </div>

      <div class="panel">
        <h2>Interprétation</h2>
        <ul>
          <li>Si f(x)≥0 : l’intégrale représente une <b>aire</b> sous la courbe.</li>
          <li>Sinon : c’est une <b>aire algébrique</b> (au-dessus : + ; en dessous : −).</li>
        </ul>
      </div>

      <div class="panel">
        <h2>Symétries utiles</h2>
        <ul>
          <li>f impaire : ∫[-a→a] f(x) dx = 0</li>
          <li>f paire : ∫[-a→a] f(x) dx = 2∫[0→a] f(x) dx</li>
        </ul>
      </div>
    `
  },
  {
    id: "apps",
    title: "6) Applications : aire, valeur moyenne, distance",
    time: "30–50 min",
    objectives: [
      "Calculer une aire entre deux courbes",
      "Valeur moyenne d’une fonction",
      "Lien simple avec vitesse/distance"
    ],
    content: `
      <div class="panel">
        <h2>Aire entre deux courbes</h2>
        <p>Sur [a,b], si f(x) ≥ g(x), alors :</p>
        <p><span class="kbd">A = ∫[a→b] (f(x) − g(x)) dx</span></p>
        <p>Si on ne sait pas qui est au-dessus : étudier le signe de f−g (points d’intersection).</p>
      </div>

      <div class="panel">
        <h2>Valeur moyenne</h2>
        <p>Sur [a,b] :</p>
        <p><span class="kbd">f_moy = (1/(b−a)) ∫[a→b] f(x) dx</span></p>
      </div>

      <div class="panel">
        <h2>Vitesse / distance (idée)</h2>
        <ul>
          <li>Si v(t) est la vitesse : distance = ∫ v(t) dt (selon unités / conventions).</li>
          <li>Attention si v peut être négative : c’est du déplacement algébrique.</li>
        </ul>
      </div>
    `
  },
  {
    id: "method",
    title: "7) Stratégie : choisir la bonne méthode",
    time: "15–25 min",
    objectives: [
      "Savoir identifier rapidement la technique",
      "Avoir une checklist fiable",
      "Rendre une copie propre"
    ],
    content: `
      <div class="panel">
        <h2>Checklist (ultra efficace)</h2>
        <ul>
          <li><b>Forme table ?</b> (puissance, exp, trig, 1/x, 1/(x-a))</li>
          <li><b>Dérivée cachée ?</b> → substitution</li>
          <li><b>Produit ?</b> (x·e^x, x·cos x, ln x·...) → IPP</li>
          <li><b>Fraction rationnelle ?</b> → décomposition / ln</li>
          <li><b>Définie ?</b> → bornes + éventuellement symétries</li>
        </ul>
      </div>

      <div class="panel">
        <h2>Rédaction modèle</h2>
        <div class="code">
On pose u = ...
Alors du = ... dx
Donc I = ∫ ... dx = ∫ ... du
= ... + C

(ou en définie : bornes changées, puis retour à x si besoin)
        </div>
      </div>
    `
  },
];

const examples = [
  {
    title: "Exemple 1 — Substitution",
    tags: ["sub", "puissances"],
    statement: "Calculer I = ∫ 2x (x² + 5)³ dx.",
    solution: `
u = x² + 5  ⇒ du = 2x dx
I = ∫ u³ du = u⁴/4 + C = (x²+5)⁴/4 + C
    `.trim()
  },
  {
    title: "Exemple 2 — IPP",
    tags: ["ibp", "exp"],
    statement: "Calculer I = ∫ x e^{2x} dx.",
    solution: `
Choix : u=x ⇒ u'=1 ; v'=e^{2x} ⇒ v=(1/2)e^{2x}
I = u·v − ∫ u'·v dx
  = x·(1/2)e^{2x} − ∫ (1/2)e^{2x} dx
  = (x/2)e^{2x} − (1/4)e^{2x} + C
  = e^{2x}(2x−1)/4 + C
    `.trim()
  },
  {
    title: "Exemple 3 — Définie",
    tags: ["def", "aires"],
    statement: "Calculer ∫₀¹ (3x² + 2) dx.",
    solution: `
Primitive : F(x)=x³ + 2x
F(1)-F(0) = (1+2) - 0 = 3
    `.trim()
  },
  {
    title: "Exemple 4 — Fractions simples",
    tags: ["frac", "ln"],
    statement: "Calculer ∫ (5x+1)/((x+1)(x+3)) dx.",
    solution: `
(5x+1)/((x+1)(x+3)) = A/(x+1) + B/(x+3)
5x+1 = A(x+3)+B(x+1) = (A+B)x + (3A+B)
A+B=5 ; 3A+B=1 ⇒ A=-2 ; B=7
∫ = ∫ (-2/(x+1) + 7/(x+3)) dx
  = -2 ln|x+1| + 7 ln|x+3| + C
    `.trim()
  },
];

const exercises = [
  {
    id: "exo1",
    title: "Exercice 1 — Table",
    difficulty: "Facile",
    statement: "Donner une primitive de f(x)=6x^5 − 4/x + 3cos(x).",
    type: "free",
    expected: [
      "x^6 - 4 ln|x| + 3 sin(x) + C",
      "x^6 - 4 ln(x) + 3 sin(x) + C"
    ],
    correction: `
∫6x^5 dx = x^6
∫(-4/x) dx = -4 ln|x|
∫3cos(x) dx = 3sin(x)
Donc F(x)=x^6 - 4ln|x| + 3sin(x) + C
    `.trim()
  },
  {
    id: "exo2",
    title: "Exercice 2 — Substitution",
    difficulty: "Moyen",
    statement: "Calculer I = ∫ (4x)/(x²+1) dx.",
    type: "free",
    expected: [
      "2 ln|x^2+1| + C",
      "2 ln(x^2+1) + C"
    ],
    correction: `
u=x²+1 ⇒ du=2x dx
I=∫ (4x)/(x²+1) dx = 2∫ (2x)/(x²+1) dx = 2∫ du/u = 2ln|u|+C
= 2ln|x²+1| + C
    `.trim()
  },
  {
    id: "exo3",
    title: "Exercice 3 — IPP",
    difficulty: "Moyen",
    statement: "Calculer I = ∫ x sin(x) dx.",
    type: "free",
    expected: [
      "-x cos(x) + sin(x) + C",
      "sin(x) - x cos(x) + C"
    ],
    correction: `
u=x ⇒ u'=1 ; v'=sin(x) ⇒ v= -cos(x)
I = u·v − ∫ u'·v dx = x(-cos x) − ∫ (−cos x) dx
= -x cos x + ∫ cos x dx
= -x cos x + sin x + C
    `.trim()
  },
  {
    id: "exo4",
    title: "Exercice 4 — Définie",
    difficulty: "Moyen",
    statement: "Calculer J = ∫₁² (1/x) dx.",
    type: "free",
    expected: [
      "ln 2",
      "ln(2)",
      "ln|2|"
    ],
    correction: `
Primitive : ln|x|
J = ln|2| − ln|1| = ln 2 − 0 = ln 2
    `.trim()
  },
  {
    id: "exo5",
    title: "Exercice 5 — Aire",
    difficulty: "Difficile",
    statement: "Sur [0,2], f(x)=x² et g(x)=x. Calculer l’aire entre f et g.",
    type: "free",
    expected: [
      "2/3",
      "0.6666666667",
      "0,6666666667"
    ],
    correction: `
On compare : f-g = x² - x = x(x-1)
Sur [0,1] : f≤g ; sur [1,2] : f≥g
A = ∫[0→1] (g-f) dx + ∫[1→2] (f-g) dx
= ∫[0→1] (x - x²) dx + ∫[1→2] (x² - x) dx
= [x²/2 - x³/3]0→1 + [x³/3 - x²/2]1→2
= (1/2-1/3) + ((8/3-2) - (1/3-1/2))
= (1/6) + ((2/3) - (-1/6)) = 1/6 + 5/6 = 1
(=> aire totale = 1)
    `.trim()
  }
];

// Quiz (QCM) : correction instantanée + score
const quizBank = [
  {
    id: "q1",
    lesson: "prim",
    q: "Une primitive de f(x)=2x est :",
    choices: ["x² + C", "2x + C", "ln|x| + C", "x³ + C"],
    answer: 0,
    explain: "Car (x²)' = 2x."
  },
  {
    id: "q2",
    lesson: "sub",
    q: "Pour I=∫ 2x(x²+1)^4 dx, la bonne substitution est :",
    choices: ["u=2x", "u=x²+1", "u=(x²+1)^4", "u=x"],
    answer: 1,
    explain: "On voit f'(x)=2x et f(x)=x²+1."
  },
  {
    id: "q3",
    lesson: "ibp",
    q: "La formule IPP est :",
    choices: [
      "∫u'v = uv + C",
      "∫u v' = uv − ∫u'v",
      "∫u v = u'v' + C",
      "∫u v' = ∫u'v"
    ],
    answer: 1,
    explain: "C’est la formule standard : ∫ u·v' = u·v − ∫ u'·v."
  },
  {
    id: "q4",
    lesson: "def",
    q: "Si F est une primitive de f, alors ∫[a→b] f(x) dx =",
    choices: ["F(a)-F(b)", "F(b)-F(a)", "f(b)-f(a)", "0 toujours"],
    answer: 1,
    explain: "Théorème fondamental : F(b) − F(a)."
  },
  {
    id: "q5",
    lesson: "apps",
    q: "La valeur moyenne de f sur [a,b] vaut :",
    choices: [
      "∫[a→b] f(x) dx",
      "(b−a)∫[a→b] f(x) dx",
      "(1/(b−a))∫[a→b] f(x) dx",
      "f(a)+f(b)"
    ],
    answer: 2,
    explain: "Définition : (1/(b−a))∫ f."
  },
  {
    id: "q6",
    lesson: "prim",
    q: "∫ 1/(x−3) dx vaut :",
    choices: ["ln|x−3| + C", "1/(x−3) + C", "ln|x| + C", "e^(x−3) + C"],
    answer: 0,
    explain: "Forme 1/(x−a) → ln|x−a| + C."
  },
  {
    id: "q7",
    lesson: "sub",
    q: "∫ cos(5x) dx vaut :",
    choices: ["sin(5x)+C", "(1/5)sin(5x)+C", "−(1/5)sin(5x)+C", "5sin(x)+C"],
    answer: 1,
    explain: "Le facteur 1/a apparaît : ∫cos(ax)=(1/a)sin(ax)."
  },
];

// ---------- Progression ----------
function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return {
      readLessons: {},
      exoDone: {},
      quizBest: 0,
      quizHistory: []
    };
    return JSON.parse(raw);
  }catch{
    return { readLessons:{}, exoDone:{}, quizBest:0, quizHistory:[] };
  }
}
function saveProgress(p){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
let progress = loadProgress();

// ---------- Theme ----------
function loadTheme(){
  const t = localStorage.getItem(THEME_KEY);
  if(t === "light" || t === "dark") return t;
  return "dark";
}
function setTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem(THEME_KEY, t);
}
setTheme(loadTheme());

// ---------- UI helpers ----------
function toast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(()=> el.classList.remove("show"), 1800);
}
function esc(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function normalizeMathText(s){
  return String(s)
    .trim()
    .replaceAll(" ", "")
    .replaceAll("−","-")
    .replaceAll("ln|","ln|")
    .toLowerCase();
}
function approxEquals(input, expected){
  // Gère :
  // - égalité textuelle normalisée (ln2, 2/3, etc.)
  // - décimal approx (si expected est un nombre)
  const a = normalizeMathText(input).replaceAll(",", ".");
  const b = normalizeMathText(expected).replaceAll(",", ".");

  if(a === b) return true;

  const na = Number(a);
  const nb = Number(b);

  if(Number.isFinite(na) && Number.isFinite(nb)){
    return Math.abs(na - nb) < 1e-6;
  }

  // Gérer des fractions "p/q"
  const fracToNum = (x)=>{
    const m = x.match(/^(-?\d+(\.\d+)?)\/(-?\d+(\.\d+)?)$/);
    if(!m) return null;
    const p = Number(m[1]);
    const q = Number(m[3]);
    if(!Number.isFinite(p) || !Number.isFinite(q) || q===0) return null;
    return p/q;
  };
  const fa = fracToNum(a);
  const fb = fracToNum(b);
  if(fa !== null && fb !== null) return Math.abs(fa - fb) < 1e-6;

  return false;
}

// ---------- Routing ----------
const routes = ["dashboard","lessons","examples","exercises","quiz","progress"];
let route = "dashboard";
let currentLessonId = lessons[0].id;

function setRoute(r){
  if(!routes.includes(r)) r="dashboard";
  route = r;
  $$(".nav-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.route === r);
  });
  render();
}

$$(".nav-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> setRoute(btn.dataset.route));
});
$$("[data-route-jump]").forEach(btn=>{
  btn.addEventListener("click", ()=> setRoute(btn.dataset.routeJump));
});

$("#btnTheme").addEventListener("click", ()=>{
  const cur = loadTheme();
  const next = cur === "dark" ? "light" : "dark";
  setTheme(next);
  toast(`Thème : ${next === "dark" ? "Sombre" : "Clair"}`);
});
$("#btnReset").addEventListener("click", ()=>{
  progress = { readLessons:{}, exoDone:{}, quizBest:0, quizHistory:[] };
  saveProgress(progress);
  toast("Progression réinitialisée.");
  render();
});

$("#year").textContent = String(new Date().getFullYear());

function renderSidebar(){
  const pillList = $("#pillList");
  pillList.innerHTML = curriculum.map(c=>{
    const done = !!progress.readLessons[c.id];
    return `<span class="pill">
      <strong>${esc(c.label)}</strong> · ${esc(c.level)} ${done ? "✅" : ""}
    </span>`;
  }).join("");

  const tipText = $("#tipText");
  if(!tipText.dataset.tipIndex){
    tipText.dataset.tipIndex = String(Math.floor(Math.random()*tips.length));
  }
  tipText.textContent = tips[Number(tipText.dataset.tipIndex)];
}
$("#btnNewTip").addEventListener("click", ()=>{
  $("#tipText").dataset.tipIndex = String(Math.floor(Math.random()*tips.length));
  renderSidebar();
});

// ---------- Views ----------
function viewShell(title, meta, innerHTML){
  return `
    <div class="view-card">
      <div class="h1">
        <h1>${esc(title)}</h1>
        <div class="meta">${esc(meta || "")}</div>
      </div>
      ${innerHTML}
    </div>
  `;
}

function renderDashboard(){
  const readCount = Object.keys(progress.readLessons).length;
  const exoCount = Object.keys(progress.exoDone).length;
  const best = progress.quizBest || 0;

  const blocks = `
    <div class="grid">
      <div class="panel col-6">
        <h2>Bienvenue 👋</h2>
        <p>Ce site est conçu pour des élèves de <b>BTS</b> : cours structurés, exemples guidés, exercices corrigés, quiz corrigés automatiquement.</p>
        <p class="muted">Astuce : fais une leçon → 2 exemples → 1 exercice → un mini quiz.</p>
        <div class="row" style="margin-top:10px">
          <span class="badge"><span class="dot"></span>Leçons lues : <b>${readCount}/${lessons.length}</b></span>
          <span class="badge"><span class="dot"></span>Exercices validés : <b>${exoCount}/${exercises.length}</b></span>
          <span class="badge"><span class="dot"></span>Meilleur score quiz : <b>${best}%</b></span>
        </div>
      </div>

      <div class="panel col-6">
        <h2>Plan de révision (rapide)</h2>
        <ul>
          <li><b>Primitives</b> : table + facteurs</li>
          <li><b>Substitution</b> : dérivée cachée</li>
          <li><b>IPP</b> : produits classiques</li>
          <li><b>Définies</b> : F(b)−F(a) + sens</li>
          <li><b>Applications</b> : aire, moyenne</li>
        </ul>
        <div class="row" style="margin-top:10px">
          <button class="primary" onclick="window.__goLesson()">Commencer la leçon 1</button>
          <button class="ghost" onclick="window.__goQuiz()">Quiz rapide</button>
        </div>
      </div>

      <div class="panel col-12">
        <h2>Formulaire “anti-erreurs”</h2>
        <div class="grid">
          <div class="col-4 panel">
            <h2>Constante</h2>
            <p>En intégrale indéfinie, écris toujours <span class="kbd">+C</span>.</p>
          </div>
          <div class="col-4 panel">
            <h2>Facteur a</h2>
            <p>Pour <span class="kbd">∫ e^{ax} dx</span>, <span class="kbd">∫ cos(ax) dx</span>, <span class="kbd">∫ sin(ax) dx</span> : pense au <span class="kbd">1/a</span>.</p>
          </div>
          <div class="col-4 panel">
            <h2>Contrôle</h2>
            <p>Dérive ton résultat : si tu retombes sur l’intégrande, c’est bon.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  $("#view").innerHTML = viewShell("Accueil", "BTS — Intégration (site complet)", blocks);

  window.__goLesson = ()=> { currentLessonId = lessons[0].id; setRoute("lessons"); };
  window.__goQuiz = ()=> setRoute("quiz");
}

function renderLessons(){
  const menu = lessons.map(l=>{
    const done = !!progress.readLessons[l.id];
    const active = l.id === currentLessonId;
    return `
      <button class="${active ? "primary" : "ghost"}"
              style="justify-content:flex-start"
              onclick="window.__openLesson('${l.id}')">
        ${done ? "✅ " : ""}${esc(l.title)}
      </button>
    `;
  }).join("");

  const lesson = lessons.find(x=>x.id===currentLessonId) || lessons[0];

  const inner = `
    <div class="grid">
      <div class="col-4 panel">
        <h2>Leçons</h2>
        <p>Choisis un chapitre :</p>
        <div class="qa" style="margin-top:10px">${menu}</div>
      </div>

      <div class="col-8">
        <div class="panel">
          <div class="row" style="justify-content:space-between">
            <div>
              <div class="badge"><span class="dot"></span>Durée : <b>${esc(lesson.time)}</b></div>
            </div>
            <div class="row">
              <button class="primary" onclick="window.__markRead('${lesson.id}')">Marquer comme lu</button>
              <button class="ghost" onclick="window.__goExamples('${lesson.id}')">Voir exemples</button>
            </div>
          </div>

          <hr class="sep"/>

          <h2>Objectifs</h2>
          <ul>
            ${lesson.objectives.map(o=>`<li>${esc(o)}</li>`).join("")}
          </ul>
        </div>

        <div style="height:12px"></div>

        ${lesson.content}
      </div>
    </div>
  `;
  $("#view").innerHTML = viewShell("Leçons", "Cours complets + méthodes BTS", inner);

  window.__openLesson = (id)=> { currentLessonId=id; render(); };
  window.__markRead = (id)=>{
    progress.readLessons[id] = true;
    saveProgress(progress);
    toast("Leçon enregistrée ✅");
    renderSidebar();
    render();
  };
  window.__goExamples = (id)=>{
    currentLessonId = id;
    setRoute("examples");
  };
}

function renderExamples(){
  const filtered = examples.filter(ex => ex.tags.includes(currentLessonId));
  const lesson = lessons.find(l=>l.id===currentLessonId);

  const picker = `
    <div class="row">
      ${lessons.map(l=>{
        const active = l.id===currentLessonId;
        return `<button class="${active ? "primary":"ghost"}" onclick="window.__setExLesson('${l.id}')">${esc(l.id.toUpperCase())}</button>`;
      }).join("")}
    </div>
  `;

  const list = (filtered.length ? filtered : examples).map(ex=>{
    return `
      <div class="panel">
        <div class="row" style="justify-content:space-between">
          <h2 style="margin:0">${esc(ex.title)}</h2>
          <span class="badge"><span class="dot"></span>${ex.tags.map(t=>esc(t.toUpperCase())).join(" · ")}</span>
        </div>
        <p><b>Énoncé :</b> ${esc(ex.statement)}</p>
        <div class="code">${esc(ex.solution)}</div>
      </div>
    `;
  }).join("<div style='height:12px'></div>");

  const inner = `
    <div class="panel">
      <h2>Filtrer par chapitre</h2>
      <p>Chapitres (actuel : <b>${esc(lesson?.title || currentLessonId)}</b>)</p>
      ${picker}
    </div>
    <div style="height:12px"></div>
    ${list}
  `;

  $("#view").innerHTML = viewShell("Exemples", "Exemples guidés (méthodes BTS)", inner);
  window.__setExLesson = (id)=> { currentLessonId=id; render(); };
}

function renderExercises(){
  const cards = exercises.map(ex=>{
    const done = !!progress.exoDone[ex.id];
    return `
      <div class="panel">
        <div class="row" style="justify-content:space-between">
          <h2 style="margin:0">${done ? "✅ " : ""}${esc(ex.title)}</h2>
          <span class="badge"><span class="dot"></span>Difficulté : <b>${esc(ex.difficulty)}</b></span>
        </div>
        <p><b>Énoncé :</b> ${esc(ex.statement)}</p>
        <div class="row">
          <input class="input" id="ans_${ex.id}" placeholder="Tape ta réponse (ex: ln 2, 2/3, e^{2x}(2x-1)/4 + C, ...)" />
          <button class="primary" onclick="window.__checkExo('${ex.id}')">Vérifier</button>
          <button class="ghost" onclick="window.__showCorr('${ex.id}')">Voir correction</button>
        </div>
        <div class="feedback" id="fb_${ex.id}"></div>
        <div class="code" id="corr_${ex.id}" style="display:none; margin-top:10px">${esc(ex.correction)}</div>
      </div>
    `;
  }).join("<div style='height:12px'></div>");

  const inner = `
    <div class="panel">
      <h2>Mode d’emploi</h2>
      <ul>
        <li>Écris une réponse <b>lisible</b> (les équivalences exactes sont difficiles à vérifier automatiquement).</li>
        <li>Pour les primitives : inclure <span class="kbd">+ C</span> (ou équivalent).</li>
        <li>Si ta réponse n’est pas reconnue mais semble correcte : compare avec la correction et <b>dérive</b>.</li>
      </ul>
    </div>
    <div style="height:12px"></div>
    ${cards}
  `;
  $("#view").innerHTML = viewShell("Exercices", "Auto-vérification + corrigés détaillés", inner);

  window.__checkExo = (id)=>{
    const ex = exercises.find(e=>e.id===id);
    const input = $(`#ans_${id}`).value;
    const fb = $(`#fb_${id}`);

    const ok = ex.expected.some(exp => approxEquals(input, exp));
    if(ok){
      fb.innerHTML = `<span class="good"><b>Correct ✅</b></span> — Bien joué.`;
      progress.exoDone[id] = true;
      saveProgress(progress);
      renderSidebar();
    }else{
      fb.innerHTML = `<span class="bad"><b>Pas reconnu ❌</b></span> — Regarde la correction et compare la méthode (ou dérive ton résultat).`;
    }
    toast(ok ? "Exercice validé ✅" : "Réessaie 👀");
  };

  window.__showCorr = (id)=>{
    const el = $(`#corr_${id}`);
    el.style.display = el.style.display === "none" ? "block" : "none";
  };
}

function renderQuiz(){
  // Tirage de 6 questions aléatoires
  const chosen = pickQuiz(6);

  const qHtml = chosen.map((q, idx)=>{
    const name = `q_${q.id}`;
    const opts = q.choices.map((c,i)=>{
      return `
        <label class="option">
          <input type="radio" name="${esc(name)}" value="${i}">
          <div>
            <div><b>${esc(c)}</b></div>
          </div>
        </label>
      `;
    }).join("");

    return `
      <div class="question" data-qid="${esc(q.id)}">
        <h4>Q${idx+1}. ${esc(q.q)}</h4>
        <div class="options">${opts}</div>
        <div class="feedback" id="qfb_${esc(q.id)}"></div>
      </div>
    `;
  }).join("");

  const inner = `
    <div class="panel">
      <div class="row" style="justify-content:space-between">
        <div>
          <h2 style="margin:0">Quiz BTS — 6 questions</h2>
          <p>Correction instantanée et score final.</p>
        </div>
        <div class="row">
          <button class="primary" onclick="window.__gradeQuiz()">Corriger</button>
          <button class="ghost" onclick="window.__newQuiz()">Nouveau quiz</button>
        </div>
      </div>
    </div>

    <div style="height:12px"></div>

    <div class="qa">${qHtml}</div>

    <div style="height:12px"></div>

    <div class="panel" id="quizResult" style="display:none"></div>
  `;

  $("#view").innerHTML = viewShell("Quiz", "QCM corrigé automatiquement", inner);

  window.__gradeQuiz = ()=>{
    let score = 0;
    chosen.forEach(q=>{
      const picked = document.querySelector(`input[name="q_${q.id}"]:checked`);
      const fb = $(`#qfb_${q.id}`);
      if(!picked){
        fb.innerHTML = `<span class="bad">Non répondu.</span> <span class="muted">${esc(q.explain)}</span>`;
        return;
      }
      const val = Number(picked.value);
      if(val === q.answer){
        score += 1;
        fb.innerHTML = `<span class="good"><b>Correct ✅</b></span> <span class="muted">${esc(q.explain)}</span>`;
      }else{
        fb.innerHTML = `<span class="bad"><b>Faux ❌</b></span> Réponse : <b>${esc(q.choices[q.answer])}</b> — <span class="muted">${esc(q.explain)}</span>`;
      }
    });

    const pct = Math.round((score / chosen.length) * 100);
    progress.quizBest = Math.max(progress.quizBest || 0, pct);
    progress.quizHistory.unshift({ date: new Date().toISOString(), pct, score, total: chosen.length });
    progress.quizHistory = progress.quizHistory.slice(0, 15);
    saveProgress(progress);
    renderSidebar();

    const res = $("#quizResult");
    res.style.display = "block";
    res.innerHTML = `
      <h2>Résultat</h2>
      <p>Score : <b>${score}/${chosen.length}</b> → <b>${pct}%</b></p>
      <p class="muted">Meilleur score : <b>${progress.quizBest}%</b> · Historique sauvegardé.</p>
      <div class="row">
        <button class="primary" onclick="window.__newQuiz()">Refaire un quiz</button>
        <button class="ghost" onclick="window.__goProgress()">Voir progression</button>
      </div>
    `;
    toast(`Quiz : ${pct}%`);
  };

  window.__newQuiz = ()=> renderQuiz();
  window.__goProgress = ()=> setRoute("progress");
}

function pickQuiz(n){
  // Mélange simple, retourne n questions
  const arr = [...quizBank];
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

function renderProgress(){
  const readCount = Object.keys(progress.readLessons).length;
  const exoCount = Object.keys(progress.exoDone).length;
  const best = progress.quizBest || 0;

  const history = (progress.quizHistory || []).map(h=>{
    const d = new Date(h.date);
    const when = d.toLocaleString("fr-FR");
    return `<li><b>${h.pct}%</b> (${h.score}/${h.total}) — <span class="muted">${esc(when)}</span></li>`;
  }).join("");

  const todoLessons = lessons.filter(l=>!progress.readLessons[l.id]).map(l=>`<li>${esc(l.title)}</li>`).join("");
  const todoExo = exercises.filter(e=>!progress.exoDone[e.id]).map(e=>`<li>${esc(e.title)} <span class="muted">(${esc(e.difficulty)})</span></li>`).join("");

  const inner = `
    <div class="grid">
      <div class="panel col-4">
        <h2>Leçons</h2>
        <p><b>${readCount}/${lessons.length}</b> lues</p>
        <ul>${todoLessons || "<li>Tout est lu ✅</li>"}</ul>
      </div>

      <div class="panel col-4">
        <h2>Exercices</h2>
        <p><b>${exoCount}/${exercises.length}</b> validés</p>
        <ul>${todoExo || "<li>Tout est fait ✅</li>"}</ul>
      </div>

      <div class="panel col-4">
        <h2>Quiz</h2>
        <p>Meilleur score : <b>${best}%</b></p>
        <p class="muted">But BTS : viser 80–100%.</p>
        <button class="primary" onclick="window.__goQuiz()">Lancer un quiz</button>
      </div>

      <div class="panel col-12">
        <h2>Historique des quiz (15 derniers)</h2>
        <ul>${history || "<li class='muted'>Aucun quiz fait pour l’instant.</li>"}</ul>
      </div>
    </div>
  `;

  $("#view").innerHTML = viewShell("Progression", "Suivi local : leçons, exercices, quiz", inner);
  window.__goQuiz = ()=> setRoute("quiz");
}

function render(){
  renderSidebar();
  if(route==="dashboard") return renderDashboard();
  if(route==="lessons") return renderLessons();
  if(route==="examples") return renderExamples();
  if(route==="exercises") return renderExercises();
  if(route==="quiz") return renderQuiz();
  if(route==="progress") return renderProgress();
  renderDashboard();
}

// Start
render();