const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "afd34a4d04msh62ecb5df5527e64p195ca4jsnd8a8c190277e",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

fetch("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  .then((response) => response.json())
  .then((response) => {
    let newInfo = " ";
    $("btnId").click(function () {
      console.log(id);
    });
   
    response.map((values) => {
        
      
      if (values.worth === "N/A") {
         newInfo += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <a class = "text-decoration-none" href="newInside.html?${values.id}">
          <div class="card">
            <img
              src="${values.image}"
              class="card-img-top"
              alt="..."/>
            <div class="card-body">
              
             <div class="card-text col-45 text-truncate">
              ${values.worth}
             </div>
              
             <h5 class="card-title col-20 text-truncate text-center">${values.title}</h5>
            </div>
          </div>
          </a>
        </div>
      `;
      }
    });
   if (newInfo.length < 1) {
     newInfo += `
              <h1 class="text-start text-light-emphasis">No data found!!!!!!!!!!!!</h1>`;
     document.getElementById("cardsInfo").innerHTML = newInfo;
   } else {
     console.log(newInfo.length);
     document.getElementById("cardsInfo").innerHTML = newInfo;
   }
  })
  .catch((err) => console.error(err));
