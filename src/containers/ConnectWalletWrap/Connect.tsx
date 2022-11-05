import React, { useState } from 'react';
import { Modal } from 'antd';
import useMedia from 'use-media';

import ConnectListPanel from './ConnectListPanel';

import './index.less';

export interface IChangeNetwork {}

const Connect: React.FC<IChangeNetwork> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isH5 = useMedia({ maxWidth: 700 });
  return (
    <section className="section-change-network">
      <div
        className="change-name"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Connect Wallet
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        width={isH5 ? '94%' : 434}
        centered
        closable={false}
        title={null}
        bodyStyle={{ padding: '0' }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <ConnectListPanel />
      </Modal>
    </section>
  );
};

Connect.defaultProps = {};

export default Connect;
