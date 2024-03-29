import './index.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState ([]);

    const editBookById = (id, newtitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return{ ...book, title: newtitle};
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id; // return 3!==3,false,remove
        });
        
        setBooks(updatedBooks);
    };

    const createBook = (title) =>{
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title}
        ];

        setBooks(updatedBooks);
    };

    return <div className='app'>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate = {createBook} />
    </div>;
}

export default App;