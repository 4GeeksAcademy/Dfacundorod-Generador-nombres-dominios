/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let f = 0; f < adj.length; f++) {
      for (let g = 0; g < noun.length; g++) {
        for (let h = 0; h < extension.length; h++) {
          console.log(`${pronoun[i]}${adj[f]}${noun[g]}${extension[h]}`);
        }
      }
    }
  }
};
