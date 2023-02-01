import React from "react";
import ItemList from "./ItemList";

function Content({ handleCheck, handleDelete, items }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>List is empty</p>
      )}
    </main>
  );
}

export default Content;
