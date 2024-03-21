import { ReactNode } from 'react';

export const Accordion = ({
  summary,
  children,
}: {
  summary: string;
  children?: ReactNode;
}) => {
  return (
    <details className="Accordion">
      <summary>{summary}</summary>
      <section>{children}</section>
    </details>
  );
};
