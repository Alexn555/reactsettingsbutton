import React from 'react';
import { Icon } from 'semantic-ui-react';
import { COMPLETE_PROCENTAGE } from '../../../../common/settings';
import styles from './achivementProgress.module.scss';

function AchivementProgress(props) {
	const { progress, progressVal, showProgressValue, isComplete } = props;
	const barComplete = isComplete ? styles.complete : '';
	const completeCheck = isComplete ? styles.completeCheck : '';

	const labelSign = progressVal === COMPLETE_PROCENTAGE ?
        <div className={completeCheck}><Icon name="check"> </Icon></div>
        : <div>{progress}</div>;

	const progressLabel = showProgressValue ?
		(<div className={styles.progressLabel}>
       	  {labelSign}
		</div>) : null;

    return (
		<div className={styles.progress}>
		   <div className={`${styles.progressBar} ${barComplete}`}>
			 <div style={{ width: `${progressVal}%`}} />
		   </div>
		   {progressLabel}
		</div>
    );
}

export default AchivementProgress;