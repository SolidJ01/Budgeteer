import React from 'react';
import './App.css';
import Addbutton from './addbutton.js';

export function IOList (props) {
  let isIncome = props.type == 'Income';
    return (
      <div className={"iolist " + props.type}>
        <div className="titleseg">
          <b>{props.type}</b>
        </div>

        {props.monsubcon}

        <div className="sum" id={props.type}>
          <b className="sumtext">
            Total {}
          </b>
          <b className="sumamount">
            <b className="indicator">
              {isIncome ? '+ ' : '- '}
            </b>
            {props.monthly}:-
          </b>
        </div>
        <Addbutton handleClick={doThing.bind(props.passedFunction)}/>
        {props.items}
      </div>
    );
}

function doThing() {
  console.log('thing done');
}
