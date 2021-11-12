const paGrammInMl = 1.5
const naGrammInMl = 1.5
const tfsCoefficientInput = 0.34
const molGrammInMl = 1.18
const amGrammInMl = 0.9

const infoIcon = document.getElementById('infoIcon')
const molGrammStartInput = document.getElementById('molGrammStartInput')
const molGrammFinalInput = document.getElementById('molGrammFinalInput')
const molMlInput = document.getElementById('molMlInput')
const tfsInput = document.getElementById('tfsInput')
const amGrammStartInput = document.getElementById('amGrammStartInput')
const amGrammFinalInput = document.getElementById('amGrammFinalInput')
const amMlInput = document.getElementById('amMlInput')
const paGrammStartInput = document.getElementById('paGrammStartInput')
const paGrammFinalInput = document.getElementById('paGrammFinalInput')
const paMlInput = document.getElementById('paMlInput')
const posphateAngInput = document.getElementById('posphateAngInput')
const naGrammStartInput = document.getElementById('naGrammStartInput')
const naGrammFinalInput = document.getElementById('naGrammFinalInput')
const naMlInput = document.getElementById('naMlInput')
const ycGrammInput = document.getElementById('ycGrammInput')
const ycMoistureInput = document.getElementById('ycMoistureInput')
const asbLiterGrammInput = document.getElementById('asbLiterGrammInput')
const asbStartGrammInput = document.getElementById('asbStartGrammInput')
const waterMlInput = document.getElementById('waterMlInput')
const asbDeltaGrammInput = document.getElementById('asbDeltaGrammInput')
const asbGrammInput = document.getElementById('asbGrammInput')
const volumeMlInput = document.getElementById('volumeMlInput')
const productionInput = document.getElementById('productionInput')
const nitrogenInput = document.getElementById('nitrogenInput')
const nInAmInput = document.getElementById('nInAmInput')
const ycStartInput = document.getElementById('ycStartInput')

infoIcon.onclick = () => {
    alert ("Application for fermention production calculation\n"
            + "Developer: Ilona Petenko\n"
            + "Onsite Consultant: Danyil Somin")
}

const roundToTwoDecimal = (value) => {
    return Math.round(value * 100) / 100
}

const calculatePosphateAngInput = () => {
    const result = ((paGrammStartInput.value
                    - paGrammFinalInput.value)
                    * 72.4)/ asbDeltaGrammInput.value
    posphateAngInput.value = roundToTwoDecimal(result)
}

const calculateProductionInput = () => {
    const result =  (tfsInput.value
                    / asbDeltaGrammInput.value)
                    * 100
    productionInput.value = roundToTwoDecimal(result)
}

molGrammFinalInput.oninput  =  () => {
    if (molGrammStartInput.value) {
        let result = (molGrammStartInput.value 
                        - molGrammFinalInput.value)
                        / molGrammInMl

        molMlInput.value = roundToTwoDecimal(result)

        let molDelta = molGrammStartInput.value - 
                    molGrammFinalInput.value
        
        result = molDelta * tfsCoefficientInput
        tfsInput.value = roundToTwoDecimal(result)

        calculateProductionInput ()
    }
}

molGrammStartInput.oninput  =  () => {
    if (molGrammFinalInput.value) {
        const result = (molGrammStartInput.value 
                        - molGrammFinalInput.value)
                        / molGrammInMl

        molMlInput.value = roundToTwoDecimal(result)
    }
} 

amGrammFinalInput.oninput  =  () => {
    if (amGrammStartInput.value) {
        const result = (amGrammStartInput.value 
                        - amGrammFinalInput.value)
                        / amGrammInMl

        amMlInput.value = roundToTwoDecimal(result)
    }
}
amGrammStartInput.oninput  =  () => {
    if (amGrammFinalInput.value) {
        const result = (amGrammStartInput.value 
                        - amGrammFinalInput.value)
                        / amGrammInMl

        amMlInput.value = roundToTwoDecimal(result)
    }
}

paGrammFinalInput.oninput  =  () => {
    if (paGrammStartInput.value) {
        const result = (paGrammStartInput.value
                        - paGrammFinalInput.value)
                        / paGrammInMl

        paMlInput.value = roundToTwoDecimal(result)
    }
}

paGrammStartInput.oninput  =  () => {
    if (paGrammFinalInput.value) {
        const result = (paGrammStartInput.value
                        - paGrammFinalInput.value)
                        / paGrammInMl

        paMlInput.value = roundToTwoDecimal(result)
    }
}

naGrammFinalInput.oninput  =  () => {
    if (naGrammStartInput.value) {
        const result = (naGrammStartInput.value 
                        - naGrammFinalInput.value)
                        / naGrammInMl

        naMlInput.value = roundToTwoDecimal(result)
    }
}

naGrammStartInput.oninput  =  () => {
    if (naGrammStartInput.value) {
        const result = (naGrammStartInput.value 
                        - naGrammFinalInput.value)
                        / naGrammInMl

        naMlInput.value = roundToTwoDecimal(result)
    }
}

ycMoistureInput.oninput  =  () => {
    if (ycGrammInput.value) {
        const result = (ycGrammInput.value 
                        * (100 - ycMoistureInput.value)) 
                        / 100

        asbLiterGrammInput.value = roundToTwoDecimal(result)
    }
}

ycStartInput.oninput = () => {
    const result = waterMlInput.value 
                 + molMlInput.value 
                 + amMlInput.value
                 + paMlInput.value
                 + naMlInput.value
                 + ycStartInput.value
                 + 36

    volumeMlInput.value = roundToTwoDecimal(result)
}

asbStartGrammInput.oninput = () => {
    let result = asbLiterGrammInput.value 
                 * (volumeMlInput.value / 1000)
    asbGrammInput.value = roundToTwoDecimal(result)

    result = asbGrammInput.value - asbStartGrammInput.value
    asbDeltaGrammInput.value = roundToTwoDecimal(result)

    calculatePosphateAngInput()
    calculateProductionInput ()
}

nInAmInput.oninput = () => {
    if (asbDeltaGrammInput.value) {
    const result = ((amGrammStartInput.value 
                    - amGrammFinalInput.value)
                    * asbDeltaGrammInput.value)
                    / 100    

    nitrogenInput.value = roundToTwoDecimal(result)
    }
}


const update = () => {
    
}