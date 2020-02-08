employees = []

function Employee (name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function() {
    return "Name: "+ this.name + ", Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status
}

const david = new Employee("David", "Full-Stack Developer", "$75,000")
console.log(david.printEmployeeForm())
const meghan = new Employee("Meghan", "Full-Stack Developer", "$80,000")
console.log(meghan.printEmployeeForm())
const donaven = new Employee("Donaven", "Marketing Manager", "$85,000")
donaven.status = "Part Time"
console.log(donaven.printEmployeeForm())

employees.push(david)
employees.push(meghan)
employees.push(donaven)

console.log(employees)


