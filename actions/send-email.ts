'use server';

import React from 'react';
import { resend } from '@/lib/resend';
import { formSchema } from '@/schemas/email-form-schema';

import ContactFormEmailTemplate from '@/emails/contact-form/contact-form-email-template';

export const sendEmail = async (formData: FormData) => {
  try {
    const { message, name, email } = formSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });

    const { error } = await resend.emails.send({
      from: 'Contact form dcdev <noreply@dcdev.me>',
      to: ['diegocaetano444@outlook.com'],
      subject: 'Messagem do formulário de contato',
      reply_to: email,
      react: React.createElement(ContactFormEmailTemplate, {
        name,
        message,
        email
      })
    });

    if (error) console.log(error);
  } catch (error) {
    console.error('Error validating form data:', error);

    return {
      errors: 'Invalid form data'
    };
  }
};
