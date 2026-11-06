"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { buildQuoteLink } from "@/services/whatsapp.service";

const INITIAL = { name: "", eventType: "", children: "", message: "" };

/** Formulário que organiza o pedido e abre o WhatsApp com a mensagem pronta. */
export function ContactForm() {
  const [values, setValues] = useState(INITIAL);

  const update =
    (field: keyof typeof INITIAL) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(buildQuoteLink(values), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Input
        id="name"
        label="Seu nome"
        required
        autoComplete="name"
        placeholder="Como podemos te chamar?"
        value={values.name}
        onChange={update("name")}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="eventType"
          label="Tipo de evento"
          placeholder="Ex.: aniversário"
          value={values.eventType}
          onChange={update("eventType")}
        />
        <Input
          id="children"
          label="Quantidade de crianças"
          inputMode="numeric"
          placeholder="Ex.: 15"
          value={values.children}
          onChange={update("children")}
        />
      </div>
      <Textarea
        id="message"
        label="Detalhes do evento"
        placeholder="Data, local, horário e o que você imagina para a festa"
        value={values.message}
        onChange={update("message")}
      />
      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send className="h-5 w-5" aria-hidden />
        Enviar pelo WhatsApp
      </Button>
    </form>
  );
}
