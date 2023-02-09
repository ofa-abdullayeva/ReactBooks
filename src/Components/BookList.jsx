import React ,{useState,useEffect} from 'react'
import '../App.css'
import { API_URL } from '../APi'
import axios from 'axios'


function BookList() {
  const [books,setBooks] = useState([]);

  useEffect(() => {
    axios
    .get(API_URL)
    .then((res)=>{
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err)=>console.log(err))
  }, [])

  return (
    <div className='book-list'>
     {books.map((book)=>(
      <div key={book.id}>
        <div><h2>{book.title}</h2></div>
        <div><img src={book.image_url} alt='img'/></div>
        <div><button>Add to Favorites</button></div>
      </div>
     ))}
    </div>
  )
}

export default BookList
