setInterval(()=>{
    let checkStatus = window.navigator.onLine

    let container = document.querySelector(".container")
    let status = document.querySelector(".container .img")
    let statusimg = document.querySelector(".container .img img")
    let texth4 = document.querySelector(".container .text h4")
    let textp = document.querySelector(".container .text p")
    
    function getResult(){
        if (checkStatus) {
            statusimg.src = "./src/online.png"
            statusimg.style.filter = "invert(1)"
            statusimg.style.width = "110%"
            statusimg.style.opacity = "0.4"
            status.style.backgroundColor = " rgba(153, 255, 0, 0.651)"
            container.style.backgroundColor = "aliceblue"
            container.style.borderLeft = "4px solid rgb(0, 255, 0)"
            texth4.innerText = "You're Online Now"
            textp.innerText = "Internet is Connected"
        }else{
            statusimg.src = "./src/offline.png"
            statusimg.style.filter = "invert(0)"
            statusimg.style.width = "60%"
            statusimg.style.opacity = "0.4"
            status.style.backgroundColor = "rgb(0 0 0 / 30%)"
            container.style.backgroundColor = "#9ca4ab"
            container.style.borderLeft = "4px solid rgb(255, 0, 0)"
            texth4.innerText = "You're Offline Now"
            textp.innerText = "Internet is Disconnected"
        }
    }
    getResult()
},1000)