import React from 'react';
import FormExpenses from '../component/FormExpenses';
import Header from '../component/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

export default Wallet;
