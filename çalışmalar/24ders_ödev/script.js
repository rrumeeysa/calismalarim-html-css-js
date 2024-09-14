async function APİ_request() {
    // divi çekelim
    const div = document.querySelector('.container')
    const request = await fetch ('https://randomuser.me/api/?results=10')
    const response = await request.json()

    console.log("APİDEN GELEN VERİLER:", response)

    response.results.forEach(user => {
        
        const element = `
            <div>
                <h3>${user.name.first}</h3>

                <div class='avatar-container'>
                    <img src='${user.picture.large}'>
                </div>

            </div>
        `
        // divin içerisine yazıdr.
        div.innerHTML += element
    });
} 









