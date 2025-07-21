// Read about the code below, suggest how to improve the code

import { useState } from "react";

function ParentComponent() {
  //   const [name, setName] = useState("Naro");
  //   const [age, setAge] = useState(12);

  const [data, setData] = useState({
    name: "Naro",
    age: 12,
  });

  return (
    <div>
      <h4>ParentComponent</h4>
      <ChildComponent name={data.name} age={data.age} />
      {/* <GrandchildComponent name={name} age={age} /> */}
    </div>
  );
}

function ChildComponent({ name, age }) {
  return (
    <div>
      <h4>ChildComponent</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <GrandchildComponent name={name} age={age} />
    </div>
  );
}

function GrandchildComponent({ name, age }) {
  return (
    <div>
      <h4>GrandchildComponent</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default ParentComponent;
