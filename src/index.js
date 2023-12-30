import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book, index) => {
        //const { img, title, author, id } = book;
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleButtonClick = () => {
    console.log("Handle Button Click");
  };
  const handleFormSubmission = () => {
    console.log("Form Submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </form>
      <div>
        <button onClick={handleButtonClick} type="button">
          Click Me
        </button>
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
