import { useState } from "react";
import "./styles.css";

export default function Todo() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edited, SetEdited] = useState(null);


  const addItem = () => {
    if (input === "") {
      alert("Add something");
    } else if (input && !toggle) {
      setItem(
        item.map((elem) => {
          if (elem.id === edited) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
      setToggle(true);
      setInput("");
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };
      setItem([...item, allInputData]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updatedItems);
  };


  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setInput(newEditItem.name);
    SetEdited(id);
  };

  const removeall = () => {
    setItem([]);
  };

  return (
    <div className="mainContainer">
      <div className="inputbox">
        <input
          type="text"
          className="inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {toggle ? (
          <i className="fas fa-plus btn" onClick={addItem}></i>
        ) : (
          <i className="fas fa-edit btn" onClick={addItem}></i>
        )}
      </div>
      <div>
        {item.map((elem) => {
          return (
            <div key={elem.id} className="secondCont">
              <div className="itmes">
                <h3>{elem.name}</h3>
                <div className="secondIconsCont">
                  <i
                    className="fas fa-edit btn DE-icons"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <i
                    className="fas fa-trash btn DE-icons"
                    onClick={() => deleteItem(elem.id)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="Rbtn" onClick={removeall}>
          Remove all
        </button>
      </div>
    </div>
  );
}
