import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Segment, Button } from 'semantic-ui-react';

import { SelectTypes } from '../../common/settings';

import {
 getSettings,
 selectCompany,
 navigateAchivements,
 navigateMainSettings,
} from '../../actions/settings-actions';

import SettingsMenu from '../../components/settings/settingsMenu';


class MainPage extends Component {

  constructor(props) {
    super(props);
	this.openSettings = this.openSettings.bind(this);
	this.onSettingsMenuOutside = this.onSettingsMenuOutside.bind(this);
    this.onUpdateSelect = this.onUpdateSelect.bind(this);
	this.state = {
		settings: [],
		isSettingsOpen: false,
		isOutsideClosed: false,
	};
	this.props.getSettings();
  }

  componentDidMount(){
  	const { settings } = this.props;
	this.setState({ settings: settings });
	this.savedList = settings;
  }

  componentDidUpdate(prevProps) {
  	const { settings } = this.props;
	 if (prevProps.settings !== settings) {
         if (settings && settings.length > 0) {
             this.setState({ settings: settings });
         }
	 }
  }

  openSettings() {
  	 const { isSettingsOpen, isOutsideClosed } = this.state;
  	 if (!isOutsideClosed) {
         this.setState({ isSettingsOpen: !isSettingsOpen });
     }
  }

  refreshMenu() {
      this.setState({ isSettingsOpen: false });
      setTimeout(() => { this.setState({ isSettingsOpen: true }); }, 200);
  }

  onUpdateSelect(id, selectType = 'company') {
	  switch (selectType) {
		  case SelectTypes.ACHIEVEMENTS:
              this.props.navigateAchivements();
              this.refreshMenu();
		  break
          case SelectTypes.SETTINGS:
              this.props.navigateMainSettings();
              this.refreshMenu();
          break
		  case SelectTypes.COMPANY:
		  default:
		    this.selectCompany(id);
		  break;
	  }
  }

  selectCompany(id) {
	this.props.selectCompany(id);
  }

  showSettingsLink() {
	return (
		<Button color="blue" onClick={this.openSettings}>
			Settings
		</Button>
	);
  }

   onSettingsMenuOutside() {
	  this.setState({ isSettingsOpen: false, isOutsideClosed: true });
	  setTimeout(() => { this.setState({ isOutsideClosed: false }); }, 200);
   }

  render() {
	const { isSettingsOpen, settings } = this.state;
	const menu = isSettingsOpen ?
	 <SettingsMenu
		settings={settings}
		onUpdateSelect={this.onUpdateSelect}
		onClose={this.onSettingsMenuOutside}
     /> : null;

    return (
		<Container style={{ width: '500px '}}>
			<Segment>
			  {menu}
			  {this.showSettingsLink()}
		    </Segment>
		</Container>
	  );
   }

}

const mapStateToProps = (state) => {
  return {
    settings: state.settingsStore
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSettings: getSettings,
    selectCompany: selectCompany,
    navigateAchivements: navigateAchivements,
    navigateMainSettings: navigateMainSettings
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
