import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './company.module.scss';

function Company(props) {
    const { item, onUpdateSelect, onMenuClose } = props;
	const { id, name, isActive, description } = item;
	const activeCompany = isActive ? styles.activeCompany : '';

	const isActiveCheck = isActive ?
		<div className={styles.active}>
			<Icon name="check" />
		</div> : null;
    return (
		<div className={`${styles.company} ${activeCompany}`}
			 onClick={(e) => {
			 	onUpdateSelect(id);
                onMenuClose();
             }
		}>
			<div className={styles.companyDescription}>
			   <div>{name}</div>
			   <div>{description}</div>
			</div>
			{isActiveCheck}
        </div>
    );
}

export default Company;