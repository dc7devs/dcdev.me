import { SVGProps } from "react";

export function EmailSubscribeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 8a3 3 0 100-6 3 3 0 000 6M5.25 4h11.362a4.496 4.496 0 001.894 4.746L12 12.153l-9.984-5.23a3.25 3.25 0 013.048-2.918zm7.098 9.664l8.03-4.207A4.54 4.54 0 0022 9.388v7.362a3.25 3.25 0 01-3.066 3.245L18.75 20H5.25a3.25 3.25 0 01-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 00.696 0"
      />
    </svg>
  );
}