import React from 'react';
import { Message } from 'semantic-ui-react';
import styles from './companies.module.scss';

import Company from './company/company';

function Companies(props) {
    const { companies, onUpdateSelect, onMenuClose } = props;

    if (companies === null) {
        return <Message>No companies!</Message>;
    }
    const itemList = companies.map( (item, index) =>
		<Company
		   key={index}
		   item={item}
           onMenuClose={onMenuClose}
		   onUpdateSelect={onUpdateSelect}
		/>
    );
    return (
		<div className={styles.companies}>
            <span className={styles.companyTitle}>Your companies</span>
            {itemList}
		</div>
    );
}

export default Companies;