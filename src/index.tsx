import '_src/utils/init';

import React from 'react';
import ReactDOM from 'react-dom';

import Transfer from '_src/pages/Transfer';
import ConnectWalletWrap from '_containers/ConnectWalletWrap';


import '_assets/less/index.less';

const Root = () => {
  return (
    <ConnectWalletWrap.Web3Provider>
      <div className="app">
        <header className="app__header">
          <div>Privacy Routing SDK Example</div>
          <ConnectWalletWrap.ConnectWallet />
        </header>
        <div className="app__body">
          <Transfer />
        </div>
      </div>
    </ConnectWalletWrap.Web3Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
