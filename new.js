allMovies=document.getElementById('allMovies')

fetch('home.json')
.then(reponse=>reponse.json())
.then(e=>{
    console.log(e)
    let moviesData = e ;

    localStorage.setItem('moviesData',JSON.stringify(moviesData))
    e.forEach(e => {
        console.log(e)
            allMovies.innerHTML+=`
            <div class="card me-2 py-2 col-lg-2 col-md-3 col-10 mb-2" onclick=redirect('${e.path}') >
               <div class="p-1">
                    <img src="${e.poster}" style="width:100%;height:250px">
                </div>
                <div>
                    <h2 class="mt-1" >${e.moviename}</h2> 
                     <h3>${e.genre}</h3>
                    <h4>${e.Director}</h4>
                    <h5>${e.Country}</h5>
                    <h6>${e.Release}</h6>
                </div>
            </div>`
    });
         
    
  }) 

  

  
function redirect(path) {
    window.location.href = path
}


let search=document.getElementById('submit');
        let searchInput=document.getElementById('searchInput');
        let dPart=document.getElementById('display-part')
        search.addEventListener('click',(e)=>{
            allMovies.innerHTML=''
            e.preventDefault();
            if(localStorage.getItem('moviesData'))
            {
              let data = JSON.parse(localStorage.getItem('moviesData'))
              data.forEach(e => {
                      console.log(searchInput.value)
                      if((e.moviename).toLowerCase() == (searchInput.value).toLowerCase()){
                          allMovies.innerHTML+=`<div class="card me-2 py-2 col-lg-2 col-md-3 col-10 mb-2" onclick=redirect('${e.path}') >
                          <div class="p-1">
                               <img src="${e.poster}" style="width:100%;height:250px">
                           </div>
                           <div>
                               <h2 class="mt-1" >${e.moviename}</h2> 
                               <h3>${e.genre}</h3>
                               <h4>${e.Director}</h4>
                               <h5>${e.Country}</h5>
                               <h6>${e.Release}</h6>
                           </div>
                       </div>`
                          
                      }
                      
                  });
              } 
              else{
                        allMovies.innerHTML='No data available';
                      }
            })
            
            
            // fetch('https://query.data.world/s/qvbeb322p6wutf6zr2bl3erhhagsx5?dws=00000')
// .then(reponse=>reponse.json())
// .then(e=>{

//     for (let  i = e.length/4; i < (e.length/4)+25; i++) {
//          console.log(e[i])
        
//             console.log(e[i])
//             allMovies.innerHTML+=`
//             <div class="card me-2 py-2 col-lg-2 col-md-3 col-10 mb-2" >
//                <div class="p-1">
//                     <img src="${e[i].poster}" style="width:100%;height:250px">
//                 </div>
//                 <div>
//                     <h5 class="mt-1" >${e[i].name}</h5> 
//                     <h6>${e[i].genre}</h6>
//                 </div>
//             </div>`
//     }
//   }) 