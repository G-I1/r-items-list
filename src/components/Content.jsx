import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsList);
    localStorage.setItem('shoppingList',JSON.stringify(itemsList));
  };

  const handleDelete = (id)=>{
      const itemsList = items.filter((item)=>item.id !== id) ; 
      setItems(itemsList);
      localStorage.setItem('shoppingList',JSON.stringify(itemsList));
  }

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
              style={(item.checked)?{textDecoration:'line-through'}:null}
              onDoubleClick={()=>handleCheck(item.id)}
              >{item.item}</label>
              <FaTrash
              onClick={()=>handleDelete(item.id)} 
              role="button" 
              tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{marginTop : '2rem' }}>List is empty</p>
      )};
    </main>
  );
}

export default Content;
