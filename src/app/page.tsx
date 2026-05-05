import Image from "next/image";
import Link from "next/link";

const screenshots = [
  { src: "/screenshots/01-splash.png", caption: "Open the game" },
  { src: "/screenshots/02-lobby.png", caption: "Find your battle" },
  { src: "/screenshots/03-pick-battlefield.png", caption: "Pick the battlefield" },
  { src: "/screenshots/04-gameplay.png", caption: "Spell to claim" },
  { src: "/screenshots/05-promotion.png", caption: "Rise through the ranks" },
  { src: "/screenshots/06-themes.png", caption: "Make it yours" },
  { src: "/screenshots/07-groups.jpeg", caption: "Build your faction" },
  { src: "/screenshots/08-tournaments.PNG", caption: "Run your own tournaments" },
];

const features = [
  { label: "Players per match", value: "2–6" },
  { label: "Grid sizes", value: "5×5 to 10×10" },
  { label: "Modes", value: "Blitz · Campaign · Capture-the-Base" },
  { label: "Platforms", value: "iOS · Android" },
];

function StoreBadge({ kind, available = false }: { kind: "apple" | "google"; available?: boolean }) {
  const isApple = kind === "apple";
  return (
    <div className={`store-badge ${available ? "" : "opacity-60 cursor-not-allowed"}`} aria-disabled={!available}>
      {isApple ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.04c-.03-3.05 2.49-4.51 2.6-4.59-1.42-2.07-3.62-2.36-4.4-2.39-1.87-.19-3.65 1.1-4.6 1.1-.95 0-2.42-1.07-3.97-1.04-2.04.03-3.92 1.19-4.97 3.01-2.12 3.67-.54 9.1 1.52 12.07 1.01 1.46 2.21 3.09 3.79 3.03 1.52-.06 2.1-.99 3.94-.99s2.36.99 3.97.96c1.64-.03 2.68-1.48 3.69-2.94.86-1.24 1.55-2.6 2.04-4.06-2.51-.95-3.62-3.66-3.61-3.16zM14.13 3.7c.83-1.01 1.39-2.41 1.24-3.81-1.2.05-2.65.8-3.51 1.81-.77.89-1.45 2.32-1.27 3.69 1.34.1 2.71-.68 3.54-1.69z"/>
        </svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.5 2.5v19l11-9.5-11-9.5zm14.4 5.4l-3-1.7L13 8l1.9 1.7 3-1.8zm-3 4.6l3-1.7-3-1.8L13 11l1.9 1.5zM3.7 22.4l11.2-9.7L17 14l-13.3 8.4z"/>
        </svg>
      )}
      <div className="store-badge-label">
        <span className="small">{available ? (isApple ? "Download on the" : "Get it on") : "Coming soon"}</span>
        <span className="large">{isApple ? "App Store" : "Google Play"}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Top nav */}
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/lex-conquer-icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-display text-base tracking-wider text-gold-gradient">LEX CONQUER</span>
          </Link>
          <div className="hidden sm:flex items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--gold-bright)] transition-colors">The Game</a>
            <a href="#screenshots" className="hover:text-[var(--gold-bright)] transition-colors">Screenshots</a>
            <Link href="/support" className="hover:text-[var(--gold-bright)] transition-colors">Support</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-glow">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
          <div className="inline-block mb-8">
            <Image
              src="/lex-conquer-icon.png"
              alt="Lex Conquer"
              width={144}
              height={144}
              className="rounded-3xl shadow-2xl mx-auto"
              priority
            />
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-wide text-gold-gradient leading-tight">
            Lex Conquer
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[var(--foreground)] font-light">
            Spell. Claim. Conquer.
          </p>
          <div className="divider-gold mt-10 mb-10 mx-auto w-32" />
          <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            A multiplayer word-territory game. Spell on a grid to claim tiles, fortify bases, and
            outlast up to five opponents in real-time Blitz or turn-based Campaigns. Form private
            factions to play with family and friends, run your own tournaments, or take on the
            global ladder.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <StoreBadge kind="apple" />
            <StoreBadge kind="google" />
          </div>
          <p className="mt-4 text-xs text-[var(--muted)]/70 uppercase tracking-widest">
            Launching 2026
          </p>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {features.map((f) => (
              <div key={f.label} className="bg-[var(--background)] px-5 py-5 sm:py-6">
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--gold-bright)] mb-2">
                  {f.label}
                </div>
                <div className="text-sm sm:text-base text-[var(--foreground)] font-medium">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / The Game */}
      <section id="about" className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
            The game
          </h2>
          <div className="divider-gold mb-10 w-24" />
          <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed">
            <p>
              <span className="text-[var(--foreground)] font-medium">It's a word game with
              territory.</span> You spell words on an 8×8 (or up to 10×10) grid of letter tiles.
              Each word you play claims those tiles in your color. Surround tiles with your color
              and they fortify — defended bases your rivals can't break through.
            </p>
            <p>
              <span className="text-[var(--foreground)] font-medium">It's a strategy game with
              vocabulary.</span> Find longer words, lock down corners, push into your opponents'
              territory, time your moves to crack their fortifications. Capture-the-Base mode
              flips it: defend your stronghold while raiding theirs.
            </p>
            <p>
              <span className="text-[var(--foreground)] font-medium">It's social — privately or
              publicly.</span> Play turn-based campaigns over hours or days against friends.
              Battle in real-time Blitz mode against the public ladder. Build a private faction
              with family or your group, chat between matches, and run your own bracket
              tournaments inside it.
            </p>
            <p>
              Three difficulty tiers of AI opponents — Lex Jr., Lex, and Lex Pro — let you
              practice solo or fill empty seats. Ten ranks of progression keep the meta-game
              moving long after the first match.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
            Screenshots
          </h2>
          <div className="divider-gold mb-10 w-24" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((s) => (
              <div key={s.src} className="card card-hover overflow-hidden">
                <div className="relative aspect-[1206/2622] w-full overflow-hidden bg-black">
                  <Image
                    src={s.src}
                    alt={s.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-4 border-t border-[var(--border)]">
                  <p className="text-sm font-medium text-[var(--foreground)]">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] bg-glow">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Ready to conquer?
          </h2>
          <p className="text-[var(--muted)] mb-10 max-w-xl mx-auto">
            Lex Conquer launches in 2026 on iOS and Android. Be among the first to play.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <StoreBadge kind="apple" />
            <StoreBadge kind="google" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <span>©  {new Date().getFullYear()} Lex Conquer · Published by</span>
            <a
              href="https://motonize.com"
              className="font-display tracking-wider text-gold-gradient hover:opacity-80"
            >
              MOTONIZE LLC
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--gold-bright)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--gold-bright)] transition-colors">
              Terms
            </Link>
            <Link href="/support" className="hover:text-[var(--gold-bright)] transition-colors">
              Support
            </Link>
            <a
              href="mailto:info@lexconquer.com"
              className="hover:text-[var(--gold-bright)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
