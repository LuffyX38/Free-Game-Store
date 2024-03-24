
let cv = parseInt(window.location.search.slice(1));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afd34a4d04msh62ecb5df5527e64p195ca4jsnd8a8c190277e',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${cv}`, options)
	.then(response => response.json())
	.then(response => {
        let card_data = '';
             card_data += `
                <h1 class="text-start text-light-emphasis">${response.title}</h1>
                <h4 class="text-start text-light-emphasis">${response.short_description}</h4>
            `;
           
           
            if(response.screenshots.length == 0){
               card_data += `<img class="img-fluid container" src="${response.thumbnail}" alt="no img">`;
               console.log('0')
            }else{
                 card_data += `
                <div id="carouselExample" class="carousel slide" style="background-color: rgb(5, 5, 55)">
                <div class="carousel-inner">
            `;
            console.log('not 0')
            for (let index = 0; index < response.screenshots.length; index++) {
                
                 if(response.screenshots.indexOf(response.screenshots[index])==0){
                    
                    card_data += `
                    <div class="carousel-item active">
                    <img class="img-fluid container" src="${response.screenshots[index].image}" alt="no img">
                    </div>
                    `;
             
                 }
                 if (response.screenshots.indexOf(response.screenshots[index])!==0){
                    
                   card_data += `
                    <div class="carousel-item">
                    <img class="img-fluid container"src="${response.screenshots[index].image}" alt="no img">
                    </div>
                `;
                 }}
                 card_data += `
             </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            `;
        }

            
        
            card_data += `
             <h3 class="text-center text-light-emphasis d-grid gap-2 col-6 mx-auto gy-3 my-3">Game overview</h3>
            <h4 class="text-start text-light-emphasis">${response.description}</h4>
            <div class="d-grid gap-2 col-6 mx-auto gy-3 my-3">
            <a href="${response.game_url}"  class="btn btn-lg btn-outline-info
            gy-3 my-3">GET YOUR FREE GAME</a>
            </div class="gy-3 my-3">
             <div class="p-3 mb-2 bg-dark text-white rounded-end-4">
            <h3 class="text-start text-light-emphasis ">status: ${response.status}</h3>
            <h3 class="text-start text-light-emphasis ">Release date: ${response.release_date}</h3>
            <h3 class="text-start text-light-emphasis ">Platforms: ${response.platform}</h3>
            <h3 class="text-start text-light-emphasis ">Category: ${response.genre}</h3>
            <h3 class="text-start text-light-emphasis ">Publisher: ${response.publisher}</h3>
            </div>
            </div class="gy-3 my-3">`
            
    
            if (response.minimum_system_requirements !== undefined){
              card_data += `
             <div class="p-3 mb-2 bg-dark text-white rounded-end-4">
            <h3 class="text-start text-light-emphasis ">Minimum system requirements :</h4>
            <h4 class="text-start text-light-emphasis ">Operating system: ${response.minimum_system_requirements.os}</h4>
            <h4 class="text-start text-light-emphasis ">Processor: ${response.minimum_system_requirements.processor}</h4>
            <h4 class="text-start text-light-emphasis ">Memory: ${response.minimum_system_requirements.memory}</h4>
            <h4 class="text-start text-light-emphasis ">Graphics: ${response.minimum_system_requirements.graphics}</h4>
            <h4 class="text-start text-light-emphasis ">Storage: ${response.minimum_system_requirements.storage}</h4>
            </div>
            `;}
            card_data += `
              <br />
            <br />
            `;
               

            
       
         document.getElementById("fullCardDesc").innerHTML = card_data;


       

    })
  


	

    