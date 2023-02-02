import SearchItem from "./components/SearchItem";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = " http://localhost:3500/items";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("did not receive expected data");
        const itemsList = await response.json();
        setItems(itemsList);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => fetchItems(), 2000);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const itemsList = [...items, myNewItem];
    setItems(itemsList);
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
    setItems(itemsList);
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    setItems(itemsList);
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
      <main>
        {isLoading && <p>Loading Items ....</p>}
        {fetchError && (
          <p style={{ color: "red" }}>{`Error : ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && 
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
