import SearchItem from "./components/SearchItem";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndLocItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(newItem));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const itemsList = [...items, myNewItem];
    setAndLocItems(itemsList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndLocItems(itemsList);
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setAndLocItems(itemsList);
  };

  return (
    <div className="app">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
