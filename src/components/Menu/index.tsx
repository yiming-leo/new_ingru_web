import { AppstoreOutlined, MailOutlined, SettingOutlined, MessageOutlined, GlobalOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('首页', '/', <HomeOutlined />,),
    getItem('产品', '/tradingmarket/', <AppstoreOutlined />,),
    getItem('新闻', '/news/', <MessageOutlined />),
    getItem('关于我们', '/aboutus/', <PhoneOutlined />,),
];


// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const MenuCom: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [current, setCurrent] = useState<string>();

    const onSelect = (e) => {
        setCurrent(e.key)
        router.push(e.key)
    }
    useEffect(() => {
        setCurrent(pathname)

    }, [])
    return (
        <>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: '100%', background: '#0F0F1E', }}
                items={items}
                defaultSelectedKeys={[current]}
                onSelect={onSelect}
                selectedKeys={[current]}
            // theme={'dark'}
            />
        </>
    );
};

export default MenuCom;