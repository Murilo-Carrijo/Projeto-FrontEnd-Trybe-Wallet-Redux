import React from 'react';
import Header from '../component/Header';
import FormExpenses from '../component/FormExpenses';
import ExpensesTab from '../component/ExpensesTab';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
        <ExpensesTab />
      </div>
    );
  }
}

export default Wallet;
