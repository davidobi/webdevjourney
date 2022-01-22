import React from "react";
import ReactDom from "react-dom";

//CSS
import './index.css';

function BookList(){
  return (
   <section className='booklist'>
     <Book />
    <Book />
    <Book />
    <Book />
   </section>
  );
}  
  const Book = () => {
    return (
      <article className='book'>
        <Image />
        <Title />
        <Author />

      </article>
    );
  };

  const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg"
  alt="" />);

  const Title = () => (<h3>Reminders of Him: A Novel</h3>)
  const Author = () => (<h1>Colleen Hoover</h1>)

 
ReactDom.render(<BookList />,document.getElementById('root'));