import React, {Component} from 'react';
import './App.css';
import {IOElement} from './ioelement.js';

export function IOList (props) {
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
            {props.monthly}:-
          </b>
        </div>
        {props.items}
      </div>
    );
}
