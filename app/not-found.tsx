import GoToSpecificRouteBtn from '@/components/go-to-specific-route-button';
import { Sketchs } from '@/components/ui/sketchs';

export default function Custom404() {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-h3:mt-0 my-20 mx-auto text-center h-5/6 dark:brightness-75">
      <Sketchs.Sketch404Img className="mx-auto fill-zinc-700 dark:fill-primary" />

      <h2 className="-mt-3 text-zinc-700 dark:text-primary">Page Not Found</h2>

      <p>wait, you seem to have lost your way a bit!</p>

      <GoToSpecificRouteBtn
        className="mt-5 bg-zinc-700 hover:bg-zinc-700/90 dark:bg-primary dark:hover:backdrop-brightness-125"
        href="/"
      >
        Go to home page
      </GoToSpecificRouteBtn>
    </div>
  );
}
