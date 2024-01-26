let id = document.querySelector('#name') as HTMLInputElement
let body = document.querySelector(".body") as HTMLFormElement
let image = document.querySelector('#profile') as HTMLInputElement
let names = document.querySelector('#name') as HTMLInputElement
let author = document.querySelector('#author') as HTMLInputElement
let title = document.querySelector('#title') as HTMLInputElement
let date_established = document.querySelector('#date_established') as HTMLInputElement

// let buttOnonClick = document.querySelector('#buttononclick') as HTMLButtonElement;

// buttOnonClick.addEventListener("click", (() =>{

// }))

// let body = document.querySelector('.body') as HTMLFormElement;

let currentIndex:number;

interface Book{
    id: number;
    image: string;
    names: string;
    author: string;
    title: string;
    date_established: string
}

// Initializing an empty array
let Books: Book[]=[]

body.addEventListener("submit", (e)=>{
    e.preventDefault()

    let book = names.value.trim() != "" && image.value.trim() != "" && author.value.trim() != "" && title.value.trim() != "" && date_established.value.trim() != ""

    if(book){
        let bookDetails = {
            id: Books.length + 1,
            names: names.value.trim(),
            image: image.value.trim(),
            author: author.value.trim(),
            title: title.value.trim(),
            date_established: date_established.value.trim()
        };

    
        if(currentIndex){
            Books.splice(currentIndex, 1, bookDetails)

        }else{
            Books.push(bookDetails)
        }

        // instance.displayBooks()

        names.value = ""
        image.value = ""
        author.value = ""
        title.value = ""
        date_established.value = ""
    }
})


class Products{

    displayBooks(){

        let allprofiles = document.querySelectorAll('.profiles .profile') as NodeListOf<HTMLDivElement>

        allprofiles.forEach(el=>{
            el.remove()
        })

        Books.forEach((book: Book, index:number)=>{

            let name = document.createElement('td') as HTMLTableCellElement
            name.textContent = book.names
            
            let email = document.createElement('td') as HTMLTableCellElement
            email.textContent = book.image
            
            let contact = document.createElement('td') as HTMLTableCellElement
            contact.textContent = book.author 
            
            let department = document.createElement('td') as HTMLTableCellElement
            department.textContent = book.title 
            
            let date_established = document.createElement('td') as HTMLTableCellElement
            date_established.textContent = book.date_established 
            

            

            let deletebtn = document.createElement('button') as HTMLButtonElement
            deletebtn.textContent = "Delete"
            deletebtn.style.backfaceVisibility = 'red'
            deletebtn.addEventListener('click', ()=>{
                this.deleteBooks(index)
            })

            let updatebtn = document.createElement('button') as HTMLButtonElement
            updatebtn.textContent = "Update"
            updatebtn.style.backfaceVisibility = 'skyblue'
            updatebtn.addEventListener('click', ()=>{
                this.updateBooks(index)
            })

            // profile.appendChild(URL)
            // profile.appendChild(names)
            // profile.appendChild(image)
            // profile.appendChild(author)
            // profile.appendChild(title)
            // profile.appendChild(deletebtn)
            // profile.appendChild(updatebtn)

            // Books.appendChild(book)

        })
    }

    deleteBooks(index:number){
        Books.splice(index, 1)

        this.displayBooks()
    }

    updateBooks(index:number){
        currentIndex = index

        console.log(currentIndex);
        
        body.style.display = 'flex'

        let user = Books[index]

        names.value = user.names
        image.value = user.image
        author.value = user.author
        title.value = user.title
        date_established.value = user.date_established


    }

}

















