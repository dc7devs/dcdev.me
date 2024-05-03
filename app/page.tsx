import Link from 'next/link';

import fncSocialMedia from '@/content/_social-media';
import TechBadge from '@/components/tech-badge';
import EmailSubscribe from '@/components/email/email-subscribe';
import RecentWorkUnderDev from '@/components/recent-work-under-dev';
import ToolTip from '@/components/tooltip';
import masteryTools from '@/content/_mastery-tools';
import Icons from '@/components/ui/icons';

export default function Page() {
  return (
    <div
      className={
        'flex w-full flex-col gap-12 pt-20 sm:pt-10 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-12 lg:gap-0 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:items-start 2xl:justify-start'
      }
    >
      <div className="prose prose-zinc flex h-full w-auto flex-col dark:prose-invert prose-p:my-3 prose-p:leading-normal lg:col-start-2 lg:col-end-7 2xl:flex-1">
        <div>
          <h1 className="m-0 align-baseline font-righteous text-base font-normal text-black dark:text-white">
            Diego C. Silva
          </h1>
          <h2 className="not-prose mt-1.5 text-xs leading-normal text-accent-foreground/60">
            Full-Stack Developer
          </h2>
        </div>

        <p className="align-baseline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline fill-current"
            width="21"
            height="21"
            viewBox="0 0 256 256"
          >
            <g>
              <path
                d="m213.27 104l-18-31.18a20 20 0 0 0-34.64 20l-28-48.5A20 20 0 0 0 98 64.31l-8-13.85a20 20 0 0 0-34.64 20l12 20.83l-1.17 1a20 20 0 0 0-29.49 25.88l38 65.83a80 80 0 0 0 138.57-80Zm-57.59 60.64l.17-.1l.14.24Z"
                opacity=".2"
              />
              <path d="m220.2 100l-18-31.18a28 28 0 0 0-47.3-1.92l-15.34-26.59a28 28 0 0 0-48.12-.63a28 28 0 0 0-43 34.78l3.34 5.79a28 28 0 0 0-22 41.92l38 65.82a87.46 87.46 0 0 0 53.43 41a88.56 88.56 0 0 0 22.92 3A88 88 0 0 0 220.2 100Zm-6.67 62.63A72 72 0 0 1 81.63 180l-38-65.82a12 12 0 0 1 20.79-12l22 38.1a8 8 0 1 0 13.85-8l-38-65.81a12 12 0 0 1 13.5-17.59a11.9 11.9 0 0 1 7.29 5.59l34 58.89a8 8 0 0 0 13.85-8l-26-45a12 12 0 0 1 20.78-12L160 107.78a48.08 48.08 0 0 0-11 61a8 8 0 0 0 13.86-8a32 32 0 0 1 11.71-43.71a8 8 0 0 0 2.93-10.93l-10-17.32a12 12 0 0 1 20.78-12l18 31.18a71.49 71.49 0 0 1 7.25 54.62Zm-29.26-132.7a8 8 0 0 1 9.8-5.66c15.91 4.27 29 14.11 36.86 27.73a8 8 0 0 1-13.86 8c-5.72-9.92-15.36-17.12-27.14-20.27a8 8 0 0 1-5.66-9.8ZM80.91 237a8 8 0 0 1-11.24 1.33c-11-8.69-20.11-19.58-28.6-34.28a8 8 0 0 1 13.86-8c7.44 12.88 15.27 22.32 24.65 29.72A8 8 0 0 1 80.91 237Z" />
            </g>
          </svg>
          Hello, welcome to my little corner on the web!
        </p>

        <p>
          I&#39;m a self-taught code solutions programmer, I love programming
          and I try to use the most <strong>software architecture</strong>,{' '}
          <strong>clean</strong> and <strong>maintainable code</strong>. I work
          with technologies from the{' '}
          <TechBadge href="https://www.javascript.com/">
            <Icons.DeviconJavascript className="size-3" />
            <span>Javascript</span>
          </TechBadge>
          ,{' '}
          <TechBadge href="https://www.typescriptlang.org/">
            <Icons.DeviconTypescript className="size-3" />
            <span>Typescript</span>
          </TechBadge>
          ,{' '}
          <TechBadge href="https://react.dev/">
            <Icons.DeviconReact className="size-3" />
            <span>React</span>
          </TechBadge>
          ,{' '}
          <TechBadge href="https://nextjs.org/">
            <Icons.DeviconNextjs className="size-3" />
            <span>Next</span>
          </TechBadge>
          ,{' '}
          <TechBadge href="https://www.java.com/">
            <Icons.DeviconJava className="size-3" />
            <span>Java</span>
          </TechBadge>{' '}
          and{' '}
          <TechBadge href="https://spring.io/">
            <Icons.DeviconSpring className="size-3" />
            <span>Spring Boot</span>
          </TechBadge>{' '}
          ecosystem.
        </p>

        <p className="align-baseline">
          I&#39;m always learning and here you can find out about the projects
          I&#39;ve completed and am working on, as well as details about my
          career and skills. I&#39;m always looking to improve, and you can
          follow my progress and what I&#39;m currently studying.
        </p>

        <p>
          I hope I can help you. I&#39;d love to hear your ideas and contribute
          whenever possible.
        </p>

        <small className="my-4 inline-flex items-center gap-1">
          <Icons.MdiWechat className="size-4" />
          <strong>Find me on</strong>
        </small>

        <div className="not-prose inline-flex gap-2.5">
          {fncSocialMedia().map((media, index) => (
            <Link
              key={index}
              href={media.href}
              target="_blank"
              aria-label={media.name}
            >
              <ToolTip message={media.name}>{media.icon}</ToolTip>
            </Link>
          ))}
        </div>
      </div>

      <div className="order-last mx-auto flex h-full w-full flex-col gap-8 sm:w-11/12 sm:p-2 md:order-none md:w-80 md:gap-2 md:p-0 lg:col-start-7 lg:col-end-12 lg:w-96 2xl:mx-5 2xl:shrink-0">
        <RecentWorkUnderDev className="h-auto border-border/50 bg-white/90 backdrop-blur-sm dark:bg-black/90" />
        <EmailSubscribe className="min-h-40 border-border/50 bg-white/90 backdrop-blur-sm dark:bg-black/90" />
      </div>

      <div className="prose prose-zinc dark:prose-invert prose-p:my-3 prose-p:leading-normal md:col-span-full md:mt-3 lg:col-start-2 lg:col-end-12 2xl:mt-0 2xl:flex-1">
        <small className="my-4 inline-flex items-center gap-1">
          <Icons.FluentEmojiHighContrastMagnifyingGlassTiltedLeft />
          <strong>I&#39;m in the loop</strong>
        </small>

        <div className="not-prose mt-3 inline-flex flex-wrap gap-4">
          {masteryTools('size-[20px]').map((tool, index) => (
            <ToolTip key={index} message={tool.toolName}>
              {tool.toolIcon}
            </ToolTip>
          ))}
        </div>
      </div>
    </div>
  );
}
