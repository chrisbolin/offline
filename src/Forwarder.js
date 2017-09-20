import React from 'react';
import { Offline, Online } from 'react-detect-offline';

import { Page, BlockyHeader } from './elements';
import { colors } from './utils';

export default class OfflinePage extends React.PureComponent {
	componentDidMount() {
		if (navigator.onLine) {
			this.goOnline();
		} else {
			window.addEventListener('online', this.goOnline.bind(this));
		}
  }
	goOnline() {
		const { address } = this.props;
		window.location.replace(address);
	}
	render() {
		const { address } = this.props;
		return (
			<Page>
				<BlockyHeader highlighterColor={colors.funBlue}>
					<h2>
						<Offline>
							You're offline.<br />
							When you go back online, we'll forward you to<br />
							{address}
						</Offline>
						<Online>
							Forwarding you to<br />
							{address}<br />
							This should take less than 5 seconds.<br />
							If you're stuck you can try refreshing.
						</Online>
					</h2>
				</BlockyHeader>
			</Page>
		);
	}
}
