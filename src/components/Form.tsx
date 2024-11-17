import { useState } from "react";

interface Name {
    firstName: string;
    lastName: string;
  }

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [names, setNames] = useState<Name[]>([]);

  const handleClick = (e: any): void => {
    e.preventDefault();
    setNames([...names, name]);
    setName({firstName: '', lastName:''})
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <h1>
          Name: {name.firstName} {name.lastName}
        </h1>
        <button onClick={(e) => handleClick(e)}>Submit</button>
      </form>
      <ol>
        {names.map((n)=> <li>{n.firstName} {n.lastName}</li>)}
      </ol>
    </>
  );
}

export default Form;
