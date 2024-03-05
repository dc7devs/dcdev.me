import { CustomForm } from '../../components/email/form';

export default function ContactPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc dark:prose-invert prose-p:leading-normal prose-p:my-3 mx-auto text-center mb-14">
        <h1 className="text-black dark:text-white font-medium text-xl px-2 rounded-sm bg-accent max-w-max mx-auto">
          Contact-me
        </h1>

        <p>
          Contact me for collaborations, consultations or just to say hello!
          I&#39;m open to new ideas and contact opportunities. Fill in the form
          below or send an e-mail to{' '}
          <span className="underline underline-offset-2">
            diegocaetano444@outlook.com
          </span>
          . I can&#39;t wait to hear your ideas!
        </p>
      </div>

      <div className="max-w-3xl mb-20 p-5 mx-auto prose prose-zinc dark:prose-invert prose-p:leading-normal relative bg-white dark:bg-black shadow-md">
        <CustomForm />
      </div>
    </div>
  );
}
