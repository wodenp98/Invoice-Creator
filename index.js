let washCar = document.getElementById("wash-car")
let mowLawn = document.getElementById("mow-lawn")
let pullWeeds = document.getElementById("pull-weeds")
let spanEl = document.getElementById("span-el")
let spanEl1 = document.getElementById("span-el1")
let totalAmount = document.getElementById("total-amount")
let sendBtn = document.getElementById("send-btn")




washCar.innerHTML = "Wash Car: $10"
mowLawn.innerHTML = "Mow Lawn: $20"
pullWeeds.innerHTML = "Pull Weeds: $30"
sendBtn.innerHTML = "Send invoice"
totalAmount.innerHTML = "$0"


let task = ["car wash:","Mow Lawn:", "Pull Weeds:"]
let total = [10, 20, 30]
let sum = 0

let washCardAdd = true
let mowLawnAdd = true
let pullWeedsdAdd = true





washCar.addEventListener("click", function(){
    if (washCardAdd === true) {
        spanEl.innerHTML = spanEl.innerHTML + `<p>${task[0]}</p>`
        spanEl1.innerHTML = spanEl1.innerHTML + `<p>$${total[0]}</p>`
        sum += 10
        totalAmount.innerHTML = "$" + sum
        washCardAdd = false
    }
})

mowLawn.addEventListener("click", function(){
   if (mowLawnAdd === true) {
        spanEl.innerHTML = spanEl.innerHTML + `<p>${task[1]}</p>`
        spanEl1.innerHTML = spanEl1.innerHTML + `<p>$${total[1]}</p>`
        sum += 20
        totalAmount.innerHTML = "$" + sum
        mowLawnAdd = false
    }
})

pullWeeds.addEventListener("click", function(){
    if (pullWeedsdAdd === true) {
        spanEl.innerHTML = spanEl.innerHTML + `<p>${task[2]}</p>`
        spanEl1.innerHTML = spanEl1.innerHTML + `<p>$${total[2]}</p>`
        sum += 30
        totalAmount.innerHTML = "$" + sum
        pullWeedsdAdd = false
    }
})

sendBtn.addEventListener("click", function(){
    spanEl.innerHTML = ""
    spanEl1.innerHTML = ""
    sum = 0
    totalAmount.innerHTML = "$" + sum;
    washCardAdd = true
    mowLawnAdd = true
    pullWeedsdAdd = true
}) 