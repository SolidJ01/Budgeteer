import React from 'react';
import './App.css';
import {Topbar} from './topbar.js';
import {IOList} from './iolist.js';
import {IOElement} from './ioelement.js';
import {IOSubelement} from './iosubelement.js';
import {BalanceIndicator} from './balanceindicator.js';
import {Additempopup} from './additempopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyIncome: "",
      monthlyExpenses: "",
      incomeList: [],
      expensesList: [],
      incomeSum: 0,
      expensesSum: 0,
      balance: 0,
    }
  }

  getExpensesList = () => {
    fetch('/api/items/expenses')
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
      this.setState({ expensesList: expensesList, expensesSum: amount });
    });

    fetch('/api/monthly/expenses')
    .then(res => res.json())
    .then(res => {
      let amount = this.state.expensesSum;
      let baseamount = this.state.expensesSum;
      for (let i = 0; i < res.length; i++) {
        amount += res[i].amount;
      }
      baseamount = amount - baseamount;
      const monthlyExpenses = res.map((item, i) =>
        <IOSubelement key={item.id} name={item.name} amount={item.amount}/>
      );
      const monthlyItem = (
        <IOElement name="Monthly Expenses" type="Expenses" amount={baseamount} subcontent={monthlyExpenses} />
      );
      this.setState({ monthlyExpenses: monthlyItem, expensesSum: amount });
    });
  };

  getIncomeList = () => {
    fetch('/api/monthly/income')
    .then(res => res.json())
    .then(res => {
      let amount = this.state.incomeSum;
      let baseamount = this.state.incomeSum;
      for (let i = 0; i < res.length; i++) {
        amount += res[i].amount;
      }
      baseamount = amount - baseamount;
      const monthlyIncome = res.map((item, i) =>
        <IOSubelement key={item.id} name={item.name} amount={item.amount}/>
      );
      const monthlyIItem = (
        <IOElement name="Monthly Income" type="Income" amount={baseamount} subcontent={monthlyIncome} />
      );
      this.setState({ monthlyIncome: monthlyIItem, incomeSum: amount });
    });
  };

  setBalance = () => {
    let inc = parseInt(this.state.incomeSum);
    let exp = parseInt(this.state.expensesSum);
    let bal = inc-exp;
    console.log(bal);
    this.setState({ balance: bal });
  }

  componentDidMount () {
    this.getExpensesList();
    this.getIncomeList();
    this.setBalance();
  }

  render() {
    return (
      <div>
        <Topbar/>
        <Additempopup/>
        <div className="iocontainer">
          <IOList type="Income" items={this.state.incomeList} monthly={this.state.incomeSum} monsubcon={this.state.monthlyIncome} passedFunction={this.tempFunction}/>
        </div>
        <div className="iocontainer">
          <IOList type="Expenses" items={this.state.expensesList} monthly={this.state.expensesSum} monsubcon={this.state.monthlyExpenses} passedFunction={this.tempFunction}/>
        </div>
        <BalanceIndicator positive="Positive" balance={this.state.balance}/>
      </div>
    );
  }

  tempFunction() {
    console.log('tempFunction called');
  }
}

export default App;
