import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Topbar} from './topbar.js';
import {IOList} from './iolist.js';
import {IOElement} from './ioelement.js';
import {IOSubelement} from './iosubelement.js';
import {BalanceIndicator} from './balanceindicator.js';

function App() {
  let sublist = [];
  for(let i=0; i < 3; i++) {
    let item = tempSubItems();
    sublist.push(item);
  }

  let list = [];
  for(let i=0; i < 5; i++) {
    let item = tempItems(sublist);
    list.push(item);
  }

  let moninc = (<IOSubelement name="CSN" amount="11362"/>);
  let monexp = (<IOSubelement name="Månadsavgift" amount="1460"/>);
  let monexq = (<IOSubelement name="Reg. runt-kort" amount="1342"/>);
  let monex = [monexp, monexq];

  return (
    <div>
      <Topbar/>
      <div class="iocontainer">
        <IOList type="Income" monthly="11362" monsubcon={moninc}/>
      </div>
      <div class="iocontainer">
        <IOList type="Expenses" items={list} monthly="6250" monsubcon={monex}/>
      </div>
      <BalanceIndicator positive="Positive" balance="5112"/>
    </div>
  );
}

function tempItems(subcontent) {
  return (
    <IOElement subcontent={subcontent}
      name="Expenses element"
      type="Expenses"
      amount="566"/>
  );
}

function tempSubItems() {
  return (
    <IOSubelement name="Subelement" amount="132" />
  );
}

export default App;
