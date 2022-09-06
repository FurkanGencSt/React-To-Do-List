import React, { useState } from "react";
import Item from "./Item.jsx"
function App() {

  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const title = event.target.value;
    setText(title);
  }

  function handleButton () {
    setItem((prevItems) => {
      return [...prevItems, text];
    });
    setText("")
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
          return index !== id;
      });
    });
  }
  

  return (
    <div>

    <div>
      <div className="heading">
      <h1 className="">To Do List</h1>

      </div>
      <div className="InputArea">
      <div className="inputArea">
            <input onChange={handleChange} className="inputholder" placeholder="Yazınız" value={text}></input>
            <input onClick={handleButton} type="button" className="btn btn-primary " id="clearToDo" value="Ekleyiniz" />
        </div>
      </div>
    </div>

        

    
      
      <div className="ToDo">
      
      
      <h1>
      {item.map((todoItem, index) => (
            <Item
              key={index}
              id={index}
              itemName={todoItem}
              onChecked={deleteItem}
            />
          ))}
      </h1>
      </div>
    </div>
  );
}

export default App;
