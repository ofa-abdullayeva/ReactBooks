import React ,{useState,useEffect} from 'react'
import '../App.css'
import { API_URL } from '../APi'
import axios from 'axios'
import { useAppContext } from '../Context/AppContext'
import { useNavigate} from 'react-router-dom'


function BookList() {
  const [books,setBooks] = useState([]);

  const {favorites,addToFavorites,removeFromFavorites} = useAppContext();

  const Navigate = useNavigate();


  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) =>book.id === id);
    return boolean;
  }

  useEffect(() => {
    axios
    .get(API_URL)
    .then((res)=>{
      setBooks(res.data);
    })
    .catch((err)=>console.log(err))
  }, [])

  return (
    <div className='book-list'>
     {books.map((book)=>(
      <div key={book.id} className='book'>
        <div><h4>{book.title}</h4></div>
        <div><img src={book.image_url} alt='img' onClick={()=>Navigate(`/books/${book.id}`)}/></div>
        <div>
          {
            favoritesChecker(book.id) ? ( <button 
            onClick={()=>removeFromFavorites(book.id)}>
              Remove from Favorites
              </button>)
         : (<button 
         onClick={()=>addToFavorites(book)}
         >
           Add to Favorites
           </button>)}
         
          </div>
      </div>
     ))}
    </div>
  )
}

export default BookList
