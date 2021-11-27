import React from 'react';
import Header from '../component/Header';
import FormExpenses from '../component/FormExpenses';

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
