import { useState, useEffect } from "react";
import "./body.component.styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const getStoredItemList=()=>{
  let list=localStorage.getItem('itemList')
  if(list){
    return JSON.parse(localStorage.getItem('itemList'))
  }else {
    return []
  }
}

const Body = () => {
  // 
  //hooks list
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(getStoredItemList());

  //helper functions
  const onChangeHandler = (event) => {
    setNewItem(event.currentTarget.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    if (newItem) {
      const item = {
        id: Math.floor(Math.random() * 10000),
        value: newItem,
      };
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
    }else{
      return;
    }

  };
  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(items));
  }, [items]);

  const handelDelete = (id) => {
    const x = items.filter((item) => item.id !== id);
    setItems(x);
  };
  return (
    <div className="body-container">
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Input Text"
          onChange={onChangeHandler}
          value={newItem}
          autoFocus
        />
        <button onClick={addItem}>Add</button>
      </form>
      <ul>
        {items.map((elem) => {
          return (
            <div key={elem.id} className="list-container">
              <li key={elem.id}>
                {elem.value}
                <span onClick={() => handelDelete(elem.id)} id={elem.id}>
                  <DeleteIcon className={"remove-item-icon"} />
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Body;
