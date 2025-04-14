let form = document.querySelector('#form');

form.addEventListener('submit', function (event){
    event.preventDefault(); //Para o envio do formulário tradicional
    const dadosForm = new FormData(form);
})

function buscarFilmes(parametros){
   
      fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-BR&page=1&'+parametros, options)
      .then(response=>{
        if(response.ok){
          console.log("Deu bom!");
        }else{
          console.log("Deu ruim!");
        }
        return response.json();
        
      })
      .then(data=>{
          let filmes = data.results
          filme = filmes[1]
          console.log(filmes[0])
         
            let div = document.createElement('div');
            let titulo = document.createElement('h2');
            titulo.innerText = filme.original_title;
             console.log(titulo)
             let resultado = document.querySelector('#resultado');
             resultado.appendChild(titulo)

             //let sinopse = document.createElement('p');
             //sinopse.innerText =filme.overview
            //resultado.appendChild(sinopse)

          
      })
        
}