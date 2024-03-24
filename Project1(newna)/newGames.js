window.onload = function () {
  let loc = window.location.href.split("?")[1]; //location from publishers(newHead) page
  let newLoc = window.location.href;

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
      //console.log(loc);
      const pagination_element = document.getElementById("pagination");
      let newInfo = "";
      let current_page = 1;
      let rows = 20;
      let nw = [];
      let cm = [];
      let c = [];
      $("btnId").click(function () {
        console.log(id);
      });
      function DisplayList(items, newInfo, rows_per_page, page) {
        page--;
        let start = rows_per_page * page;
        let end = start + rows_per_page;
        let paginatedItems = items.slice(start, end);

        for (let i = 0; i < paginatedItems.length; i++) {
          newInfo += `
        
        <div class="col-sm-6 col-md-4 col-lg-3">
         <a class = "text-decoration-none" href="newGamesInsider.html?${paginatedItems[i].id}">
          <div class="card">
         
            <img
              src="${paginatedItems[i].thumbnail}"
              class="card-img-top"
              alt="..."/>
            <div class="card-body">
              
             <div class="card-text col-45 text-truncate">
              ${paginatedItems[i].short_description}
             </div>
              
             <h5 class="card-title col-10 text-truncate text-center">${paginatedItems[i].title}</h5>
            </div>
           
          </div>
           </a>
        </div>
      `;
        }
        function searchFun() {
          let tr = document.getElementById("cardsInfo");
        }
         if (newInfo.length < 1) {
           newInfo += `
              <h1 class="text-start text-light-emphasis">No data found!!!!!!!!!!!!</h1>`;
           document.getElementById("cardsInfo").innerHTML = newInfo;
         } else {
           document.getElementById("cardsInfo").innerHTML = newInfo;
         }
        //document.getElementById("cardsInfo").innerHTML = newInfo;
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
      response.map((data) => {
        nw = data.developer;
        if (nw.replaceAll(" ", "") == loc) {
          cm = data;
          c.push(cm);
          console.log("1");
          //console.log(c)
        } else if (!newLoc.includes(loc)) {
          cm = data;
          c.push(data);
          console.log("2");
        }
      });
    

      //console.log(cm)
      DisplayList(c, newInfo, rows, current_page);
      SetupPagination(c, pagination_element, rows);

      // response.map((values) => {
      //   newInfo += `
      //     <div class="col-sm-6 col-md-4 col-lg-3">
      //       <div class="card">
      //         <img
      //           src="${values.thumbnail}"
      //           class="card-img-top"
      //           alt="..."/>
      //         <div class="card-body">

      //          <div class="card-text col-45 text-truncate">
      //           ${values.short_description}
      //          </div>

      //           <a href="${values.game_url}" class="btn btn-primary"><h5 class="card-title">${values.title}</h5></a>
      //         </div>
      //       </div>
      //     </div>
      //   `;
      // })
    })
    .catch((err) => console.error(err));
};

//var baseUrl ="https://free-to-play-games-database.p.rapidapi.com/api/games";
// var gamesData = [];
// let pageSize = 20;
// let currentPage = 1;

// async function renderCards() {
//   var gameCards = "";
//   console.log(gameCards);
//   gameCards.filter((row, index) => {
//     let start = (currentPage - 1) * pageSize;
//     let end = currentPage  * pageSize;
//     if(index >= start && index < end) return true;
//   }).map((values) => {

//   })
// }
// renderCards();

// async function newFunc(){
//    const response = await fetch(baseUrl);
//   const games = await response.json();
//   gamesData = games;
//   console.log(gamesData);
//   }
// newFunc();
