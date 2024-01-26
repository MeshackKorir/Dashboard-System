"use strict";
let id = document.querySelector('#name');
let body = document.querySelector(".body");
let image = document.querySelector('#profile');
let names = document.querySelector('#name');
let author = document.querySelector('#author');
let title = document.querySelector('#title');
let date_established = document.querySelector('#date_established');
// let buttOnonClick = document.querySelector('#buttononclick') as HTMLButtonElement;
// buttOnonClick.addEventListener("click", (() =>{
// }))
// let body = document.querySelector('.body') as HTMLFormElement;
let currentIndex;
// Initializing an empty array
let Books = [];
body.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = names.value.trim() != "" && image.value.trim() != "" && author.value.trim() != "" && title.value.trim() != "" && date_established.value.trim() != "";
    if (book) {
        let bookDetails = {
            id: Books.length + 1,
            names: names.value.trim(),
            image: image.value.trim(),
            author: author.value.trim(),
            title: title.value.trim(),
            date_established: date_established.value.trim()
        };
        if (currentIndex) {
            Books.splice(currentIndex, 1, bookDetails);
        }
        else {
            Books.push(bookDetails);
        }
        instance.displayBooks();
        names.value = "";
        image.value = "";
        author.value = "";
        title.value = "";
        date_established.value = "";
    }
});
class Products {
    displayBooks() {
        let allprofiles = document.querySelectorAll('.profiles .profile');
        allprofiles.forEach(el => {
            el.remove();
        });
        Books.forEach((book, index) => {
            let name = document.createElement('td');
            name.textContent = book.names;
            let email = document.createElement('td');
            email.textContent = book.image;
            let contact = document.createElement('td');
            contact.textContent = book.author;
            let department = document.createElement('td');
            department.textContent = book.title;
            let date_established = document.createElement('td');
            date_established.textContent = book.date_established;
            let deletebtn = document.createElement('button');
            deletebtn.textContent = "Delete";
            deletebtn.style.backfaceVisibility = 'red';
            deletebtn.addEventListener('click', () => {
                this.deleteBooks(index);
            });
            let updatebtn = document.createElement('button');
            updatebtn.textContent = "Update";
            updatebtn.style.backfaceVisibility = 'skyblue';
            updatebtn.addEventListener('click', () => {
                this.updateBooks(index);
            });
        });
    }
    deleteBooks(index) {
        Books.splice(index, 1);
        this.displayBooks();
    }
    updateBooks(index) {
        currentIndex = index;
        console.log(currentIndex);
        body.style.display = 'flex';
        let user = Books[index];
        names.value = user.names;
        image.value = user.image;
        author.value = user.author;
        title.value = user.title;
        date_established.value = user.date_established;
    }
}
let instance = new Products();
instance.displayBooks();
