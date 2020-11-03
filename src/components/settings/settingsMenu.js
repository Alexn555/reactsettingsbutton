import React from 'react';
import { Message } from 'semantic-ui-react';
import styles from './settingsMenu.module.scss';
import { SelectTypes } from '../../common/settings';
import OutsideWrapper from '../../common/hooks/outsideWrapper';

import Companies from './companies/companies';
import AchivementMenuItem from './achivements/menuItem/achivementMenuItem';
import AchivementsMenu from './achivements/achivementsMenu';

import SettingsMenuItem from './settingsItem/settingsItem';

function SettingsMenu(props) {
    const { settings, onUpdateSelect, onClose } = props;
	const { companies, achivements, community, common, currentPage } = settings;
	const { label, list } = achivements;

    if (settings === null) {
        return <Message>No settings!</Message>;
    }

    const toggleMenu = () => {
        const newPage = currentPage === SelectTypes.ACHIEVEMENTS ?
            SelectTypes.SETTINGS : SelectTypes.ACHIEVEMENTS;
        onUpdateSelect('', newPage);
    };

    const communityList = community.map( (item, index) =>
		<SettingsMenuItem
		   key={index}
		   item={item}
		   onMenuClose={onClose}
		   onUpdateSelect={onUpdateSelect}
		/>
    );

	const commonList = common.map( (item, index) =>
		<SettingsMenuItem
		   key={index}
		   item={item}
		   onMenuClose={onClose}
		   onUpdateSelect={onUpdateSelect}
		/>
    );

    const AchviementLabel = currentPage === SelectTypes.SETTINGS ? (
		<div onClick={toggleMenu} className={styles.achievementsMenu}>
			<AchivementMenuItem
				isLabel={true}
				achivement={label}
				showProgressValue={true}
			/>
		</div>
    ) : null;

	const SettingsMainPage = (
		<>
			<Companies
				companies={companies}
				onUpdateSelect={onUpdateSelect}
				onMenuClose={onClose}
			/>
			{AchviementLabel}
			<hr className={styles.commonHr} />
			{communityList}
			<hr className={styles.commonHr} />
			{commonList}
		</>
	);

	const AchivementsPage = (
		<AchivementsMenu
			achivements={list}
			currentPage={currentPage}
			onUpdateSelect={onUpdateSelect}
		/>
	);

	const PageView = currentPage === SelectTypes.SETTINGS ?  SettingsMainPage : AchivementsPage;

    return (
    	<OutsideWrapper onClickOutside={onClose}>
			<div className={styles.settingsMenu}
				 tabIndex="0"
				 onBlur={onClose}
			>
                {PageView}
			</div>
		</OutsideWrapper>
    );
}

export default SettingsMenu;