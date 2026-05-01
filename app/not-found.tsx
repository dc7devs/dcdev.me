import GoToSpecificRouteBtn from '@/components/go-to-specific-route-button';
import { Sketchs } from '@/components/ui/sketchs';

export default function Custom404() {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-h3:mt-0 prose-p:leading-normal mx-auto my-20 h-5/6 text-center dark:brightness-75">
      <Sketchs.Sketch404Img className="dark:fill-primary mx-auto fill-zinc-700" />

      <h2 className="dark:text-primary -mt-3 text-zinc-700">Page Not Found</h2>

      <p>wait, you seem to have lost your way a bit!</p>

      <GoToSpecificRouteBtn
        className="dark:bg-primary mt-5 bg-zinc-700 hover:bg-zinc-700/90 dark:hover:backdrop-brightness-125"
        href="/"
      >
        Go to home page
      </GoToSpecificRouteBtn>
    </div>
  );
}
