import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './settingsItem.module.scss';

export default class SettingsMenuItem extends Component {

  constructor(props) {
    super(props);
    this.onUpdateSelect = this.onUpdateSelect.bind(this);
  }

  onUpdateSelect() {
    const { id } = this.props.item;
	this.props.onUpdateSelect(id);
  }

  showIcon(settingsId) {
      let iconName = 'edit';
      switch (settingsId) {
          case 0:
              iconName = 'mobile alternate';
              break;
          case 1:
              iconName = 'address book outline';
              break;
          case 2:
              iconName = 'file audio outline';
              break;
          case 3:
              iconName = 'setting';
              break;
          case 4:
              iconName = 'sign out alternate';
              break;
          default:
              iconName = 'edit';
              break;
      }

     return <Icon name={iconName} />;
  }

  render() {
      const { onMenuClose } = this.props;
      const { id, name } = this.props.item;
      const isLast = id === 4;

      const endDiv = isLast ? styles.endDiv: '';
      const endIconCl = isLast? styles.iconEndElement : '';
      const endCl = isLast ? styles.endElement : '';

      return (
         <div className={`${styles.settingsItem} ${endDiv}`} onClick={onMenuClose}>
             <i className={endIconCl}>
                 {this.showIcon(id)}
             </i>
             <span className={endCl}>
                 {name}
             </span>
		  </div>
      );
  }

 }