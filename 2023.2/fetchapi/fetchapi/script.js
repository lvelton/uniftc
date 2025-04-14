let form = document.querySelector('#form');

form.addEventListener('submit', function (event){
    event.preventDefault(); //Para o envio do formulário tradicional
    console.log('Parou aqui');
    const dadosForm = new FormData(form);
    const parametros = new URLSearchParams(dadosForm).toString();
    buscarFilmes(parametros);
})

function buscarFilmes(parametros){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjZhYzk1NTFjMTAxNGNmYzg1MzQ4ZjJhNTI5MWYzMiIsInN1YiI6IjY1MzkyOWNhMGZiMTdmMDBlMTE2M2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJCg_oE2doRNH7VVrJHk1iZ44eNMdXfDkMCb5mPtySM'
        }
      };
      
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
        filmes.forEach(filme => {
          let div = document.createElement('div');
          let titulo = document.createElement('h2');
          let sinopse = document.createElement('p');
          
          titulo.innerText = filme.title;
          sinopse.innerText =filme.overview
          div.appendChild(titulo)
          div.appendChild(sinopse)
        
           
         
          let resultado = document.querySelector('#resultado');
          resultado.appendChild(div)
        });
        
         

      })
        
}