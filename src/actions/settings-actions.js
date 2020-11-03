export function getSettings() {
    return {
        type: 'GET_SETTINGS',
        payload: ''
    }
}

export function selectCompany(companyId) {
    return {
		type: 'SELECT_COMPANY',
		payload: companyId
    }
}

export function navigateAchivements() {
    return {
		type: 'NAVIGATE_ACHIEVEMENTS',
		payload: ''
    };
}

export function navigateMainSettings() {
    return {
		type: 'NAVIGATE_SETTINGS',
		payload: ''
    };
}