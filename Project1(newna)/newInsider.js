
let cv = parseInt(window.location.search.slice(1));

console.log(cv)

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "afd34a4d04msh62ecb5df5527e64p195ca4jsnd8a8c190277e",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

fetch(`https://gamerpower.p.rapidapi.com/api/giveaway?id=${cv}`, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    
   

    let newInfo = '';
    newInfo += `
    <h1 class="text-start text-light-emphasis">${response.title}</h1>
    <h4 class="text-start text-light-emphasis">${response.description}</h4>
    <img src="${response.image}" class="img-fluid w-100  gy-3 my-3" alt="...">
    <h2 class="text-center text-light-emphasis">Giveaway instructions</h2>
    <h4 class="text-start text-light-emphasis">${response.instructions}</h4>
    
    <div class="d-grid gap-2 col-6 mx-auto gy-3 my-3">
    <a href="${response.open_giveaway_url}"  class="btn btn-lg btn-outline-info">GET YOUR FREE GAME</a>
    </div>
    <h3 class="text-start text-light-emphasis text-center">Worth: ${response.worth}</h3>
    <div class="p-3 mb-2 bg-dark text-white rounded-end-4">
     
    <h3 class="text-start text-light-emphasis ">Giveaway status: ${response.status}</h3>
    <h3 class="text-start text-light-emphasis ">Published date: ${response.published_date}</h3>
    <h3 class="text-start text-light-emphasis ">Platforms: ${response.platforms}</h3>
    <h3 class="text-start text-light-emphasis ">Users: ${response.users}</h3>
    <h3 class="text-start text-light-emphasis ">End-date: ${response.end_date}</h3>
    </div>
    <div>
    <br />
    <br />
    </div>
  
    `;
    
    document.getElementById("fullCardDesc").innerHTML = newInfo;
  })
  .catch((err) => console.error(err));


