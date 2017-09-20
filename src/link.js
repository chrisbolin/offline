import React from 'react';
import styled from 'styled-components';

import { colors } from './utils';

export const A = styled.a`
	color: inherit;
	box-shadow: inset 0 -3px 0 ${colors.funBlue};
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: ${colors.white};
		background-color: ${colors.funBlue};
		transition: all 200ms ease-out;
	}
`;

export const OfflineLink = ({ children, href }) => {
	const tempHref = `${window.location.origin}${window.location.pathname}?forward=${href}`;
	return (
		<A href={tempHref} target="_blank">{children}</A>
	);
}
