let bag = [];



let bodyOutput = `
  <header class="header" id="header"></header>
  <main class="main"><div class="page-wrapper main-wrapper" id="main"></div></main>
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
  <div class="headder-button">My Bag ${bag.length}</div>
  </div>`
document.getElementById('header').innerHTML = headerOutput


let footerOutput = `
  <div class="page-wrapper footer-wrapper">
    <div>anvianvi</div>
    <div>2022</div>
    <div>rsschool</div>
  </div>`
document.getElementById('footer').innerHTML = footerOutput

function renderMain() {
  books.forEach((book) => {
    document.getElementById('main').innerHTML += `
      <div class="book-card" id=${book.id}>
        <img class="book-img" src=${book.imageLink} alt="bookimg">
        <div class="book-description">
          <div class="book-name">${book.title}</div>
          <div class="author">${book.author}</div>
          <div class="publication">${book.publication}</div>
          <div class="prise">$ ${book.price}</div>
          <div class="button-block">
            <a class="add-to-bag-btn" id="${book.id}btn" onclick="addToBag(${book.id})">Add To Bag</a>
          </div>
        </div>
      </div>

    <div class="popup" id="${book.id}popupcard">
      <div class="popup-bg popup-exit"></div>
      <div class="popup-container">
        <div><img class="popup-img" src=${book.imageLink} alt="bookimg"></div>
        <div class="popup-text">
          <div class="popup-heading">${book.title}</div>
          <div class="popupdescription">${book.description}</div>
        </div>
        <div class="popup-close popup-exit"></div>
      </div>
    </div>`;
  })
}
renderMain()

const bookCard = document.querySelectorAll('.book-card');

bookCard.forEach(function (book) {
  book.addEventListener("click", function (event) {
    if (!event.target.classList.contains('add-to-bag-btn')) {
      event.preventDefault();
      const popUp = document.getElementById(`${book.id}popupcard`)
      popUp.classList.add('open')
      const exits = document.querySelectorAll(".popup-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          popUp.classList.remove("open");
        });
      })
    }
  })
})


function addToBag(id) {
  if (bag.some((item) => item.id == id)) {

  } else {
    const item = books.find((book) => book.id == id);
    bag.push(item)
    console.log(bag.length)
  }

}
