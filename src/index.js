import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Providers from './providers';

import '../assets/style/globalStyles';

const root = document.getElementById('root');

const render = (Providers) => {
	ReactDOM.render(
		<AppContainer>
			<Providers />
		</AppContainer>,
		root
	);
};
render(Providers);

if (module.hot) {
	module.hot.accept('./providers.jsx', () => {
		render(root);
	});
}
