import React, { useEffect, useState } from "react";
import "./index.css"
function Main() { 
  const [user, setUser] = useState([]);

  const Getdata = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    Getdata();
  },[])

  return (
    <main>
      <h1> List of Users </h1>
      <ul>
        {user && user.length > 0 && user.map((user, index) => (
            <div className="cards">
            <div className="card">
            <p key={user.id}></p>
            <h2 className="headingstyle">{user.name}</h2>
            <p className="cardinfo">Email: {user.email}</p>
            <p >Address: {user.address.street}</p>
            <p> Phone No: {user.phone}</p>
            <p> Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
</div>
</div>
          ))}
      </ul>
    </main>
  );
}
export default Main;