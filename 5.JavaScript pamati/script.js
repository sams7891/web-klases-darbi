console.log("JS strādā!")

document.querySelector("#btn-variables").addEventListener("click", () => {
    let vards = "Rodrigo"
    const vecums = 18
    const nauda = 0
    document.querySelector("#variables-output").textContent = `${vards} ir ${vecums} gadus vecs.\nUn viņš ir ļoti seksīgs, jo viņam ir ${nauda} eiro`
})

document.querySelector("#btn-age").addEventListener("click", () => {
    const age = document.querySelector("#age-input").value

    const gender = document.querySelector("#gender-select").value

    text = age >= 18 && gender === "m" ? "var" : "Nevar" // ternārais operators
    
    document.querySelector("#age-output").textContent = text
    /*
    var arī šādi
    document.querySelector("#age-output").textContent = age >= 18 ? "var" : "Nevar"
    */
})

document.querySelector("#btn-loop").addEventListener("click", () =>{
    let output = ""

    for(let i = 1; i <= 20; i++)
        output += i + " "
    document.querySelector("#loop-output").innerHTML = output
})

document.querySelector("#btn-loop2").addEventListener("click", () =>{
    let output = ""

    let inputLenght = document.querySelector("#text-lenght").value
    let l = String(inputLenght).length


    let i = 0
    
    do{
        i++
        output += i + " "
    }while(i < l)

    document.querySelector("#loop-output2").innerHTML = output
})

document.querySelector("#btn-array").addEventListener("click", () =>{
    let draugi = ["Rodrigo", "Intars", "Gustavs", "Emīls"]
    draugi.push("Sāmietis") //Ievieto masīva beigās jaunu elementu

    document.querySelector("#array-output").textContent = draugi.join(" /\\ ")
})

// document.querySelector("#btn-array2").addEventListener("click", () =>{
//     let input = document.querySelector("#array-input").value
//     let draugi = ["Rodrigo", "Intars", "Gustavs", "Emīls"]

//     document.querySelector("#array-output").textContent = draugi.join(" ")

//     for(let i = 0; i < draugi.length; i++){
//         if(draugi[i] == input){
//             draugi.splice(i)
//         }
//     }

//     document.querySelector("#array-output2").textContent = draugi.join(" ")
    

// })

document.querySelector("#btn-objects").addEventListener("click", () =>{
    let persona = {
        vards: "Intars", //Īpašības
        vecums: 18,
        sveiciens(){    //Metode
            return `Mani sauc ${this.vards}, man ir ${this.vecums} gadi viņš ir dzimis ${this.dzgads}`
        }
    }
    let dzgads = new Date().getFullYear()

    persona.dzgads = dzgads - persona.vecums

    document.querySelector("#objects-output").textContent = persona.sveiciens()

})

// function aprekinatLaukumu(platums, augstums){
//     return platums * augstums
// }

const aprekinatLaukumu = (platums, augstums) => platums * augstums

document.querySelector("#btn-function").addEventListener("click", () => {
    const w = Number(document.querySelector("#width").value)
    const h = Number(document.querySelector("#height").value)
    const output = document.querySelector("#function-output")

    if(w && h)
        output.textContent = `Aprēķinātais laukums: ${aprekinatLaukumu(w, h)}`
    else
        output.textContent = "Ievadi skaitļus abos laukos"
})

document.querySelector("#btn-color").addEventListener("click", () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16)
    box.textContent = color
    box.style.background = color
    navigator.clipboard.writeText(color)
})

document.querySelector("#btn-countdown").addEventListener("click", () => {
    const countdownOut = document.querySelector("#countdown-output")
    const dateInput = document.querySelector("#date-input").value

    if(!dateInput){
        countdownOut.textContent = "Tulīt pat izvēlies datumu!!!"
        return
    }

    const today = new Date()
    const targetDate = new Date(dateInput)

    const diff = targetDate - today

    if(diff < 0 ){
        countdownOut.textContent = "Šis nav nākotnes datums"
        return
    }

    daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24))

    if(daysLeft === 1){
        countdownOut.textContent = "Atlikusi 1 diena"
    }else{
        countdownOut.textContent = `Atlikušas ${daysLeft} dienas līdz ${targetDate.toLocaleDateString("lv-lv")}`
    }
})

const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const eventOut = document.querySelector("#event-output")

box1.addEventListener("mouseenter", () =>{
    eventOut.textContent = "Kursors ienāca kastē #1"
})

box1.addEventListener("mouseleave", () =>{
    eventOut.textContent = "Kursors izgāja no kastes #1"
})

box2.addEventListener("click", () =>{
    eventOut.textContent = "Uzklikšķināji uz kastes #2"
})

document.addEventListener("keydown", (e) =>{
    eventOut.textContent = `Noespiedi taustiņu ${e.key}` 
})

window.addEventListener("scroll", () =>{
    eventOut.textContent = "Lapa tiek ritināta..."

    let scrollTimer

    scrollTimer = setTimeout(() =>{
        eventOut.textContent = "Lapa vairs netiek ritināta"
    }, 500)
})


//10.

const btnAddTodo = document.querySelector("#btn-add-todo")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

let todos = JSON.parse(localStorage.getItem("todos")) || []

const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const renderTodos = () => {
    todoList.innerHTML = ""
    todos.forEach((todo, index) =>{
        const li = document.createElement("li")
        li.textContent = todo.text
        todoList.appendChild(li)
    })
}

btnAddTodo.addEventListener("click", () => {
    const text = todoInput.value

    if(!text) return

    todos.push({text, done: false})
    renderTodos()
    saveTodos()
    todoInput.value = ""
})

renderTodos()