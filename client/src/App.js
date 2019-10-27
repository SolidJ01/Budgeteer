import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Topbar} from './topbar.js';
import {IOList} from './iolist.js';
import {IOElement} from './ioelement.js';

function App() {
  let list = [];
  for(let i=0; i < 5; i++) {
    let item = tempItems();
    list.push(item);
  }

  return (
    <div>
      <Topbar/>
      <div class="iocontainer">
        <IOList type="Income"/>
      </div>
      <div class="iocontainer">
        <IOList type="Expenses" items={list}/>
      </div>
    </div>
  );
}

function tempItems() {
  return (
    <IOElement subcontent="hallå eller"
      name="Expenses element"
      type="Expenses"
      amount="566"/>
  );
}

export default App;
