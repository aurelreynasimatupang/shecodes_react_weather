import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Gallery from "./Gallery";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [defi, setDefinition] = useState({ word: "" });
  const [img, setImg] = useState([]);

  function handleKeywordChange(event) {
    setWord(event.target.value);
  }

  function showDefi(response) {
    setDefinition({
      word: response.data[0].word,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
  }

  function showGall(response) {
    setImg(response.data.photos);
  }

  function submit(event) {
    event.preventDefault();
    let key = "563492ad6f91700001000001f84a1e01968f44b59b29eee146db0a50";
    let url = `https://api.pexels.com/v1/search?query=${word}&orientation=square&size=small&per_page=3&page=1&api_keys=${key}`;
    let headers = { Authorization: `Bearer ${key}` };
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then(showDefi);
    axios.get(url, { headers: headers }).then(showGall);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submit}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" className="submitbtn" />
      </form>
      <Definition word={defi} />
      <Gallery image={img} />
    </div>
  );
}
