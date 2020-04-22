const clickCounter = document.getElementById('clickCounter')

if (isNaN(parseInt(localStorage.count))) {

} else {
    clickCounter.textContent = parseInt(localStorage.count)
}

document.addEventListener('click', function() {
    if (isNaN(parseInt(localStorage.count))) {
        let count = 0
        count++
        clickCounter.textContent = count
        localStorage.setItem('count', count)
    } else {
        let count = parseInt(localStorage.getItem('count'))
        console.log(localStorage.getItem('count'))
        count++
        clickCounter.textContent = count
        localStorage.setItem('count', count)
    }
})