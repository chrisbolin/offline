import React from 'react';
import styled from 'styled-components';

import { colors } from './utils';

const A = styled.a`
	color: inherit;
	box-shadow: inset 0 -4px 0 ${colors.funBlue};
	text-decoration: none;
	transition: 200ms ease-out;

	&:hover {
		color: ${colors.white};
		background-color: ${colors.funBlue};
	}
`;

export default ({ children, href }) => {
	const tempHref = `${window.location.origin}${window.location.pathname}?forward=${href}`;
	return (
		<A href={tempHref} target="_blank">{children}</A>
	);
}
