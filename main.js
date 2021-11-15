const paGrammInMl = 1.51
const naGrammInMl = 1.51
const tfsCoefficient = 0.34
const molGrammInMl = 1.18
const amGrammInMl = 0.9

const infoIcon = document.getElementById('infoIcon')
const molGrammStartInput = document.getElementById('molGrammStartInput')
const molGrammFinalInput = document.getElementById('molGrammFinalInput')
const molGrammInput = document.getElementById('molGrammInput')
const molMlInput = document.getElementById('molMlInput')
const tfsInput = document.getElementById('tfsInput')
const amGrammStartInput = document.getElementById('amGrammStartInput')
const amGrammFinalInput = document.getElementById('amGrammFinalInput')
const amGrammInput = document.getElementById('amGrammInput')
const amMlInput = document.getElementById('amMlInput')
const paGrammStartInput = document.getElementById('paGrammStartInput')
const paGrammFinalInput = document.getElementById('paGrammFinalInput')
const paGrammInput = document.getElementById('paGrammInput')
const paMlInput = document.getElementById('paMlInput')
const posphateAngInput = document.getElementById('posphateAngInput')
const naGrammStartInput = document.getElementById('naGrammStartInput')
const naGrammFinalInput = document.getElementById('naGrammFinalInput')
const naGrammInput = document.getElementById('naGrammInput')
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

const roundToTwoDecimal = (value) => {
    return Math.round(value * 100) / 100
}

const calculateMolGr = () => {
    if (!molGrammStartInput.value || !molGrammFinalInput.value)
        return molMlInput.value = ""
        let result = molGrammStartInput.value 
            - molGrammFinalInput.value
        
    
        result = roundToTwoDecimal(result)
    
        if (result) molGrammInput.value = result
        else molGrammInput.value = ""
}  

const calculateMolMl = () => {
    if (!molGrammStartInput.value || !molGrammFinalInput.value)
        return molMlInput.value = ""

    let result = molGrammInput.value
        / molGrammInMl

    result = roundToTwoDecimal(result)

    if (result) molMlInput.value = result
    else molMlInput.value = ""
}  

const calculateAmGr = () => {
    if (!amGrammStartInput.value || !amGrammFinalInput.value)
        return amGrammInput.value = ""
        let result = amGrammStartInput.value 
            - amGrammFinalInput.value
        
    
        result = roundToTwoDecimal(result)
    
        if (result) amGrammInput.value = result
        else amGrammInput.value = ""
}  

const calculateAmMl = () => {
    if (!amGrammStartInput.value || !amGrammFinalInput.value)
        return amGrammInput.value = ""

    let result = amGrammInput.value
                 / amGrammInMl

    result = roundToTwoDecimal(result)

    if (result) amMlInput.value = result
    else amMlInput.value = ""
}

const calculatePaGr = () => {
    if (!paGrammStartInput.value || !paGrammFinalInput.value)
        return paGrammInput.value = ""
        let result = paGrammStartInput.value 
            - paGrammFinalInput.value
        
    
        result = roundToTwoDecimal(result)
    
        if (result) paGrammInput.value = result
        else paGrammInput.value = ""
}  

const calculatePaMl = () => {
    if (!paGrammStartInput.value || !paGrammFinalInput.value)
        return paMlInput.value = ""

    let result = paGrammInput.value
                / paGrammInMl

    result = roundToTwoDecimal(result)

    if (result) paMlInput.value = result
    else paMlInput.value = ""
}

const calculateNaGr = () => {
    if (!naGrammStartInput.value || !naGrammFinalInput.value)
        return naGrammInput.value = ""
        let result = naGrammStartInput.value 
            - naGrammFinalInput.value
        
    
        result = roundToTwoDecimal(result)
    
        if (result) naGrammInput.value = result
        else naGrammInput.value = ""
}  

const calculateNaMl = () => {
    if (!naGrammStartInput.value || !naGrammFinalInput.value)
        return naMlInput.value = ""

    let result = naGrammInput.value
                / naGrammInMl

    result = roundToTwoDecimal(result)

    if (result) naMlInput.value = result
    else naMlInput.value = ""
}

const calculateVolume = () => {
    if (!waterMlInput.value || !molMlInput.value || !amMlInput.value
        || !paMlInput.value || !naMlInput.value || !ycStartInput.value)
        return volumeMlInput.value = ""
    let result = parseFloat(waterMlInput.value)
                 + parseFloat(molMlInput.value) 
                 + parseFloat(amMlInput.value)
                 + parseFloat(paMlInput.value)
                 + parseFloat(naMlInput.value)
                 + parseFloat(ycStartInput.value)
                 + 45

    result = roundToTwoDecimal(result)

    if (result) volumeMlInput.value = result
    else volumeMlInput.value = ""
}

const calculateYcIn1Liter = () => {
    if (!ycGrammInput.value || !ycMoistureInput.value)
        return asbLiterGrammInput.value = ""

    let result = (ycGrammInput.value 
                    * (100 - ycMoistureInput.value)) 
                    / 100

    result = roundToTwoDecimal(result)

    if (result) asbLiterGrammInput.value = result
    else asbLiterGrammInput.value = ""
}

const calculateAsbGramm = () => {
    if (!asbLiterGrammInput.value || !volumeMlInput.value)
        return asbGrammInput.value = ""

    let result = (asbLiterGrammInput.value / 1000) * volumeMlInput.value

    result = roundToTwoDecimal(result)

    if (result) asbGrammInput.value = result
    else asbGrammInput.value = ""
}

const calculateAsbDelta = () => {
    if (!asbGrammInput.value || !asbStartGrammInput.value)
        return asbDeltaGrammInput.value = ""

    let result = asbGrammInput.value - asbStartGrammInput.value

    result = roundToTwoDecimal(result)

    if (result) asbDeltaGrammInput.value = result
    else asbDeltaGrammInput.value = ""
}

const calculateNitrogenMg = () => {
    if (!amGrammStartInput.value || !amGrammFinalInput.value 
        || !asbDeltaGrammInput.value)
        return nitrogenInput.value = ""
        
    let result = ((amGrammStartInput.value - amGrammFinalInput.value)
                    * nInAmInput.value
                    / asbDeltaGrammInput.value)
                    / 100  
                    
    result = roundToTwoDecimal(result)

    if (result) nitrogenInput.value = result
    else nitrogenInput.value = ""
}

const calculatePosphateAngPercent = () => {
    if (!paGrammStartInput.value || !paGrammFinalInput.value 
        || !asbDeltaGrammInput.value)
        return posphateAngInput.value = ""

    let result = ((paGrammStartInput.value
                    - paGrammFinalInput.value)
                    * 72.4)/ asbDeltaGrammInput.value

    result = roundToTwoDecimal(result)

    if (result) posphateAngInput.value = result
    else posphateAngInput.value = ""
}

const calculateTfsGramm = () => {
    if (!molGrammStartInput.value || !molGrammFinalInput.value)
        return tfsInput.value = ""

    let result = molMlInput.value * tfsCoefficient
    
    result = roundToTwoDecimal(result)
    
    if (result) tfsInput.value = result
    else tfsInput.value = ""
}

const calculateProductionPercent = () => {
    if (!tfsInput.value || !asbDeltaGrammInput.value)
        return productionInput.value = ""

    let result = asbDeltaGrammInput.value / tfsInput.value * 100

    result = roundToTwoDecimal(result)

    if (result) productionInput.value = result
    else productionInput.value = ""
}

const update = () => {
    calculateMolGr ()
    calculateMolMl()
    calculateAmGr ()
    calculateAmMl()
    calculatePaGr ()
    calculatePaMl()
    calculateNaGr ()
    calculateNaMl()
    calculateVolume()
    calculateYcIn1Liter()
    calculateAsbGramm()
    calculateAsbDelta()
    calculateNitrogenMg()
    calculatePosphateAngPercent()
    calculateTfsGramm()
    calculateProductionPercent()
    calculateUsage()
}

molGrammFinalInput.oninput  =   update
molGrammStartInput.oninput  =  update
amGrammFinalInput.oninput  =  update
amGrammStartInput.oninput  =  update
paGrammFinalInput.oninput  =  update
paGrammStartInput.oninput  = update
naGrammFinalInput.oninput  = update
naGrammStartInput.oninput  = update
ycStartInput.oninput = update
waterMlInput.oninput = update
ycGrammInput.oninput = update
ycMoistureInput.oninput  = update
asbStartGrammInput.oninput = update
nInAmInput.oninput = update

emailjs.init("user_wkk723t3zr2KjPMzoZ38J")

if (localStorage.getItem('firstuse') === null){
    emailjs.send("debug_notifier",
                 "template_8k8q05h", 
                 { action: "first use" })

    localStorage.setItem('firstuse', false)
}

infoIcon.onclick = () => {
    alert ("Application for fermention production calculation\n\n"
            + "Developer: Ilona Petenko\n"
            + "Onsite Consultant: Danyil Somin")
            
    emailjs.send("debug_notifier","template_8k8q05h", 
                 { action: "pressed info" })
}

const calculateUsage = () => {
    if (localStorage.getItem('usages') === null)
        localStorage.setItem('usages', 1)
    else 
        localStorage.setItem('usages', 
            parseInt(localStorage.getItem('usages')) + 1)

    const updates = parseInt(localStorage.getItem('usages'));
    if (parseInt(updates) % 100 == 0) {
        emailjs.send("debug_notifier",
                     "template_8k8q05h", 
                     { action: "Used update for "
                              + updates
                             + " times"  })

        console.log('here')
    }
}
