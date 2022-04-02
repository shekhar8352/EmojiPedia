import React from "react";
import Entry from "./Entry";
import emojis from "../emojis"
import Footer from "./footer";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      dis={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>

      <dl className="dictionary">
      {emojis.map(createEntry)}

      </dl>
      <Footer />
    </div>


  );
}

export default App;
