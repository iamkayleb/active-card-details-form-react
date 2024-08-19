const bulb = document.getElementById('bulb')
// const body = document.getElementsById('body')
// const main = document.querySelector('.main')

bulb.addEventListener('click', () => {
    if (bulb.src.match('bulb-off')) {
        bulb.src = 'bulb-on.jpeg'
        // body.style.backgroundColor = 'black'
    } else {
        bulb.src = 'bulb-off.jpeg'
    }
})

