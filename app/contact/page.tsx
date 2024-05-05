'use client';
import { memo } from 'react';
import { CustomForm } from '@/components/email/form';

export default function ContactPage() {
  return (
    <div className="w-full pt-14 sm:pt-10">
      <div className="prose prose-zinc mx-auto mb-14 text-center dark:prose-invert prose-p:my-3 prose-p:leading-normal">
        <h1 className="mx-auto max-w-max rounded-sm bg-accent px-2 text-xl font-medium text-black dark:text-white">
          Contact-me
        </h1>

        <Description />
      </div>

      <div className="prose prose-zinc relative mx-auto mb-20 max-w-3xl bg-white p-5 shadow-md dark:prose-invert prose-p:leading-normal dark:bg-black">
        <CustomForm />
      </div>
    </div>
  );
}

const Description = memo(function m() {
  return (
    <p>
      Contact me for collaborations, consultations or just to say hello! I&#39;m
      open to new ideas and contact opportunities. Fill in the form below or
      send an e-mail to{' '}
      <span className="underline underline-offset-2">
        diegocaetano444@outlook.com
      </span>
      . I can&#39;t wait to hear your ideas!
    </p>
  );
});
