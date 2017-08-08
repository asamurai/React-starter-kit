import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Application from './Application';

const root = document.getElementById('root');

const render = (Application) => {
	ReactDOM.render(
		<AppContainer>
			<Application/>
		</AppContainer>,
		root
	);
};
render(Application);

if(module.hot){
	module.hot.accept('./Application', () => {
		render(root);
	});
}