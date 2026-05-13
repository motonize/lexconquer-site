import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Help, FAQs, profile management, and contact for the Lex Conquer mobile app.",
};

export default function SupportPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-wider text-gold-gradient">LEX CONQUER</Link>
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold-bright)]">← Back home</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20 prose-legal">
        <h1 className="font-display text-4xl font-semibold mb-2">Support</h1>
        <p className="text-[var(--muted)] text-base mb-8">
          Help, profile management, and contact information for Lex Conquer players.
        </p>
        <div className="divider-gold mb-10" />

        <h2>Contact us</h2>
        <p>
          For all support questions — bugs, account issues, billing, refunds, reports, or
          general feedback — email{" "}
          <a href="mailto:info@lexconquer.com">info@lexconquer.com</a>. We aim to respond within 2
          business days.
        </p>
        <p>
          When you contact us, please include:
        </p>
        <ul>
          <li>Your in-game display name</li>
          <li>The email address linked to your sign-in (Google or Apple)</li>
          <li>Your device (iPhone 15, Pixel 8, etc.) and OS version</li>
          <li>App version (open <strong>Profile Settings</strong> from the lobby and scroll to the bottom — the version is shown above the publisher line)</li>
          <li>A clear description of the issue and steps to reproduce, if applicable</li>
        </ul>

        <h2>Profile management</h2>

        <h3>Delete your profile</h3>
        <p>
          You can delete your Lex Conquer profile from inside the App at any time:
        </p>
        <ul>
          <li>Open <strong>Lex Conquer</strong> on your device</li>
          <li>Tap your <strong>display name</strong> (or the rank icon in the top-right corner) in the lobby to open <strong>Profile Settings</strong></li>
          <li>Scroll to the bottom and tap <strong>Delete Profile</strong></li>
          <li>Confirm. Your profile, game history, friend graph, and personal data are permanently removed from our systems</li>
        </ul>
        <p>
          If you cannot access the App to delete your profile (lost phone, profile locked,
          etc.), email <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> from the
          address linked to your sign-in and we will process the deletion within 7 business
          days.
        </p>

        <h3>Set chat preferences for new games</h3>
        <p>
          You can choose whether new games you join start with chat on or off:
        </p>
        <ul>
          <li>Open <strong>Profile Settings</strong> from the lobby</li>
          <li>Expand the <strong>Game Settings</strong> section</li>
          <li>Toggle <strong>Game Chat</strong> off to make new games start with chat muted</li>
        </ul>
        <p>
          This setting controls the default for newly created or joined games. Each individual
          game also has its own per-game chat toggle so you can mute or unmute conversations
          on a per-match basis.
        </p>

        <h3>Disable rewarded ad offers (Conqueror tier)</h3>
        <p>
          Conqueror-tier players can fully disable rewarded ad offers — the post-win
          double-coins prompt and the lobby coin pill&apos;s &ldquo;Watch Video&rdquo; option
          — for a completely ad-free experience:
        </p>
        <ul>
          <li>Open <strong>Profile Settings</strong> from the lobby</li>
          <li>Expand the <strong>Advertisements</strong> section</li>
          <li>Toggle <strong>Show Rewarded Ad Offers</strong> off</li>
        </ul>
        <p>
          With offers disabled, the post-win prompt no longer appears and tapping the lobby
          coin pill shows your balance and a direct link to buy coin packs (no ads).
        </p>
        <p>
          Conqueror-tier players also automatically see no banner or interstitial ads. The
          rewarded-ad toggle is the additional &ldquo;completely ad-free&rdquo; layer on top
          of that. Free-tier players cannot disable any ads; the toggle is shown but locked
          in Profile Settings.
        </p>

        <h3>Change your display name, rank theme, or background</h3>
        <p>
          Edit your display name in <strong>Profile Settings</strong> from the lobby. Change
          your rank theme and lobby background in the <strong>Armory</strong> (tap the Armory
          button on the lobby home screen). Display names must follow the content rules in our{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2>Frequently asked questions</h2>

        <h3>How do I sign in?</h3>
        <p>
          Lex Conquer uses Google Sign-In and Sign in with Apple. On first launch, tap your
          preferred provider and follow the prompt. We do not see, store, or have access to
          your password — authentication is handled by Google or Apple.
        </p>

        <h3>What&apos;s the difference between free and Conqueror?</h3>
        <p>
          Free play gives you full access to the core game on smaller grids, with up to 3
          players per match, and shows ads during play. The <strong>Conqueror</strong>{" "}
          one-time upgrade unlocks larger grids (up to 10×10), more players per match (up to
          6), all bot difficulties including Lex Pro, and ad-free play (when combined with the
          rewarded-ads opt-out). Conqueror is a one-time purchase, not a subscription.
        </p>

        <h3>How do I get Lex Coins?</h3>
        <p>You can obtain Lex Coins by:</p>
        <ul>
          <li>Purchasing coin packs (Handful, Pouch, Chest, Vault, or Treasury) through the App Store or Google Play</li>
          <li>Tapping the coin pill in the lobby and watching an opt-in rewarded video ad</li>
          <li>Winning matches — coins are awarded based on score and game mode</li>
          <li>Other in-game activities we may offer from time to time</li>
        </ul>
        <p>
          Lex Coins have no monetary value, are non-transferable, and are not redeemable for cash.
        </p>

        <h3>I purchased Conqueror or Lex Coins but don&apos;t see them.</h3>
        <p>
          Try these steps in order:
        </p>
        <ul>
          <li>Force-quit and reopen the App</li>
          <li>Open <strong>Profile Settings → Support & Legal → Restore Purchases</strong>. This forces the App Store and our servers to re-sync — the Conqueror entitlement re-applies, and any unprocessed coin-pack webhook events are replayed. Coins typically arrive within a few seconds after the restore completes.</li>
          <li>Confirm the purchase succeeded in your <strong>App Store account → Purchase History</strong> or <strong>Google Play → Order History</strong></li>
          <li>If still missing, email <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> with your transaction ID and we will investigate and credit you manually if needed</li>
        </ul>

        <h3>How do I request a refund?</h3>
        <p>
          Refunds are handled by Apple or Google, not by Motonize:
        </p>
        <ul>
          <li>
            <strong>iOS:</strong>{" "}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
          </li>
          <li>
            <strong>Android:</strong> open the Google Play Store → Menu → Order History → tap
            the purchase → Refund (or Request a refund)
          </li>
        </ul>
        <p>
          We will provide reasonable assistance with refund-related questions but cannot grant
          or deny refunds directly.
        </p>

        <h3>How do I report a player or content?</h3>
        <p>
          Tap the player&apos;s avatar or message to open the report dialog and choose a
          reason. Reports go to our moderation queue; we typically review serious reports
          within 24 hours and may take action ranging from a warning to permanent ban
          depending on severity.
        </p>
        <p>
          You can also email <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> with
          screenshots and the offending player&apos;s display name.
        </p>

        <h3>I&apos;m getting matched with bots — why?</h3>
        <p>
          When public matchmaking can&apos;t find enough humans within a reasonable wait time,
          empty slots may be filled by bots (Lex Jr., Lex, or Lex Pro). To play strictly
          against humans, create a private match inside one of your <strong>Groups</strong>{" "}
          and invite specific friends, or wait longer in public matchmaking.
        </p>

        <h3>What&apos;s RP and how do I rank up?</h3>
        <p>
          RP (Rank Points) tracks your performance over time. You earn RP for tiles claimed,
          base captures, and certain mode multipliers (Blitz earns more; beating Lex Pro earns
          more; easy bots earn less). Accumulating RP advances you through ten ranks from
          <strong> Recruit</strong> to <strong>Conqueror Supreme</strong>.
        </p>

        <h3>Will my game data sync across devices?</h3>
        <p>
          Yes. Your account, progress, and entitlements are tied to your Google or Apple
          sign-in. Sign in on a new device with the same account and your data restores.
          In-app purchases follow the same rule, subject to the App Store / Google Play
          family-sharing rules of the platform.
        </p>

        <h3>I lost progress / my profile looks empty.</h3>
        <p>
          Most likely you&apos;re signed into a different account than expected. Open{" "}
          <strong>Profile Settings</strong> and scroll to the <strong>Account Connection</strong>{" "}
          section near the bottom to see which sign-ins (Apple, Google, Game Center) are linked
          to the current profile. If you previously used Google but the App is now signed in
          with Apple (or vice versa), those are separate profiles. Log out and sign back in
          with the original provider.
        </p>

        <h3>Push notifications aren&apos;t arriving.</h3>
        <p>
          Check the following:
        </p>
        <ul>
          <li>Notification permission is granted in your device&apos;s system settings</li>
          <li>Open <strong>Profile Settings → Notification Settings</strong> and confirm <strong>Push Notifications</strong> is on</li>
          <li>Per-game mute is off (some lobbies and games can be muted individually — look for the bell icon)</li>
          <li>Your device is not in Do Not Disturb / Focus mode</li>
        </ul>

        <h2>About</h2>
        <p>
          Lex Conquer is published by <strong>Motonize LLC</strong>, a games studio based in
          New York. Learn more about the studio at{" "}
          <a href="https://motonize.com">motonize.com</a>.
        </p>
        <p>
          For legal information, see our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-[var(--muted)]">
        <div>©  {new Date().getFullYear()} Lex Conquer · Published by{" "}
          <a href="https://motonize.com" className="font-display tracking-wider text-gold-gradient">MOTONIZE LLC</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/lexconquer" target="_blank" rel="noopener noreferrer" aria-label="Follow Lex Conquer on Instagram" className="hover:text-[var(--gold-bright)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <Link href="/privacy" className="hover:text-[var(--gold-bright)]">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--gold-bright)]">Terms</Link>
          <Link href="/support" className="hover:text-[var(--gold-bright)]">Support</Link>
          <a href="mailto:info@lexconquer.com" className="hover:text-[var(--gold-bright)]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
