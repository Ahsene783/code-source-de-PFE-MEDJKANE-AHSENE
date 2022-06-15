import React, {useState} from "react";
import data from './data.json';



function Search() {
  //const [searchTerm, setSearchTerm] =useState("");
  const[title ,setTitle] = React.useState('') ; 
  const[Maxtarif ,setMaxTarif] = React.useState('') ;
  const[Mintarif ,setMinTarif] = React.useState('') ;
  //const[agence ,setAgens] = React.useState('') ;
  const[Periode ,setPeriode] = React.useState('') ;
  //const[destination ,setdestination] = React.useState('') ;
  

  return(
    
      <section className="py-4 container">
            
       <div className="row justify-content-center">  
       
       <div className="col-12 mb-5">
         <div className="mb-3  mx-auto text-center">

          <h1>Choisissez votre offre qui vous convient</h1>
          <br></br>
          <br></br>


          <div class="input-group">
             <span class="input-group-text btn btn-info">Rechrecher</span>
              

           <input id="searchInput" type="text" aria-label="First name" class="form-control" placeholder="Destination..." 
              onChange={(e) => setTitle(e.target.value)}
             />
           <input id="searchInput" type="text" aria-label="First name" class="form-control" placeholder="Max tarif..." 
           onChange={(e) => setMaxTarif(e.target.value)}
          />
           <input id="searchInput" type="text" aria-label="First name" class="form-control" placeholder="Min tarif..." 
           onChange={(e) => setMinTarif(e.target.value)}
          />
          <input id="searchInput" type="text" aria-label="First name" class="form-control" placeholder=" Période..." 
           onChange={(e) => setPeriode(e.target.value)}
          />
          </div>
          
          
          
        
       </div>
     </div>
     

       
         
           {
             data
             .filter((val) => {
               if(title === ""){
                 return val;
               }else if(val.title.toLowerCase().includes(title.toLowerCase())){
                 return val;
               }
               
             })
             .filter((val) => {
              if(Maxtarif === ""){
                return val;
                // how to extract a number from string with react/js
                // intger(val.prix.toLowerCase())<integer(axtarif.toLowerCase())
              }else if(parseFloat(val.prix.replace(/\s/g, '')) <= parseFloat(Maxtarif.replace(/\s/g, '').replaceAll('.',',', '') )){
                return val;
              }
            }).filter((val) => {
              if(Mintarif === ""){

                return val;
              }else if(parseFloat(val.prix.replace(/\s/g, '')) >= parseFloat(Mintarif.replace(/\s/g, '').replaceAll('.',',', '') )){
                return val;
              }
            })
              
            .filter((val) => {
              if(Periode=== ""){
                return val;
              }else if(val.periode.toLowerCase().includes(Periode.toLowerCase())){
                return val;
              }
            
          })
             .map((val) =>{
               return(
                 
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={val.id}>
                 <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={val.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p class="periode">{val.periode}</p>
                        <p className="card-text">{val.prix}</p>
                        <p class="AgenceDeVoyage">{val.agenceDeVoyage}</p>
                        <a href={val.url} class="btn btn-info">Voir l'offre</a>
                    </div>
                </div>
            </div>
               )
             })
           }
         </div>
       </section>   
    
  )
}
export default Search;