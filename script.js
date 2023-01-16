const quiz_Data = [
    {
        question: "Quel était le premier langage de programmation numérique de l’histoire?",
        a: "Short Code",
        b: "Assembly ",
        c: "Fortran",
        d: "Algol",
        correct: "a"
    },
    {
        question : "En quelle année a été créé le langage C++?",
        a: "1979",
        b: "1983",
        c: "1988",
        d: "1989",
        correct: "b"
    },
    {
        question : "Lequel des quatre langages suivants est le plus ancien?",
        a: "Java",
        b: "Visual Basic",
        c: "JavaScript",
        d: " C#",
        correct: "b"
    },
    {
        question : " Lequel des langages de programmation suivants n’existe pas?",
        a: "Rawdon",
        b: "Brainfuck",
        c: "Eiffel",
        d: "Coq",
        correct: "a"
    },
    {
        question : "Quel est le langage de programmation le plus utilisé par les ingénieurs logiciels et développeurs?",
        a: " C++",
        b: "Ruby",
        c: "Python",
        d: "Java",
        correct: "c"  
    },
    {
        question : "Quelle est la différence majeure entre le langage C et le langage C++?",
        a: "Le C++ ne supporte pas les variables booléennes",
        b: "Le C ne supporte pas les variables de type 'char' ",
        c: "Le C ne supporte pas les classes et les objets",
        d: "Le C++ ne supporte pas les boucles logiques",
        correct: "c"  
    },
    {
        question : "HTML est considéré comme ______ ?",
        a: "  Langage POO",
        b: "Langage de programmation",
        c: " Langage de balisage",
        d: "Langage de haut niveau",
        correct: "c"  
    },
    {
        question : " HTML utilise des ______?",
        a: " Balises définis par l’utilisateur",
        b: " Balises prédéfinis",
        c: "Balises uniquement pour les liens",
        d: " Balises fixes définis par le langage",
        correct: "d"  
    },
    {
        question : "Lequel des éléments suivants n’est pas un exemple de navigateur?",
        a: "Microsoft Bing",
        b: " Opéra",
        c: " Mozilla Firefox",
        d: " Netscape",
        correct: "a"  
    },
    {
        question : "HTML a été proposé pour la première fois l’année ___.?",
        a: " 1800",
        b: "1990",
        c: "2000",
        d: "1995",
        correct: "b"  
    },
    {
        question : "Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?",
        a: "name",
        b: "text",
        c: "class",
        d: "id",
        correct: "d"  
    },
    {
        question : "La balise HTML qui spécifie un style CSS intégré dans un élément est appelée ____?",
        a: "Design",
        b: "Style",
        c: "Modify",
        d: "Define",
        correct: "b"  
    },
    {
        question : "Quelle est la sortie pour 'python' [-3]?",
        a: "t",
        b: "o",
        c: "h",
        d: "erreur",
        correct: "c"  
    },
    {
        question : "Quelle fonction insère un objet à un index donné dans une liste?",
        a: "list.index(obj)",
        b: "list.insert(index, obj)",
        c: "list.pop(obj=list[-1])",
        d: "list.remove(obj)",
        correct: "b"  
    },
    {
        question : "Quelle sera la sortie du code suivant?:[ (a,b) for a in range(3) for b in range(a) ]",
        a: "[(1,0),(2,0),(2,1)]",
        b: " [(1,0),(2,1),(2,1)]",
        c: "[(1,0),(2,1),(3,2)]  ",
        d: " [(0,0),(1,1),(2,2)]",
        correct: "a"  
    },
]

const questionEl = document.getElementById('questions')
const answerEl = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById("b_text")
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('button')

let currentQuiz  = 0;
let score = 0
loadQuiz();

function loadQuiz(){
deleteCheck()
const currentQuizData = quiz_Data[currentQuiz]
if(currentQuizData){
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}
}

function checkAnswer(){
    let answer = undefined
    answerEl.forEach(el =>{
        if(el.checked){
            answer =  el.id;
        }  
    } );
         return answer
}

function deleteCheck(){
    answerEl.forEach(el =>{
        el.checked = false;   
    } )
}

button.addEventListener("click", ()=>{
    const answer = checkAnswer()
    if(answer){
        
        if(answer === quiz_Data[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quiz_Data.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>your score ${score} / ${quiz_Data.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
    
}) 