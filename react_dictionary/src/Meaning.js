import React from "react";

export default function Meaning(param) {
  function Example(ex) {
    if (ex.eg !== undefined) {
      return <i>"{ex.eg}"</i>;
    }
    return "";
  }

  function Synonyms(sy) {
    if (sy.syn !== undefined) {
      return "synonyms";
    }
    return <br />;
  }
  return (
    <div className="Meaning">
      <h3>{param.meaning.partOfSpeech}</h3>
      {param.meaning.definitions.map(function (item, key) {
        return (
          <div>
            <div key={item} className="li">
              {item.definition}
              <br />
              <br />
              <Example eg={item.example} />
            </div>
            <div className="container">
              <div className="row">
                <Synonyms syn={item.synonyms} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
