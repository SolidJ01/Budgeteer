import React from 'react';
import './App.css';
import {Topbar} from './topbar.js';
import {IOList} from './iolist.js';
import {IOElement} from './ioelement.js';
import {IOSubelement} from './iosubelement.js';
import {BalanceIndicator} from './balanceindicator.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyIncome: "",
      monthlyExpenses: "",
      incomeList: [(<IOElement type="Income" name="thing" amount="10"/>)],
      expensesList: [],
      incomeSum: 0,
      expensesSum: 0,
    }
  }

  getExpensesList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      //var expensesList = res.map(r => r.item);
      let amount = 0;
      for (let i = 0; i < res.length; i++) {
        amount += res[i].amount;
      }
      const expensesList = res.map((item, i) =>
        <IOElement key={item.id} name={item.name} type={item.type} amount={item.amount} />
      );
      console.log(expensesList);
      this.setState({ expensesList: expensesList, expensesSum: amount });
      console.log(this.state.expensesList);
    });

    fetch('/api/monthly')
    .then(res => res.json())
    .then(res => {
      let amount = this.state.expensesSum;
      let baseamount = this.state.expensesSum;
      for (let i = 0; i < res.length; i++) {
        amount += res[i].amount;
        console.log(amount);
      }
      baseamount = amount - baseamount;
      const monthlyExpenses = res.map((item, i) =>
        <IOSubelement key={item.id} name={item.name} amount={item.amount}/>
      );
      const monthlyItem = (
        <IOElement name="Monthly Expenses" type="Expenses" amount={baseamount} subcontent={monthlyExpenses} />
      )
      this.setState({ monthlyExpenses: monthlyItem, expensesSum: amount });
      console.log(this.state.monthlyExpenses);
      console.log(this.state.expensesSum);
    });
  };

  componentDidMount () {
    this.getExpensesList();
  }

  render() {
    return (
      <div>
        <Topbar/>
        <div className="iocontainer">
          <IOList type="Income" items={this.state.incomeList} monthly="11362" monsubcon={this.state.moninc}/>
        </div>
        <div className="iocontainer">
          <IOList type="Expenses" items={this.state.expensesList} monthly={this.state.expensesSum} monsubcon={this.state.monthlyExpenses}/>
        </div>
        <BalanceIndicator positive="Positive" balance="5112"/>
      </div>
    );
  }
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
