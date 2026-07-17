import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Fallback landing page for game-invite links (lexconquer.com/join?code=XXXXXX).
//
// Users WITH the app installed never see this page — the Universal Link
// (apple-app-site-association + Associated Domains entitlement) opens the app
// directly into its join flow. This page is for everyone else: it shows the
// invite code and walks them through install → open → Join with Code.
const APP_STORE_URL = "https://apps.apple.com/us/app/lex-conquer/id6766434957";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { code } = await searchParams;
  const normalized = (code ?? "").trim().toUpperCase();
  return {
    title: "Join a Game",
    description: "You've been invited to a Lex Conquer battle. Install the app and join with your invite code.",
    // Invite codes are ephemeral — keep these pages out of search results.
    robots: { index: false, follow: false },
    // Safari smart-app-banner: shows a native "Open in App Store" strip, and an
    // OPEN button instead if the app is already installed (pre-AASA fallback).
    itunes: {
      appId: "6766434957",
      appArgument: normalized
        ? `https://lexconquer.com/join?code=${normalized}`
        : "https://lexconquer.com/join",
    },
  };
}

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge"
      aria-label="Download Lex Conquer on the App Store"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.04c-.03-3.05 2.49-4.51 2.6-4.59-1.42-2.07-3.62-2.36-4.4-2.39-1.87-.19-3.65 1.1-4.6 1.1-.95 0-2.42-1.07-3.97-1.04-2.04.03-3.92 1.19-4.97 3.01-2.12 3.67-.54 9.1 1.52 12.07 1.01 1.46 2.21 3.09 3.79 3.03 1.52-.06 2.1-.99 3.94-.99s2.36.99 3.97.96c1.64-.03 2.68-1.48 3.69-2.94.86-1.24 1.55-2.6 2.04-4.06-2.51-.95-3.62-3.66-3.61-3.16zM14.13 3.7c.83-1.01 1.39-2.41 1.24-3.81-1.2.05-2.65.8-3.51 1.81-.77.89-1.45 2.32-1.27 3.69 1.34.1 2.71-.68 3.54-1.69z" />
      </svg>
      <div className="store-badge-label">
        <span className="small">Free on the</span>
        <span className="large">App Store</span>
      </div>
    </a>
  );
}

export default async function JoinPage({ searchParams }: Props) {
  const { code } = await searchParams;
  const normalized = (code ?? "").trim().toUpperCase();
  const hasCode = normalized.length > 0;

  return (
    <div className="flex flex-col flex-1">
      {/* Top nav — same shell as the home page */}
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
            <Link href="/support" className="hover:text-[var(--gold-bright)] transition-colors">Support</Link>
          </div>
        </nav>
      </header>

      <main className="bg-glow flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center flex flex-col items-center gap-8">
          <Image
            src="/lex-conquer-icon.png"
            alt="Lex Conquer app icon"
            width={96}
            height={96}
            className="rounded-2xl shadow-2xl"
            priority
          />

          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-4xl tracking-wide text-gold-gradient">
              You&apos;re Invited to Battle
            </h1>
            <p className="text-[var(--muted)] text-base sm:text-lg">
              A friend challenged you to a game of Lex Conquer — the multiplayer
              word-territory game. Spell words, claim tiles, conquer the board.
            </p>
          </div>

          {hasCode ? (
            <div className="w-full rounded-2xl border border-[var(--border)] bg-black/30 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-2">
                Your invite code
              </p>
              <p className="font-mono text-4xl sm:text-5xl font-bold tracking-[0.3em] text-[var(--gold-bright)] select-all">
                {normalized}
              </p>
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-[var(--border)] bg-black/30 px-6 py-5">
              <p className="text-sm text-[var(--muted)]">
                This invite link is missing its code — ask your friend to share
                the game link again, or to read you the 6-character code from
                their game lobby.
              </p>
            </div>
          )}

          <AppStoreBadge />

          <ol className="text-left text-sm sm:text-base text-[var(--muted)] space-y-3 w-full max-w-md mx-auto">
            <li className="flex gap-3">
              <span className="font-display text-[var(--gold-bright)] shrink-0">1.</span>
              <span>Install <strong className="text-white">Lex Conquer</strong> from the App Store (or open it if you already have it).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-[var(--gold-bright)] shrink-0">2.</span>
              <span>Sign in, then tap <strong className="text-white">Join with Code</strong> in the lobby.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-[var(--gold-bright)] shrink-0">3.</span>
              <span>
                Enter {hasCode ? (
                  <>code <strong className="font-mono text-[var(--gold-bright)]">{normalized}</strong></>
                ) : (
                  "your invite code"
                )} and jump into the match.
              </span>
            </li>
          </ol>

          <p className="text-xs text-[var(--muted)]/70 max-w-md">
            Already have the app? Tapping the invite link opens your game
            directly — no code needed.
          </p>
        </div>
      </main>

      {/* Footer — minimal, matching the site */}
      <footer className="w-full border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[var(--muted)]">
          <Link href="/privacy" className="hover:text-[var(--gold-bright)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--gold-bright)] transition-colors">Terms</Link>
          <Link href="/support" className="hover:text-[var(--gold-bright)] transition-colors">Support</Link>
        </div>
      </footer>
    </div>
  );
}
