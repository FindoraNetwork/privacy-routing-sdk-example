import React, { Fragment } from 'react';

import { Dropdown } from 'antd';

import WalletInfoTitle from './WalletInfoTitle';
import WalletInfoMenu from './WalletInfoMenu';

export interface IWalletInfoPanel {}

const WalletInfoPanel: React.FC<IWalletInfoPanel> = () => {
  return (
    <Dropdown overlay={<WalletInfoMenu />} placement="bottom">
      <div>
        <WalletInfoTitle />
      </div>
    </Dropdown>
  );
};

WalletInfoPanel.defaultProps = {};

export default WalletInfoPanel;
