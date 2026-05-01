import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import { Children } from 'react';
import * as runtime from 'react/jsx-runtime';

const sharedComponents = {
  Image: (props: ImageProps) => {
    return <Image className="rounded-md" {...props} alt={props.alt ?? ''} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: (props: any) => {
    const href = props.href;

    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props.props}>
          {props.children}
        </Link>
      );
    }

    if (href.startsWith('#')) {
      return <a {...props.props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h1: (props: any) => {
    return <h2 {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: (props: any) => {
    const isTextOnly = Children.toArray(props.children).every(
      (child: unknown) => typeof child === 'string'
    );

    const finalClassName = isTextOnly
      ? `${props.className} before:invisible after:invisible bg-neutral-200 dark:bg-neutral-800 text-orange-400 font-light py-px px-1 rounded-sm`
      : props.className;

    return <code className={finalClassName} {...props} />;
  }
};

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  if (!code.trim()) return null;

  const Component = getMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
