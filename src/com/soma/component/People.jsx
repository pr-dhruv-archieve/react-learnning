import React, { Component } from 'react'
/**
 * Props are the parameter (arguments to the components)
 * ex: <a href="" alt="" /> here, 'a' is the tag name, and href and alt is the props.
 * 
 * Since we are using rfc(React Functional Component, they can't have the states. so here we are not going to use 'this'.)
 * 
 * In the third person Susen, age is passed, so <p> tag with age value will be printed only when age parameter is passed.
 * So in this case for susen age will be printed. Not for Mahii and Sona
 * 
 */

const Person= props => {
  console.log(props);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>{props.age}</p>
      <hr />
    </article>
  );
};

function People() {
  return (
    <section>
      <Person name="Mahii" job="Developer"/>
      <Person name="Sona" job="Designer"/>
      <Person name="Susen" job="Artist" age="19" />
    </section>
  )
}



export default People;