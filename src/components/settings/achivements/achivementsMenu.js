import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { SelectTypes } from '../../../common/settings';
import styles from './achivementsMenu.module.scss';

import AchivementMenuItem from './menuItem/achivementMenuItem';

function AchivementsMenu(props) {
    const { achivements, onUpdateSelect, currentPage } = props;
    if (achivements === null || achivements.length === 0) {
        return <Message>No achivements!</Message>;
    }

    const achivementsList = achivements.map( (item, index) =>
		<AchivementMenuItem
		   key={index}
		   achivement={item}
		   isLabel={false}
		   showProgressValue={true}
		/>
	);

    const addEmployeeLink = (
		<div className={styles.additional}>
			<a href="/newEmployees" className={styles.addEmployees}>Add your employees</a>
		</div>
    );

    const toggleMenu = () => {
    	const newPage = currentPage === SelectTypes.ACHIEVEMENTS ?
			SelectTypes.SETTINGS : SelectTypes.ACHIEVEMENTS;
        onUpdateSelect('', newPage);
	};

    return (
		<div className={styles.menu} onClick={toggleMenu}>
			<Icon name="arrow left"> </Icon>
			<span> Achivements </span>
			<hr className={styles.commonHr} />
            {achivementsList}
			{addEmployeeLink}
		</div>
    );
}

export default AchivementsMenu;