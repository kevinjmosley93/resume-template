const person = {
    name: 'Brandon Johnson', 
    email: 'example@email.com',
    jobTitle: 'Father &  U.S. Navy Veteran'
}

const nameEl = document.getElementById('name')
const jobTitleEl = document.getElementById('jobTitle')

console.log('person', person.name)

window.addEventListener('DOMContentLoaded', e => {
    nameEl.innerText = person.name
    jobTitleEl.innerText = person.jobTitle
})