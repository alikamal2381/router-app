import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchitem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchitem = async () => {
    const fetchitem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchitem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}

//https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
export default ItemDetail;
