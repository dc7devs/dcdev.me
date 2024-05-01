import { ReactNode } from 'react';

export default function ProjectsSheetLayout({
  children,
  sheet
}: {
  children: ReactNode;
  sheet: ReactNode;
}) {
  return (
    <>
      {children}
      {sheet}
    </>
  );
}
