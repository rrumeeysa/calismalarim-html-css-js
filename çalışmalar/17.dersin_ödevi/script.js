document.addEventListener('DOMContentLoaded', function () {
 
    makeApiRequest();
  });
  
  async function makeApiRequest() {
    const div = document.getElementById('container');
    const loader = document.getElementById('loader');
  
    // Loader'ı göster
    loader.style.display = 'block';
  
    const request = await fetch("https://randomuser.me/api/?results=10");
    const response = await request.json();
  
    console.log("apiden gelenler", response);
  
    response.results.forEach(user => {
      const element = `
        <div>
          <h3>${user.name.first}</h3>
          <div class="avatar-container">
            <img src='${user.picture.large}'>
          </div>
        </div>
      `;
      div.innerHTML += element;
    });
  
    // Loader'ı gizle
    loader.style.display = 'none';
  }
  