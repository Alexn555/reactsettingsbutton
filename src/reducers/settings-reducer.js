import { Storage, SelectTypes } from '../common/settings';

// achviements (debug - usually comes from server)
const AchivementsList = [
	{
		id: 0,
		name: 'Choose crops',
		description: 'Add crops to all of your fields in the current season.',
		progress: '35%',
        progressVal: 35,
	},
	{
		id: 1,
		name: 'Add tasks to 3 fields',
		description: 'Try adding tasks of your choise to 3 fields.',
		progress: '1/3',
        progressVal: 30,
	},
    {
		id: 2,
		name: 'Export the field diary report',
		description: 'Get most important report in just few clicks :what:',
		progress: '0/1',
        progressVal: 0,
	},
	{
		id: 3,
		name: 'Install mobile app',
		description: 'See your farm data wherever you go, for you and for your workers.',
		progress: '',
        progressVal: 100, // if value 100 procent - complete
	},
];

// default array on start, if wasn't saved before
let InitSettingsMenu = {
    companies: [
        {
            id: 0,
            name: 'Goldenpõld OÜ, Grain Transit',
            description: 'Jointly managed companies',
            isActive: true,
        },
        {
            id: 1,
            name: 'Kiljatootja AS',
            description: '',
            isActive: false,
        },
        {
            id: 2,
            name: 'Tartu Agro OÜ',
            description: '',
            isActive: false,
        },
    ],
    currentPage: 'settings',
    achivements: {
        label: {
            id: 0,
            name: 'Achivements',
            description: '3/11 done 27%',
            progress: '27%',
            progressVal: 27,
        },
        list: AchivementsList
    },
    community: [
        {
            id: 0,
            name: 'Get mobile app'
        },
        {
            id: 1,
            name: 'Community'
        },
        {
            id: 2,
            name: 'Knowledge base'
        },
    ],
    common: [
        {
            id: 3,
            name: 'Settings'
        },
        {
            id: 4,
            name: 'Log out'
        },
    ],
};

(() => {
  // on load application gets saved array from localstorage
	if( localStorage.getItem(Storage) === null) {
		localStorage.setItem(Storage, JSON.stringify(InitSettingsMenu));
	}
	else {
        InitSettingsMenu = JSON.parse(localStorage.getItem(Storage));
	}
})();


const settingsReducer = (state = InitSettingsMenu, action) => {
    let stateCurrent;
	switch(action.type) {

		case 'SELECT_COMPANY':
            stateCurrent = state;
			const companyId = action.payload;
			const companies = stateCurrent.companies;
			companies.forEach((item) => {
				item.isActive = item.id === companyId;
			});
			stateCurrent.companies = companies;
			localStorage.setItem(Storage, JSON.stringify(stateCurrent));
		return stateCurrent;

		case 'NAVIGATE_ACHIEVEMENTS':
            const temp = state;
            temp.currentPage = SelectTypes.ACHIEVEMENTS;
            // to refresh @todo remove side effects
            //const copy = Object.assign({}, temp);
            stateCurrent = temp;
            localStorage.setItem(Storage, JSON.stringify(stateCurrent));
            return stateCurrent;


        case 'NAVIGATE_SETTINGS':
            const tempSettings = state;
            tempSettings.currentPage = SelectTypes.SETTINGS;
            stateCurrent = tempSettings;
			localStorage.setItem(Storage, JSON.stringify(stateCurrent));
            return stateCurrent;

		case 'GET_SETTINGS':
			return state;

		default:
			return state;
	}
}

export default settingsReducer;