export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        Contact
      </h1>

      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Feel free to reach out if you want to discuss projects, opportunities
        or just say hello.
      </p>

      <a
        href="mailto:joao.henrique.vale7@gmail.com"
        className="
          inline-block rounded-md px-5 py-2 text-sm font-medium
          border border-neutral-300 dark:border-neutral-700
          text-neutral-800 dark:text-neutral-200
          hover:bg-neutral-100 dark:hover:bg-neutral-800
          transition
        "
      >
        Send Email
      </a>
    </section>
  );
}
