import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Ram Nathawat Components',
    brandUrl: 'https://318a8a68.portfolio-2026-8ga.pages.dev/',
  },
});
