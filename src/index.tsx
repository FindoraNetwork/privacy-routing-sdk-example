import '_src/utils/init';

import React from 'react';
import ReactDOM from 'react-dom';

import Transfer from '_src/pages/Transfer';
import ConnectWalletWrap from '_containers/ConnectWalletWrap';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import '_assets/less/index.less';

const items: TabsProps['items'] = [
  {
    key: 'bridge',
    label: `Base - Findora Bridge`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: 'privacy',
    label: `Findora Private Transfer`,
    children: <Transfer/>,
  },
];

const Root = () => {
  return (
    <ConnectWalletWrap.Web3Provider>
      <div className="app">
        <header className="app__header">
          <div>Coinbase Privacy Transfer</div>
          <ConnectWalletWrap.ConnectWallet />
        </header>
        <div className="app__body">
          <Tabs defaultActiveKey="bridge" items={items} />
        </div>
      </div>
    </ConnectWalletWrap.Web3Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

