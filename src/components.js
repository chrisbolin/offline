import React from 'react';

import { Page, BlockyHeader, TextBody, Select } from './elements';
import { languages, bodyParagraphs, onlineElements, title, textStyle } from './texts';
import { colors } from './utils';

export const OnlineContent = ({ language }) => (
  <Page style={{ backgroundColor: colors.blueGrey, ...textStyle(language) }}>
		<BlockyHeader highlighterColor={colors.black}>
			{onlineElements(language)}
		</BlockyHeader>
  </Page>
);

export const OfflineContent = ({ language }) => (
  <Page style={textStyle(language)}>
		<BlockyHeader highlighterColor={colors.funBlue}>
			<h1>
				{title(language)}
			</h1>
		</BlockyHeader>
		<TextBody>
			{bodyParagraphs(language)}
		</TextBody>
  </Page>
);

export const LanguageSwitcher = ({language, onChange}) => (
	<Select value={language} onChange={onChange}>
		{
			Object.keys(languages).map(abbr => (
				<option value={abbr} key={abbr}>
					{languages[abbr].name}
				</option>
			))
		}
	</Select>
);
