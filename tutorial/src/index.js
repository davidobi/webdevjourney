import React from "react";
import ReactDom from "react-dom";

//CSS
import './index.css';


//set up vars
const firstBook = {
img:"https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
author: 'Colleen Hoover',
title: 'Reminders of Him: A Novel'
};

const secondBook = {
img:"https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
author: 'Colleen Hoover',
title: 'It Ends with Us: A Novel'
};

function BookList(){
  return (
   <section className='booklist'>
     <Book 
     img={firstBook.img} 
     title={firstBook.title} 
      author={firstBook.author} />
    
     <Book 
     img={secondBook.img} 
     title={secondBook.title} 
      author={secondBook.author} />
    
   </section>
  );
}  
  //const Book = ({img, title, author}) =>
  const Book = (props) => {
    const { img, title, author } = props;
    return (
      <article className='book'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
    );
  };
 
ReactDom.render(<BookList />,document.getElementById('root'));