import React from "react";
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

const Person = ({ children, person: { name, job, age, company } }) => {
  // const{name, job, age, company} = props.person

  // console.log(props);
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

function People() {
  /**
   * Instead of the using props we can create array.
   */
  const data = [
    { name: "Mahii", job: "Developer", age: "25", company: "apple" },
    { name: "Sona", job: "Desinger", age: "23", company: "apple" },
    { name: "Sim", job: "Artist", age: "23", company: "apple" },
  ];

  return (
    <section>
      <Person person={data[0]}>
        <p>About Mahii</p>
      </Person>
      <Person person={data[1]}>
        <p>About Sona</p>
      </Person>
      <Person person={data[2]}>
        <p>About Sim</p>
      </Person>
    </section>
  );
}

export default People;
