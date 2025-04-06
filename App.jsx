import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const list = [
    "James",
    "Michael",
    "Robert",
    "John",
    "John",
    "William",
    "Richard",
    "Joseph",
    "Thomas",
    "Christopher",
    "Charles",
    "Daniel",
    "Matthew",
    "Anthony",
    "Mark",
    "Donald",
    "Steven",
    "Andrew",
    "Paul",
    "Joshua",
    "Kenneth",
    "Kevin",
    "Brian",
    "Timothy",
    "Ronald",
    "George",
    "Jason",
    "Edward",
    "Jeffrey",
    "Ryan",
    "Jacob",
    "Nicholas",
    "Gary",
    "Eric",
    "Jonathan",
    "Stephen",
    "Larry",
    "Justin",
    "Scott",
    "Brandon",
    "Benjamin",
    "Samuel",
    "Gregory",
    "Alexander",
    "Patrick",
    "Frank",
    "Raymond",
    "Jack",
    "Dennis",
    "Jerry",
    "Tyler",
    "Aaron",
    "Jose",
    "Adam",
    "Nathan",
    "Henry",
    "Zachary",
    "Douglas",
    "Peter",
    "Kyle",
    "Noah",
    "Ethan",
    "Jeremy",
    "Chrissy",
    "Walter",
    "Keith",
    "Austin",
    "Roger",
    "Terry",
    "Sean",
    "Gerald",
    "Carl",
    "Dylan",
    "Harold",
    "Jordan",
    "Jesse",
    "Bryan",
    "Lawrence",
    "Arthur",
    "Gabriel",
    "Bruce",
    "Elizabeth",
    "Susan",
    "Anna",
    "Christina",
    "Virginia",
    "Hannah",
    "Sophia",
    "Isabella",
    "Kayla",
    "Madison",
    "Quincy",
  ];

  return (
    <>
      {" "}
      <div>
        <p1>G</p1>
        <p2>O</p2>
        <p3>O</p3>
        <p4>G</p4>
        <p5>L</p5>
        <p6>E</p6>
      </div>
      <input
        type="text"
        value={input}
        placeholder="Search names ⌕"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {list
        .filter((item) => {
          return item.toLowerCase().includes(input.toLowerCase());
        })

        .map((item, key) => {
          return <p key={key}>{item}</p>;
        })}
    </>
  );
}

export default App;
