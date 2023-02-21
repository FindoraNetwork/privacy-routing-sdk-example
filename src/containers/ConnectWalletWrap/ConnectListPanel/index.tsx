import React from 'react';
import MetaMaskCard from '../Connectors/MetaMaskCard';

import './index.less';

export interface IConnectListPanel {
  onClose?: () => void;
  onSelect?: (flag: string) => void;
}

const ConnectListPanel: React.FC<IConnectListPanel> = ({ onClose, onSelect }) => {
  return (
    <div className="connect-list-panel">
      <MetaMaskCard onClick={onSelect} />
    </div>
  );
};

ConnectListPanel.defaultProps = {
  onClose: () => {},
  onSelect: () => {},
};

export default ConnectListPanel;
