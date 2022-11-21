alert("hello, I will be very grateful for early comments so that I can correct as much as possible. However, I did not calculate the time to complete the order form, so I will ask for a final assessment as late as possible. THANKS")

let bag = JSON.parse(localStorage.getItem("BAG")) || [];


let bodyOutput = `
  <header class="header" id="header"></header>
  <main class="main"><div class="page-wrapper main-wrapper" id="main"></div></main>
  <footer class="footer" id="footer"></footer>
  `
document.getElementById('body').innerHTML = bodyOutput

function renderBag() {
  let bagOutput = `
<div class="bag-wrapper" id="bag-wrapper">
  <div class="bag-heading">
    <div>Item</div>
    <div>Unit price</div>
    <div>Units</div>
  </div>
  <div class="bag-books-list" id="bag-books-list"></div>
  <div class="bag-botom-elements">
    <div class="bag-subtotal bag-botom-element" id="bag-subtotal"></div>
    <div class="bag-chechout bag-botom-element"  onclick="openCheckOut()">Process to checkout</div>
  </div>
</div>
`
  document.getElementById('main').innerHTML += bagOutput
}
renderBag()

function renderHeaderOutput() {
  let totalAmountOfBooks = 0

  bag.forEach((book) => {
    totalAmountOfBooks += book.numberOfUnits;
  })

  let headerOutput = `
  <div class="page-wrapper header-wrapper">
    <a href="#" class="logo"><img src="./icons/apple-touch-icon.png" alt=""></a>

    <div class="headder-button"  onclick="toggleBag()">My Bag ${totalAmountOfBooks}</div>
  </div>
  `
  document.getElementById('header').innerHTML = headerOutput
}
renderHeaderOutput()


function toggleBag() {
  document.getElementById("bag-wrapper").classList.add("bag-wrapper-open");
  document.getElementById("popup-bg").classList.add("open")
  document.getElementById("body").classList.add("body-hide-scroll")
}


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
      <div class="popup-bg popup-exit" id="popup-bg" onclick="popupToggle()"></div>
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

function popupToggle() {
  document.getElementById('popup-bg').classList.toggle("open")
  document.getElementById("bag-wrapper").classList.remove("bag-wrapper-open");
  document.getElementById("checkout-wrapper").classList.remove("checkout-wrapper-open");
  document.getElementById("body").classList.remove("body-hide-scroll")
}
const bookCard = document.querySelectorAll('.book-card');

bookCard.forEach(function (book) {
  book.addEventListener("click", function (event) {
    if (!event.target.classList.contains('add-to-bag-btn')) {
      event.preventDefault();
      const popUp = document.getElementById(`${book.id}popupcard`)
      popUp.classList.add('open')
      document.getElementById("body").classList.add("body-hide-scroll")
      const exits = document.querySelectorAll(".popup-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          popUp.classList.remove("open");
          document.getElementById("body").classList.remove("body-hide-scroll")

        });
      })
    }
  })
})


function addToBag(id) {
  if (bag.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id)
  } else {
    const item = books.find((book) => book.id === id);
    bag.push({
      ...item,
      numberOfUnits: 1,
    })
  }
  updateBag();
  renderHeaderOutput()
}

updateBag()

function updateBag() {
  renderBagItems()
  renderSubTotal()

  localStorage.setItem("BAG", JSON.stringify(bag))
}
function renderSubTotal() {
  let totalPrice = 0
  let totalAmountOfBooks = 0

  bag.forEach((book) => {
    totalPrice += book.price * book.numberOfUnits;
    totalAmountOfBooks += book.numberOfUnits;

  })
  document.getElementById("bag-subtotal").innerHTML = `Subtotal (${totalAmountOfBooks} items): $ ${totalPrice.toFixed(2)}`
}

function renderBagItems() {
  document.getElementById("bag-books-list").innerHTML = "";
  bag.forEach((book) => {
    document.getElementById("bag-books-list").innerHTML += `
    <div class="bag-books">
    <div class="bag-book-remove" onclick="removeBookFromBag(${book.id})"></div>
      <div class="in-bag-book">
        <img class="in-bag-book-img" src=${book.imageLink} alt="bookimg">
        <div class="in-bag-book-name"><em>${book.title}</em><br>By: ${book.author} </div>
      </div>
      <div class="book-price"><small>$</small>${book.price}</div>
      <div class="units">
        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${book.id})"></div>
        <div class="number">${book.numberOfUnits}</div>
        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${book.id})"></div>
      </div>
    </div>
    `
  })
}

function changeNumberOfUnits(action, id) {
  bag = bag.map((book) => {
    let numberOfUnits = book.numberOfUnits;

    if (book.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < book.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...book,
      numberOfUnits,
    }
  })
  updateBag()
  renderHeaderOutput()
}

function removeBookFromBag(id) {
  bag = bag.filter((book) => book.id !== id)
  updateBag()
  renderHeaderOutput()
}

function checkoutOutput() {
  let checkoutOutput = `
  <div class="checkout-wrapper" id="checkout-wrapper">
    <div class="checkout-content">

    <form class="order-form">

      <label for="form-name">Name</label>
      <input type="text" class="order-name" id="form-name" onkeyup="formState()" required pattern="^[A-Za-z]{4,}">
      <div class="order-name-message">not less than 4 symbols, strings only, without spaces</div>
        
      <label for="form-surname">Surname</label>
      <input type="text" class="order-surname" id="form-surname" onkeyup="formState()" required pattern="^[A-Za-z]{5,}">
      <div class="order-surname-message">not less than 5 symbols, strings only, without spaces</div>

      <input type="submit" class="order-form-submit" value="i will do my best" id="form-submit">

    </form>

    </div>
  </div>
`
  document.getElementById('main').innerHTML += checkoutOutput
}
checkoutOutput()


function openCheckOut() {
  document.getElementById("checkout-wrapper").classList.add("checkout-wrapper-open");
  document.getElementById("popup-bg").classList.add("open")
  document.getElementById("body").classList.add("body-hide-scroll")
}

const formName = document.getElementById("form-name")
const formSurname = document.getElementById("form-surname")
const formSubmit = document.getElementById("form-submit")

formSubmit.disabled = true

function formState() {
  // let nameRegex = ;
  let surnameRegex = /^[A-Za-z]{5,}/;
  if (!formName.value.match(/^[A-Za-z]{4,}/) || !formSurname.value.match(surnameRegex)) {
    formSubmit.disabled = true
    console.log('invalid')
  } else {
    formSubmit.disabled = false
    console.log('valid')
  }


}


