import React from "react";

export default function TopRight() {
  return (
    <div className="TopRight">
      <form id="city-form">
        <input
          type="text"
          id="city-input"
          placeholder="enter city"
          class="form"
        />
        <input type="submit" value="search" class="searchButton" />
      </form>
      <button>current</button>
    </div>
  );
}
