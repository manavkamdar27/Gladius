export default function Footer() {
  return (
    <footer className="bg-teal-deep px-5 py-10 text-parchment/70 md:px-16 lg:px-24">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <span className="font-serif text-lg font-bold tracking-wider text-parchment">
          GLADIUS<em className="not-italic text-gold ml-0.5">LAW</em>
        </span>
        <p className="max-w-2xl text-[0.76rem]">
          © {new Date().getFullYear()} Gladius Law, Mumbai. As per Bar Council
          of India rules, this site is for information only and does not
          constitute solicitation or advertisement.
        </p>
      </div>
    </footer>
  );
}
