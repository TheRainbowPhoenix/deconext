import { error } from '@sveltejs/kit';

import type { ChannelRequest, ChannelPage } from './types';

export const load: (a: ChannelRequest) => ChannelPage = ({ params }) => {
	console.log(params);
	if (params.channelId === '7419932904982937639') {
		return {
			title: 'Test',
			content: 'Test Channel'
		};
	}

	throw error(404, 'Not found');
};
