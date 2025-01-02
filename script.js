let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let values = ['🥸','🥰','🥳','🥲','❤️']
function getrandomvalues(){
    return values[parseInt(Math.random()*5)]
}
let animationid
function updateanimation(speed){
    if(animationid)clearInterval(animationid)
    animationid = setInterval(() => { //set interval returns an id with some random values
        value1.innerText = getrandomvalues()
        value2.innerText = getrandomvalues()
        value3.innerText = getrandomvalues()
    },1000/speed)
}

let inpSpeed = document.getElementById('inpSpeed')
inpSpeed.onchange = function(ev){
    // document.documentElement this is :root of css
    document.documentElement.style.setProperty('--speed', ev.target.value)
    updateanimation(ev.target.value)
}