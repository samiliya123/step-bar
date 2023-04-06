const nextEl = document.getElementById("next")
const prevEl = document.getElementById("prev")
const stepsEl = document.querySelectorAll(".step")

let currentCheck = 1

nextEl.addEventListener('click', ()=>{
    currentCheck++
    if (currentCheck > stepsEl.length){
        currentCheck = stepsEl.length
    }
    updateStepProgress()
});

prevEl.addEventListener('click', ()=>{
    currentCheck--
    if (currentCheck > stepsEl.length){
        currentCheck = stepsEl.length
    }
    updateStepProgress()
})

const updateStepProgress = ()=>{
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentCheck){
            stepEl.classList.add("check");
            stepEl.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx}</small>
            `
        }else{
            stepEl.classList.remove("check");
            stepEl.innerHTML = `<i class="fas fa-times"></i>`;
        }
    })
}