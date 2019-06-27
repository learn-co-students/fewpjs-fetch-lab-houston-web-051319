function fetchBooks(url) {
  let output = fetch(url)
  let input = output
  // console.log(output)
  input.then(function(res){
    res.json().then(function(val){
      renderBooks(val)
    })  
  })
  return output
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks('https://anapioficeandfire.com/api/books').then(r => console.log(r))
})
