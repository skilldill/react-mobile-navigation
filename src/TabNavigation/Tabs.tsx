import React, { FC, useState } from "react";

import styles from "./TabNavigation.module.css";

interface TabsProps {
    onChange?: (tabName: string) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
    const {children, onChange} = props;

    const [active, setActive] = useState(0);

    const handleChangeTab = (tabIndex: number, tabName: string) => {
        setActive(tabIndex);
        !!onChange && onChange(tabName);
    }

    return (
        <div className={styles.tabs}>
            {(children as any[])[active]}
            <div className={styles.tabbar}>
                <div className={styles.tabbarContent}>
                    {(children as any[]).map((tab, i) => 
                        <div key={i} onClick={() => handleChangeTab(i, tab.props.name)}>
                            {i === active ? tab.props.titleActive : tab.props.title}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}