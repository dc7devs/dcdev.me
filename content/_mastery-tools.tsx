import { DeviconPlainJava, DeviconPlainJavascript, DeviconPlainLinux, DeviconPlainNodejs, DeviconPlainNestjs, DeviconPlainTypescript, DeviconPlainVscode, DeviconPlainDocker, DeviconPlainInsomnia, DeviconPlainNotion, DeviconPlainFigma, DeviconPlainGraphql, RiBootstrapFill, SimpleIconsTailwindcss, SimpleIconsVite, AkarIconsNextjsFill, SkillIconsExpressjsLight, FileIconsWebpackOld, MdiReact, SimpleIconsSass, SimpleIconsSpring } from '@/components/ui/icons';

const masteryTools = (classNameIcon?: string) => {
  return [
    {
      toolName: 'Java',
      toolIcon: <DeviconPlainJava className={classNameIcon} />
    },
    {
      toolName: 'Javascript',
      toolIcon: <DeviconPlainJavascript className={classNameIcon} />
    },
    {
      toolName: 'Linux',
      toolIcon: <DeviconPlainLinux className={classNameIcon} />
    },
    {
      toolName: 'Nextjs',
      toolIcon: <AkarIconsNextjsFill className={classNameIcon} />
    },
    {
      toolName: 'Typescript',
      toolIcon: <DeviconPlainTypescript className={classNameIcon} />
    },
    {
      toolName: 'Nodejs',
      toolIcon: <DeviconPlainNodejs className={classNameIcon} />
    },
    {
      toolName: 'Expressjs',
      toolIcon: <SkillIconsExpressjsLight className={classNameIcon} />
    },
    {
      toolName: 'GraphQL',
      toolIcon: <DeviconPlainGraphql className={classNameIcon} />
    },
    {
      toolName: 'Nestjs',
      toolIcon: <DeviconPlainNestjs className={classNameIcon} />
    },
    {
      toolName: 'Webpack',
      toolIcon: <FileIconsWebpackOld className={classNameIcon} />
    },
    {
      toolName: 'React',
      toolIcon: <MdiReact className={classNameIcon} />
    },
    {
      toolName: 'Vitejs',
      toolIcon: <SimpleIconsVite className={classNameIcon} />
    },
    {
      toolName: 'sass',
      toolIcon: <SimpleIconsSass className={classNameIcon} />
    },
    {
      toolName: 'TailwindCSS',
      toolIcon: <SimpleIconsTailwindcss className={classNameIcon} />
    },
    {
      toolName: 'Bootstrap',
      toolIcon: <RiBootstrapFill className={classNameIcon} />
    },
    {
      toolName: 'Spring',
      toolIcon: <SimpleIconsSpring className={classNameIcon} />
    },
    {
      toolName: 'Docker',
      toolIcon: <DeviconPlainDocker className={classNameIcon} />
    },
    {
      toolName: 'Insominia',
      toolIcon: <DeviconPlainInsomnia className={classNameIcon} />
    },
    {
      toolName: 'Notion',
      toolIcon: <DeviconPlainNotion className={classNameIcon} />
    },
    {
      toolName: 'VSCode',
      toolIcon: <DeviconPlainVscode className={classNameIcon} />
    },
    {
      toolName: 'Figma',
      toolIcon: <DeviconPlainFigma className={classNameIcon} />
    }
  ];
};

export default masteryTools;
