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

molGrammFinalInput.oninput  =  () => {
    if (molGrammStartInput.value > 0) {
        let result = (molGrammStartInput.value 
                        - molGrammFinalInput.value)
                        / molGrammInMl

        molMlInput.value = roundToTwoDecimal(result)

        let molDelta = molGrammStartInput.value - 
                    molGrammFinalInput.value
        
        result = molDelta * tfsCoefficientInput
        tfsInput.value = roundToTwoDecimal(result)
    }
}

molGrammStartInput.oninput  =  () => {
    if (molGrammFinalInput.value > 0) {
        const result = (molGrammStartInput.value 
                        - molGrammFinalInput.value)
                        / molGrammInMl

        molMlInput.value = roundToTwoDecimal(result)
    }
} 
/*
molMlInput.oninput = () => {
    const result = molMlInput.value * molGrammInMl
    molGrammInput.value = roundToTwoDecimal(result)
}
*/
amGrammFinalInput.oninput  =  () => {
    if (amGrammStartInput.value > 0) {
        const result = (amGrammStartInput.value 
                        - amGrammFinalInput.value)
                        / amGrammInMl

        amMlInput.value = roundToTwoDecimal(result)
    }
}
amGrammStartInput.oninput  =  () => {
    if (amGrammFinalInput.value > 0) {
        const result = (amGrammStartInput.value 
                        - amGrammFinalInput.value)
                        / amGrammInMl

        amMlInput.value = roundToTwoDecimal(result)
    }
}
/*
amMlInput.oninput = () => {
    const result = amMlInput.value * amGrammInMl
    amGrammInput.value = roundToTwoDecimal(result)
}
*/


paGrammFinalInput.oninput  =  () => {
    if (paGrammStartInput.value > 0) {
        const result = (paGrammStartInput.value
                        - paGrammFinalInput.value)
                        / paGrammInMl

        paMlInput.value = roundToTwoDecimal(result)
    }
}

paGrammStartInput.oninput  =  () => {
    if (paGrammFinalInput.value > 0) {
        const result = (paGrammStartInput.value
                        - paGrammFinalInput.value)
                        / paGrammInMl

        paMlInput.value = roundToTwoDecimal(result)
    }
}

/*
molGrammFinalInput.oninput  =  () => {
    if (molGrammStartInput.value > 0) {
        let result = (molGrammStartInput.value 
                        - molGrammFinalInput.value)
                        / molGrammInMl

        molMlInput.value = roundToTwoDecimal(result)

        let molDelta = molGrammStartInput.value - 
                    molGrammFinalInput.value
        
        result = molDelta * tfsCoefficientInput
        tfsInput.value = roundToTwoDecimal(result)
    }
}
paMlInput.oninput = () => {
    const result = paMlInput.value * paGrammInMl
    paGrammInput.value = roundToTwoDecimal(result)
}
*/
naGrammFinalInput.oninput  =  () => {
    if (naGrammStartInput.value > 0) {
        const result = (naGrammStartInput.value 
                        - naGrammFinalInput.value)
                        / naGrammInMl

        naMlInput.value = roundToTwoDecimal(result)
    }
}

naGrammStartInput.oninput  =  () => {
    if (naGrammStartInput.value > 0) {
        const result = (naGrammStartInput.value 
                        - naGrammFinalInput.value)
                        / naGrammInMl

        naMlInput.value = roundToTwoDecimal(result)
    }
}
/*
naMlInput.oninput = () => {
    const result = naMlInput.value * naGrammInMl
    naGrammInput.value = roundToTwoDecimal(result)
}
*/
ycGrammInput.oninput  =  () => {
    if (ycMoistureInput.value > 0) {
        const result = (ycGrammInput.value
                        * (100 - ycMoistureInput.value))
                        / 100

        asbLiterGrammInput.value = roundToTwoDecimal(result)
        
    }
}

ycMoistureInput.oninput  =  () => {
    if (ycGrammInput.value > 0) {
        const result = (ycGrammInput.value 
                        * (100 - ycMoistureInput.value)) 
                        / 100

        asbLiterGrammInput.value = roundToTwoDecimal(result)
    }
}

waterMlInput.oninput = () => {
    const result = parseFloat(waterMlInput.value) 
                 + parseFloat(molMlInput.value) 
                 + parseFloat(amMlInput.value)
                 + parseFloat(paMlInput.value)
                 + parseFloat(naMlInput.value) 
                 + 36

    volumeMlInput.value = roundToTwoDecimal(result)
}

asbStartGrammInput.oninput = () => {
    let result = asbLiterGrammInput.value 
                 * (volumeMlInput.value / 1000)
    asbGrammInput.value = roundToTwoDecimal(result)

    calculatePosphateAngInput()

    result = asbGrammInput.value - asbStartGrammInput.value
    asbDeltaGrammInput.value = roundToTwoDecimal(result)

    calculatePosphateAngInput()
}
