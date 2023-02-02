import React from "react";
import ItemList from "./ItemList";

function Content({ handleCheck, handleDelete, items }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>List is empty</p>
      )}
    </>
  );
}

export default Content;
