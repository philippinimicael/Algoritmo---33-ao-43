// ----------------------- EXERCÍCIO 033 ----------------------- //

let btn033 = document.getElementById('btn033')
let div033 = document.getElementById('resultado033')

function calcular033() {
    let valor033 = parseInt(document.getElementById('valor033').value)
    let raizQuadrada = Math.sqrt(valor033)

    div033.innerHTML = `O número inserido foi: ${valor033} <br> E sua raiz quadrada é: ${raizQuadrada.toFixed(2)}`

}

btn033.addEventListener('click', calcular033)

// ----------------------- EXERCÍCIO 033 ----------------------- // 

// ----------------------- EXERCÍCIO 034 ----------------------- // 

let btn034 = document.getElementById('btn034')
let div034 = document.getElementById('resultado034')

function calcular034() {
    let valor034 = parseInt(document.getElementById('valor034').value)
    let elevado2 = Math.pow(valor034, 2)
    let elevado3 = Math.pow(valor034, 3)
    let elevado4 = Math.pow(valor034, 4)
    let elevado5 = Math.pow(valor034, 5)

    div034.innerHTML = `O número inserido foi: ${valor034} <br>
                        O número elevado a 2 é: ${elevado2} <br>
                        O número elevado a 3 é: ${elevado3} <br>
                        O número elevado a 4 é: ${elevado4} <br>
                        O número elevado a 5 é: ${elevado5} <br>
    `
}

btn034.addEventListener('click', calcular034)

// ----------------------- EXERCÍCIO 034 ----------------------- // 

// ----------------------- EXERCÍCIO 035 ----------------------- // 

let btn035 = document.getElementById('btn035')
let div035 = document.getElementById('resultado035')

function calcular035() {
    let valor035 = parseInt(document.getElementById('valor035').value)
    let raizQuadrada = Math.sqrt(valor035)
    let raizCubica = Math.cbrt(valor035)

    div035.innerHTML = `O número inserido foi: ${valor035} <br>
                        Sua raiz quadrada é: ${raizQuadrada.toFixed(2)} <br>
                        Sua raiz ao cubo é: ${raizCubica.toFixed(2)}`
}

btn035.addEventListener('click', calcular035)       

// ----------------------- EXERCÍCIO 035 ----------------------- // 

// ----------------------- EXERCÍCIO 036 ----------------------- // 

let btn036 = document.getElementById('btn036')
let div036 = document.getElementById('resultado036')

function calcular036() {
    let peso1 = parseInt(document.getElementById('valor036').value)
    let peso2 = parseInt(document.getElementById('valor136').value)
    let peso3 = parseInt(document.getElementById('valor236').value)
    let peso4 = parseInt(document.getElementById('valor336').value)
    let passo1 = ((peso1 * 1) + (peso2 * 2) + (peso3 * 3) + (peso4 * 4))
    let passo2 = (passo1 / 4)
    div036.innerHTML = `A média ponderada é: ${passo2}`
}

btn036.addEventListener('click', calcular036)

// ----------------------- EXERCÍCIO 036 ----------------------- // 

// ----------------------- EXERCÍCIO 037 ----------------------- // 

let btn037 = document.getElementById('btn037')
let div037 = document.getElementById('resultado037')

function calcular037() {
    let raio = parseInt(document.getElementById('valor037').value)
    let area = (Math.PI * Math.sqrt(raio))
    let perimetro = (2 * Math.PI * raio)
    div037.innerHTML = `A área da circunferência é: ${area.toFixed(2)} <br> 
                        O perímetro da circunferência é: ${perimetro.toFixed(2)}`
}

btn037.addEventListener('click', calcular037)

// ----------------------- EXERCÍCIO 037 ----------------------- // 

// ----------------------- EXERCÍCIO 038 ----------------------- // 

let btn038 = document.getElementById('btn038')
let div038 = document.getElementById('resultado038')

function calcular038() {
    let ladoA = parseInt(document.getElementById('valor038').value)
    let ladoB = parseInt(document.getElementById('valor138').value)
    let ladoC = parseInt(document.getElementById('valor238').value)
    div038.innerHTML = `O volume do paralelepípedo é: ${ladoA * ladoB * ladoC}`
}

btn038.addEventListener('click', calcular038)

// ----------------------- EXERCÍCIO 038 ----------------------- // 

// ----------------------- EXERCÍCIO 039 ----------------------- // 

let btn039 = document.getElementById('btn039')
let div039 = document.getElementById('resultado039')

function calcular039() {
    let b = parseInt(document.getElementById('valor039').value)
    let B = parseInt(document.getElementById('valor139').value)
    let h = parseInt(document.getElementById('valor239').value)

    div039.innerHTML = `A Área do Trapézio é: ${((b + B) * h) / 2}`
}

btn039.addEventListener('click', calcular039)

// ----------------------- EXERCÍCIO 039 ----------------------- // 

// ----------------------- EXERCÍCIO 040 ----------------------- // 

let btn040 = document.getElementById('btn040')
let div040 = document.getElementById('resultado040')

function calcular040(){
    base = parseInt(document.getElementById('valor040').value)
    altura = parseInt(document.getElementById('valor140').value)

    div040.innerHTML = `A Área do triângulo é: ${(base * altura) / 2}`


}

btn040.addEventListener('click', calcular040)

// ----------------------- EXERCÍCIO 040 ----------------------- // 

// ----------------------- EXERCÍCIO 041 ----------------------- // 

let btn041 = document.getElementById('btn041')
let div041 = document.getElementById('resultado041')

function calcular041() {
    let raio = parseInt(document.getElementById('valor041').value)
    
    div041.innerHTML = `A Área da circunferência é: ${Math.PI * Math.sqrt(raio)}`

}

btn041.addEventListener('click', calcular041)

// ----------------------- EXERCÍCIO 041 ----------------------- // 

// ----------------------- EXERCÍCIO 042 ----------------------- // 

let btn042 = document.getElementById('btn042')
let div042 = document.getElementById('resultado042')

function calcular042() {
    let area = parseInt(document.getElementById('valor042').value)
    let altura = parseInt(document.getElementById('valor142').value)

    div042.innerHTML = `O volume do cilindro é: ${area * altura}`
}

btn042.addEventListener('click', calcular042)

// ----------------------- EXERCÍCIO 042 ----------------------- // 

// ----------------------- EXERCÍCIO 043 ----------------------- // 

let btn043 = document.getElementById('btn043')
let div043 = document.getElementById('resultado043')

function calcular043() {
    let raio = parseInt(document.getElementById('valor043').value)
    let area = (4 * Math.PI * Math.sqrt(raio))
    let volume = ((4 * Math.PI * Math.cbrt(raio)) / 3)

    div043.innerHTML = `A área da esfera é: ${area.toFixed(2)} <br>
                        O volume da esfera é: ${volume.toFixed(2)}`

}

btn043.addEventListener('click', calcular043)

// ----------------------- EXERCÍCIO 042 ----------------------- // 

// ----------------------       FIM       ---------------------- // 