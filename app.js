'use strict';

let bookForm = document.getElementById('bookForm');
let table = document.getElementById('table');
let total = document.getElementById('total');


Book.info = [];
function Book(bookName,bookPrice){
  this.bookName = bookName;
  this.bookPage = randomPage();
  this.bookPrice = bookPrice;
  Book.info.push(this);
  saveToLS();

}
getFromLS();

function saveToLS(){
  let data = JSON.stringify(Book.info);
  localStorage.setItem('book',data);

}

function getFromLS(){
  let stringObj = localStorage.getItem('book');
  let bookObj = JSON.parse(stringObj);
  if (bookObj !== null) {
    Book.info = bookObj;

  }
  bookRender();
}


function randomPage() {
  let total = Math.floor(Math.random() * 500) + 1;
  return total;

}






bookForm.addEventListener('submit',addBook);
function addBook(event){
  event.preventDefault();
  let bName = event.target.bookName.value;
  //   let bPage = randomPage();
  let bPrice = event.target.bookPrice.value;
  new Book(bName,bPrice);


  bookRender();


}

// creatHeader();

function creatHeader(){
  let trEl = document.createElement('tr');

  let thE1 = document.createElement('th');
  thE1.textContent = 'Book Name';

  let thE2 = document.createElement('th');
  thE2.textContent = 'Book Pages';

  let thE3  = document.createElement('th');
  thE3.textContent = 'Price';
  trEl.appendChild(thE1);
  trEl.appendChild(thE2);
  trEl.appendChild(thE3);
  table.appendChild(trEl);



}

function bookRender(){
  table.textContent = '';
  creatHeader();
  let sum = 0;

  for (let i = 0; i < Book.info.length; i++) {
    let trEl = document.createElement('tr');

    let bName = document.createElement('td');
    bName.textContent = `${Book.info[i].bookName}`;

    let bPages = document.createElement('td');
    bPages.textContent = `${Book.info[i].bookPage}`;

    let bPrice = document.createElement('td');
    bPrice.textContent = `${Book.info[i].bookPrice}`;

    trEl.appendChild(bName);
    trEl.appendChild(bPages);
    trEl.appendChild(bPrice);
    table.appendChild(trEl);




    sum = sum +JSON.parse(Book.info[i].bookPrice);
    // let p = document.createElement('p');
    // p.textContent = sum ;
    // table.appendChild(p);
  }
  let p = document.createElement('p');
  p.textContent = 'Total :'+ sum;
  table.appendChild(p);

}


