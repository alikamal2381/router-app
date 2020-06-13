import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchitems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchitems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      <h3>Shop Page</h3>
      {
        //items.data.item.itemId
      }
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

//https://fornite-public-api.theapinetwork.com/prod09/upcoming/get
//https://fortnite-api.theapinetwork.com/store/get
export default Shop;
