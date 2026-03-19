/* Load Data */

let properties = JSON.parse(localStorage.getItem("properties")) || []
let tenants = JSON.parse(localStorage.getItem("tenants")) || []
let payments = JSON.parse(localStorage.getItem("payments")) || []

/* Save Data */

function saveData() {
    localStorage.setItem("properties", JSON.stringify(properties))
    localStorage.setItem("tenants", JSON.stringify(tenants))
    localStorage.setItem("payments", JSON.stringify(payments))
}

/* Add Property */

function addProperty() {
    const name = document.getElementById("propertyName").value
    const rent = document.getElementById("rentAmount").value

    properties.push({ name, rent })
    saveData()
    displayProperties()
}

/* Display Properties */

function displayProperties() {
    const list = document.getElementById("propertyList")
    list.innerHTML = ""

    properties.forEach(p => {
        const li = document.createElement("li")
        li.textContent = `${p.name} - ₹${p.rent}`
        list.appendChild(li)
    })
}

/* Add Tenant */

function addTenant() {
    const name = document.getElementById("tenantName").value
    const property = document.getElementById("tenantProperty").value

    tenants.push({ name, property })
    saveData()
    displayTenants()
}

/* Display Tenants */

function displayTenants() {
    const list = document.getElementById("tenantList")
    list.innerHTML = ""

    tenants.forEach(t => {
        const li = document.createElement("li")
        li.textContent = `${t.name} - ${t.property}`
        list.appendChild(li)
    })
}

/* Add Payment */

function addPayment() {
    const tenant = document.getElementById("paymentTenant").value
    const amount = document.getElementById("paymentAmount").value

    payments.push({ tenant, amount })
    saveData()
    displayPayments()
}

/* Display Payments */

function displayPayments() {
    const list = document.getElementById("paymentList")
    list.innerHTML = ""

    payments.forEach(p => {
        const li = document.createElement("li")
        li.textContent = `${p.tenant} paid ₹${p.amount}`
        list.appendChild(li)
    })
}

/* Initial Load */

displayProperties()
displayTenants()
displayPayments()