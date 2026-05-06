import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description:
      'The tools, hardware, and software I use to design, build, and ship modern web experiences.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />

        <ProjectHeader
          title="Uses"
          description="A practical list of the tools, hardware, and software I use day to day to design, prototype, and build production-ready web experiences."
        />

        {/* Design */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary design
                    tool for UI, interaction design, and rapid prototyping.
                  </ListItem>
                  <ListItem>
                    Motion work and micro-interactions are handled in Adobe After Effects
                    when precision matters.
                  </ListItem>
                  <ListItem>
                    For 3D experiments, assets, and visual exploration I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Development */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VS Code</Link> is my editor of
                    choice, focused on speed, minimalism, and control.
                  </ListItem>
                  <ListItem>
                    I primarily develop using modern browsers with strong DevTools support
                    for debugging and performance profiling.
                  </ListItem>
                  <ListItem>
                    <Link href="https://react.dev/">React</Link> is my main front-end
                    framework for building scalable, component-driven interfaces.
                  </ListItem>
                  <ListItem>
                    For advanced visuals, shaders, and 3D interactions I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>.
                  </ListItem>
                  <ListItem>
                    Styling is handled with modern CSS and{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> for future-ready
                    features.
                  </ListItem>
                  <ListItem>
                    Animations and interaction polish are built with{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* System */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>MacBook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>MacOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Comet Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>ATH-M50x</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </>
  );
};
