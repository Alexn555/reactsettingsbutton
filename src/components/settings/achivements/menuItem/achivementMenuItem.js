import React from 'react';
import { Icon } from 'semantic-ui-react';

import styles from './achivementMenuItem.module.scss';
import AchivementProgress from '../progress/achivementProgress';

function AchivementMenuItem(props) {
    const { achivement, isLabel, showProgressValue } = props;
	const { name, description, progress, progressVal } = achivement;
	const divLabel = isLabel ? styles.containerLabel : '';
	const desc = isLabel ? styles.labelDesc : '';
	const isComplete = progressVal === 100;

	const labelIcon = isLabel ?
		(<div className={styles.label}><Icon name="calendar outline"> </Icon></div>)
		: null;

	const nameCl = isComplete ? styles.nameComplete : styles.name;

    return (
		<div className={`${styles.container} ${divLabel}`}>
			{labelIcon}
			<div className={nameCl}>
				<span>{name}</span>
				<p className={desc}>{description}</p>
			</div>

			<AchivementProgress
				progress={progress}
				progressVal={progressVal}
				isComplete={isComplete}
				showProgressValue={showProgressValue}
			/>
		</div>
    );
}

export default AchivementMenuItem;