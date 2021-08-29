const loadBuddies =  () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data =>{
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(buddy of buddies){
        const name = document.createElement('p');
        name.innerText = `Name: ${buddy.name.first} ${buddy.name.last}
        Gender: ${buddy.gender}
        Email: ${buddy.email}`;
        buddiesDiv.appendChild(name);
    }
}