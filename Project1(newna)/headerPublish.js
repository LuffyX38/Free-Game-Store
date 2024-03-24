

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "afd34a4d04msh62ecb5df5527e64p195ca4jsnd8a8c190277e",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
  .then((response) => response.json())
  .then((response) => {
    let btn = '';
    console.log(response.length)
   let nw = [];
    for(let index = 0; index < response.length; index++) {
         nw[index] = response[index].developer;

        
         btn += `
        <a href="newGames.html?${nw[index].replaceAll(" ", "")}" role="button" class="p-2 flex-fill btn btn-outline-success">${response[index].publisher} </a>
        `;
    }
    
    document.getElementById("getButtons").innerHTML = btn;


  })
  .catch((err) => console.error(err));
