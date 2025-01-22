'use client'

import { Button } from "@/components/ui/button"

export function ContactForm() {
  return (
    <form 
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        window.location.href = `mailto:seancorcoran45@gmail.com?subject=ScaleYourself Contact Form&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      }}
    >
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        placeholder="Email"
        type="email"
        name="email"
        required
      />
      <textarea
        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
        placeholder="Message"
        name="message"
        required
      />
      <Button type="submit">Send Message</Button>
    </form>
  )
} 