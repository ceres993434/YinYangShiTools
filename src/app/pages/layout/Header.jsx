/**
 * Created by griga on 11/17/15.
 */

import React from 'react'

import FullScreen from '../../../components/layout/actions/FullScreen.jsx'
// import SpeechButton from '../../../components/layout/actions/SpeechButton.jsx'
// import SearchMobile from '../../../components/layout/actions/SearchMobile.jsx'

import DeviceDetect from '../../../components/layout/tools/DeviceDetect.jsx'
// import ActivitiesDropdown from '../../../components/activities/ActivitiesDropdown.jsx'
// import LanguageSelector from '../../../components/i18n/LanguageSelector.jsx'

// import RecentProjects from './header/RecentProjects.jsx'

let Header = React.createClass({
	render: function() {
		return (
			<header id="header">
				<div id="logo-group">
					<span id="logo">
						<strong>阴阳师工具 WebApp</strong>
					</span>
					{/* Note: The activity badge color changes when clicked and resets the number to 0
	        Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications */}

					{/* No ActivitiesDropdown at the moment.
						 <ActivitiesDropdown url={'api/activities/activities.json'}/> */}
				</div>

				{/* No recent projects at the moment.
					<RecentProjects/> */}
				<div className="pull-right">
					<FullScreen className="btn-header transparent pull-right"/>
				</div>
				{/* end pulled right: nav area */}

				<DeviceDetect/>
			</header>
		)
	}
});

export default Header
