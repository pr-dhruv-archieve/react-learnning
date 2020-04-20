import React from "react";

/**
 * How to use JS inside the RFC
 * 
 * Inside JSX we can write anything which can return something.
 * Void return type statement will not be allowed in JSX.
 * 
 * for accessing variable => {variableName}
 * another way {`${v1} ${v2} ------- ${vn}`}
 * 
 */

const btnText = "Small Btn";
function Persons() {
  const btn = "Large Btn";
  const name = "mahii";
  const lastName = "sona"

  return (
    <section>
      <button>{btn}</button>
      <button>{btnText}</button>

      <h2>{`${name} ${lastName}`}</h2>
      <h2>info</h2>
      <h2>{12 + 35}</h2>
    </section>
  );
}

export default Persons;
