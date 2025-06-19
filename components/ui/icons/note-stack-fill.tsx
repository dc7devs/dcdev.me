import { SVGProps } from 'react';

export function NoteStackFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 19.385V9.61q0-.672.475-1.14Q8.95 8 9.621 8h9.764q.67 0 1.143.472q.472.472.472 1.143v6.962L16.577 21H9.615q-.67 0-1.143-.472Q8 20.056 8 19.385M3.025 6.596q-.13-.671.258-1.208q.388-.538 1.06-.669l9.619-1.694q.67-.13 1.208.258q.538.388.668 1.06l.212 1.272H9.615q-1.65 0-2.825 1.175T5.615 9.615v7.781q-.342-.167-.581-.475q-.24-.308-.315-.706zM20 16h-4v4z"
      ></path>
    </svg>
  );
}
