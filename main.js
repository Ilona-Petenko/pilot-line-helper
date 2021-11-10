
const molGrammInMl = 1.18

const molGrammInput = document.getElementById('molGrammInput')
const molMlInput = document.getElementById('molMlInput')

const roundToTwoDecimal = (value) => {
    return Math.round(value * 100) / 100
}

molGrammInput.oninput = () => {
    const result = molGrammInput.value / molGrammInMl
    molMlInput.value = roundToTwoDecimal(result)
}

molMlInput.oninput = () => {
    const result = molMlInput.value * molGrammInMl
    molGrammInput.value = roundToTwoDecimal(result)
}
 
const amGrammInMl = 0.9

const amGrammInput = document.getElementById('amGrammInput')
const amMlInput = document.getElementById('amMlInput')

amGrammInput.oninput = () => {
    const result = amGrammInput.value / amGrammInMl
    amMlInput.value = roundToTwoDecimal(result)
}

amMlInput.oninput = () => {
    const result = amMlInput.value * amGrammInMl
    amGrammInput.value = roundToTwoDecimal(result)
}

const paGrammInMl = 1.5

const paGrammInput = document.getElementById('paGrammInput')
const paMlInput = document.getElementById('paMlInput')

paGrammInput.oninput = () => {
    const result = paGrammInput.value / paGrammInMl
    paMlInput.value = roundToTwoDecimal(result)
}

paMlInput.oninput = () => {
    const result = paMlInput.value * paGrammInMl
    paGrammInput.value = roundToTwoDecimal(result)
}

const naGrammInMl = 1.5

const naGrammInput = document.getElementById('naGrammInput')
const naMlInput = document.getElementById('naMlInput')

naGrammInput.oninput = () => {
    const result = naGrammInput.value / naGrammInMl
    naMlInput.value = roundToTwoDecimal(result)
}

naMlInput.oninput = () => {
    const result = naMlInput.value * naGrammInMl
    naGrammInput.value = roundToTwoDecimal(result)
}

const ycGrammInput = document.getElementById('ycGrammInput')
const ycMoistureInput = document.getElementById('ycMoistureInput')
const asbGrammInput = document.getElementById('asbGrammInput')

ycGrammInput.oninput  =  () => {
    if (ycMoistureInput.value > 0) {
        const result = (ycGrammInput.value * (100 - ycMoistureInput.value)) / 100
        asbGrammInput.value = roundToTwoDecimal(result)
    }
}

ycMoistureInput.oninput  =  () => {
    if (ycGrammInput.value > 0) {
        const result = (ycGrammInput.value * (100 - ycMoistureInput.value)) / 100
        asbGrammInput.value = roundToTwoDecimal(result)
    }
}
