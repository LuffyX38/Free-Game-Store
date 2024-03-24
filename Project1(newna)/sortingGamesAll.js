


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afd34a4d04msh62ecb5df5527e64p195ca4jsnd8a8c190277e',
		'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
	}
};

fetch("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  .then((response) => response.json())
  .then((response) => { 
     let card_data = "";
     let l = [];

     for (let i = 0; i < 5; i++) {
       l.push(response[i]);
     }
     console.log(l);
     card_data += `
          <div id="carouselExample" class="carousel slide rounded-bottom" style="background-color: rgb(5, 5, 55)">
          <div class="carousel-inner">
      `;
     for (let index = 0; index < l.length; index++) {
       if (index == 0) {
         card_data += `
              <div class="carousel-item active">
              <a href = "newInside.html?${l[index].id}">
              <img class="mx-auto d-block"src="${l[index].image}" alt="no img">
              </a>
              </div>
              `;
       }

       if (index !== 0) {
         card_data += `
              <div class="carousel-item">
              <a href = "newInside.html?${l[index].id}">
              <img class="mx-auto d-block"src="${l[index].image}" alt="no img">
              </a>
              
              </div>
          `;
       }
     }

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




    let newInfo = "";
    const pagination_element = document.getElementById("pagination");
    let current_page = 1;
    let rows = 20;

    $("btnId").click(function () {
      console.log(id);
    });

    function DisplayList(items, newInfo, rows_per_page, page) {
      console.log(items.length);
      page--;
      let start = rows_per_page * page;
      let end = start + rows_per_page;
      let paginatedItems = items.slice(start, end);
      for (let i = 0; i < paginatedItems.length; i++) {
        newInfo += `
        <div class="col-sm-6 col-md-4 col-lg-3">
        <a class = "text-decoration-none" href="newInside.html?${paginatedItems[i].id}">
          <div class="card">
            <img
              src="${paginatedItems[i].image}"
              class="card-img-top"
              
              alt="..."/>
            <div class="card-body">
              
             <div class="card-text col-45 text-truncate">
              ${paginatedItems[i].worth}
             </div>
             

             <h5 class="card-title col-20 text-truncate text-center" id="pageTitle">${paginatedItems[i].title}</h5>
            </div>
          </div>
          </a>
        </div>
      `;
      }

        document.getElementById("slideLoad").innerHTML = card_data;
        document.getElementById("cardsInfo").innerHTML = newInfo;
      
    }

    function SetupPagination(items, wrapper, rows_per_page) {
      wrapper.innerHTML = "";
      let page_count = Math.ceil(items.length / rows_per_page);
      for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
      }
    }
    function PaginationButton(page, items) {
      let button = document.createElement("button");
      button.className = "btn btn-outline-info";
      button.innerText = page;
      if (current_page == page) button.classList.add("active");
      button.addEventListener("click", function () {
        current_page = page;
        DisplayList(items, newInfo, rows, current_page);
      });
      return button;
    }
    // console.log(document.getElementsByTagName("a"));
    DisplayList(response, newInfo, rows, current_page);
    SetupPagination(response, pagination_element, rows);
  })
  .catch((err) => console.error(err));