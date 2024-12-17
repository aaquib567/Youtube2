fetch('data.json')
  .then(response => response.json())  // Automatically parse the JSON data
  .then(data => {
    // Display Name
    document.getElementById('name').innerText = `Name: ${data.name}`;
    
    // Display Age
    document.getElementById('age').innerText = `Age: ${data.age}`;
    
    // Display City
    document.getElementById('city').innerText = `City: ${data.city}`;
    
    // Display Hobbies
    document.getElementById('hobbies').innerText = `Hobbies: ${data.hobbies.join(', ')}`;
    
    // Display Job
    document.getElementById('job').innerText = `Job: ${data.job}`;
    
    // Display Skills
    document.getElementById('skills').innerText = `Skills: ${data.skills.join(', ')}`;
    
    // Display Address
    const address = `Street: ${data.address.street}, City: ${data.address.city}, Zip: ${data.address.zip}`;
    document.getElementById('address').innerText = `Address: ${address}`;
    
    // Display Friends
    let friendsHTML = "Friends: ";
    data.friends.forEach(friend => {
      friendsHTML += `<br> - ${friend.name} (Age: ${friend.age})`;
    });
    document.getElementById('friends').innerHTML = friendsHTML;
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
