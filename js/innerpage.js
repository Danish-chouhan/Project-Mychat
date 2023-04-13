// time
const time = new Date()
const option = { hour: "numeric", minute: "numeric" }
document.querySelector(".timeing").textContent = time.toLocaleTimeString("en-US", option)