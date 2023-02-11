import React, {useState, useEffect} from 'react'
import '../App.css'
import { useParams } from 'react-router'
import axios from 'axios';
import { book_details_url } from '../APi';

function BookDatails() {
const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(()=>{
    axios
    .get(`${book_details_url}/${id}`)
    .then((res)=>{
      setBook(res.data);
    }).catch(err=>console.log(err))
  },[id])

  return (
    <div className='book-details'>
      <div>
        <h2>{book?.title}</h2>
        <img  src={book?.image_url} alt="#"/>
      </div>
      <div>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDatails
