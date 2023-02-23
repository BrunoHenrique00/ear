import { UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Switch } from 'antd';
import { useState } from 'react';

export default function ConfigDropdown() {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
    e.domEvent.preventDefault();
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Shortcut',
      key: '1',
      icon: <Switch />,
    },
    {
      label: 'Exit',
      key: '2',
      icon: <UserOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown.Button
      style={{ width: 'auto' }}
      menu={menuProps}
      placement="bottom"
      icon={<UserOutlined />}
      onOpenChange={handleOpenChange}
      open={open}
    >
      Configurations
    </Dropdown.Button>
  );
}
