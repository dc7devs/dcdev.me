'use client';
import { useState } from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '@/actions/send-email';
import { formSchema } from '@/schemas/email-form-schema';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Icons from '@/components/ui/icons';

export function CustomForm() {
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSending(true);
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    const response = await sendEmail(formData);

    if (response?.errors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Your message wasn't sent, there was an internal error`
      });

      reset();
      setIsSending(false);
    } else {
      toast({
        title: 'Success',
        description: 'Your message has been sent successfully.'
      });

      reset();
      setIsSending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex grid-cols-2 flex-col gap-5 md:grid"
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-1 col-start-1">
              <FormLabel>Name</FormLabel>

              <FormControl>
                <Input placeholder="Jhon" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-1 col-start-2">
              <FormLabel>E-mail</FormLabel>

              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Message</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="So, what's your idea?"
                  className="min-h-28 resize-y"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className={'flex items-center justify-center gap-1.5 md:w-max'}
          type="submit"
          disabled={isSending}
        >
          {isSending && <ReloadIcon className="mr-.5 h-4 w-4 animate-spin" />}
          <span className="align-middle">
            {isSending ? 'Sending...' : 'Submit'}
          </span>
          {!isSending && <Icons.MingcuteSendPlaneFill />}
        </Button>
      </form>
    </Form>
  );
}
