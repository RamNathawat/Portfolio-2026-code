import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://318a8a68.portfolio-2026-8ga.pages.dev/">Primary link</Link>
    <Link secondary href="https://318a8a68.portfolio-2026-8ga.pages.dev/">
      Secondary link
    </Link>
  </StoryContainer>
);
