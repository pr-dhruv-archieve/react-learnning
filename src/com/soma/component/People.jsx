import React, { Component } from 'react'

function People() {
  return (
    <section>
      <Person />
      <Person1 />
    </section>
  )
}
const Person= () => {
  return (
    <article>
      <h1>John Doe</h1>
      <p>Developer</p>
      <hr />
    </article>
  );
};

const Person1= () => {
  return (
    <article>
      <h1>John Doe</h1>
      <p>Designer</p>
      <hr />
    </article>
  );
};

export default People;