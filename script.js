(function fetchData() {

  let bodyOutput = `
  <header class="header" id="header"></header>
  <main class="main" id="main"></main>
  <footer class="footer" id="footer"></footer>
  `
  document.getElementById('body').innerHTML = bodyOutput

  let headerOutput = `<div class="page-wrapper header-wrapper">
  <a href="#" class="logo"><img src="./icons/apple-touch-icon.png" alt=""></a>
  <nav>
    <ul class="header-nav">
      <li>menu 1</li>
      <li>menu 2</li>
      <li>menu 3</li>
    </ul>
  </nav>
  <div class="headder-button">some button</div>
  </div>`
  document.getElementById('header').innerHTML = headerOutput

  let footerOutput = `
  <div class="page-wrapper footer-wrapper">
    <div>anvianvi</div>
    <div>2022</div>
    <div>rsschool</div>
  </div>`
  document.getElementById('footer').innerHTML = footerOutput

  fetch('../books.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<div class="page-wrapper main-wrapper">'
      data.forEach(function (item) {
        output += `
      <div class="book-card" id=${item.id}>
        <img class="book-img" src=${item.imageLink} alt="bookimg">
        <div class="book-description">
          <div class="book-name">${item.title}</div>
          <div class="author">${item.author}</div>
          <div class="publication">${item.publication}</div>
          <div class="prise">${item.price}$</div>
          <div class="button-block">
            <button>show more</button>
            <button class="add-to-bag-button">add to bag</button>
          </div>
      </div>
    </div>`
      })
      output += `</div>`
      document.getElementById('main').innerHTML = output
    })

    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('main').innerHTML = 'Error Loading Data'
    })
})();




