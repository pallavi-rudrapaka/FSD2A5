namespace Library {

    export function addBook(bookName: string): void {
        console.log(bookName + " added successfully.");
    }

    export function issueBook(bookName: string): void {
        console.log(bookName + " issued successfully.");
    }

    export function returnBook(bookName: string): void {
        console.log(bookName + " returned successfully.");
    }

    export function searchBook(bookName: string): void {
        console.log(bookName + " is available in the library.");
    }

}

Library.addBook("Harry Potter");
Library.issueBook("Harry Potter");
Library.returnBook("Harry Potter");
Library.searchBook("Harry Potter");