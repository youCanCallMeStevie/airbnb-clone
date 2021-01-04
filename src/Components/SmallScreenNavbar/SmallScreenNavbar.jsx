import React, {useState} from "react";
import "../SmallScreenNavbar/SmallScreenNavbar.css";

export default function SmallScreenNavbar({ handleChange, handleSubmit }) {

  const [search, setSearch] = useState("");

  const submit = e => {
    e.preventDefault();
    alert(`We're having a look for ${search}`);
    setSearch("");
  };
  return (
    <div className="small-navbar-container">
      <div className="searchbox-area">
        <form onSubmit={submit}>
          <input
            value={search}
            type="text"
            placeholder="Where are you going?"
            onChange={e => setSearch(e.target.value)}
            style={{border:"none", marginTop: "5px", width: "auto"}}
            // className="searchbox-area-input"
          />
        </form>
      </div>
    </div>
  );
}
