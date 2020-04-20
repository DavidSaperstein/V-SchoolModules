const form = document.travelForm

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const diets = []
    for (i=0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diets.push(form.diet[i].value)
        }
    }
    alert(`First Name: ${form.firstName.value} \n Last Name: ${form.lastName.value} \n Age: ${form.age.value} \n Gender: ${form.gender.value} \n Destination: ${form.destination.value} \n Diet: ${diets}`)
})
