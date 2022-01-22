import React from "react";
import ReactDom from "react-dom";

//CSS
import './index.css';


//set up vars
const books = [
{id:1,
img:"https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
author: 'Colleen Hoover',
title: 'Reminders of Him: A Novel'
},
{id:2,
img:"https://images-na.ssl-images-amazon.com/images/I/817-Vrzp%2BtL._AC_UL200_SR200,200_.jpg",
author: 'Alice Schertle',
title: "Little Blue Truck's Valentine"
},
{id:3,
img:"https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
author: 'Colleen Hoover',
title: 'It Ends with Us: A Novel'
},
];

function BookList(){
  return (
   <section className='booklist'>{books.map((book, index)=>{
      return (
       <Book key={book.id} {...book}></Book>
      ); 
   })} </section>
  );
}  
  //const Book = ({img, title, author}) =>
  const Book = (props) => {
    const { img, title, author, children } = props;
    const clickHandler = (e)=>{
      console.log(e);
      console.log(e.target);
      alert('hello world');
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
      <article className='book'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>reference example</button>
        <button type="button" onClick={() => complexExample(author)}>more complex example</button>
      </article>
    );
  };
 
ReactDom.render(<BookList />,document.getElementById('root'));