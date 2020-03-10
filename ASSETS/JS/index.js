const getbookdata =() => {
   const url = 'https://www.googleapis.com/books/v1/volumes?q=FRASE'
    return fetch(url, {method: 'GET'})
    .then((response) => {
     return response.json()
     // console.log (response, 'response, mi primer valor que voy a retornar')
    })
    .catch((error) => console.log(error))
    }
    
    
    const render = (response) => {
      const listcard = document.getElementById('listcard') 

      const card = response.items.map((item) =>{
         return `
       <div class="card" style="width: 18rem;">
        <img src=${item.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="portada">
        <div class="card-body">
          <h5 class="card-title">${item.volumeInfo.title}</h5>
          <p class="card-text">${item.volumeInfo.language}</p>
          <a href=${item.accessInfo.webReaderLink} class="btn btn-primary">Ver libro</a>
        </div>
      </div>
      `; 
      })
     
      listcard.innerHTML = card;
    }
    // mando llamar a una función
    getbookdata()
    // response, es la respuesta del valor anterior pero con el formato que necesitamos
    .then ((response) => {
    // console.log (response, 'valor obtendio con el formato que necesitamos')
    render(response)
    })