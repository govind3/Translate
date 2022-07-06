import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); // declare a piece of state

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true }); //click is first argument and onBodyClick as the callback to the BodyClick event Listener

    //  cleanup function
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      }); // we want to remove is the onBodyClick Function
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  //console.log(ref.current);
  return (
    <div ref={ref} className="ui form" style={{ marginTop: "8px" }}>
      <div className="field">
        <label className="ui green label">
          <h5>{label}</h5>
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            <b>{selected.label}</b>
          </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        {/* <p style={{color:`${selected.value}`}}>{selected.label}</p> */}
      </div>
    </div>
  );
};

export default Dropdown;
