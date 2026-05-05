import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Help, FAQs, account management, and contact for the Lex Conquer mobile app.",
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
          Help, account management, and contact information for Lex Conquer players.
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
          <li>App version (find it in <strong>Profile → Settings → About</strong>)</li>
          <li>A clear description of the issue and steps to reproduce, if applicable</li>
        </ul>

        <h2>Account management</h2>

        <h3>Delete your account</h3>
        <p>
          You can delete your Lex Conquer account from inside the App at any time:
        </p>
        <ul>
          <li>Open <strong>Lex Conquer</strong> on your device</li>
          <li>Go to <strong>Profile → Settings</strong></li>
          <li>Scroll to the bottom and tap <strong>Delete Account</strong></li>
          <li>Confirm. Your account, profile, game history, friend graph, and personal data are permanently removed from our systems</li>
        </ul>
        <p>
          If you cannot access the App to delete your account (lost phone, account locked,
          etc.), email <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> from the
          address linked to your sign-in and we will process the deletion within 7 business
          days.
        </p>

        <h3>Disable chat</h3>
        <p>
          You can fully disable chat at any time:
        </p>
        <ul>
          <li>Go to <strong>Profile → Settings</strong></li>
          <li>Toggle <strong>Chat</strong> off</li>
        </ul>
        <p>
          When chat is disabled, you cannot send messages and you do not see messages from
          other players in any context — in-game, group/faction, or friend-to-friend. You can
          re-enable chat at any time.
        </p>

        <h3>Disable rewarded ad offers</h3>
        <p>
          Lex Conquer may offer you the opportunity to watch a short video ad in exchange for
          in-game Coins. This is opt-in and can be disabled at any time:
        </p>
        <ul>
          <li>Go to <strong>Profile → Settings</strong></li>
          <li>Toggle <strong>Rewarded Ads</strong> off</li>
        </ul>
        <p>
          Paid (Conqueror) users with rewarded ads disabled see no ads at all. Free-tier users
          will continue to see standard banner and interstitial ads even with rewarded ads
          disabled.
        </p>

        <h3>Change your display name or avatar</h3>
        <p>
          Edit your display name and avatar in <strong>Profile</strong> from the home screen.
          Display names must follow the content rules in our{" "}
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

        <h3>How do I get Coins?</h3>
        <p>You can obtain Coins by:</p>
        <ul>
          <li>Purchasing coin packs through the App Store or Google Play</li>
          <li>Watching opt-in rewarded video ads (available when Rewarded Ads are enabled in Profile Settings)</li>
          <li>Other in-game activities we may offer from time to time</li>
        </ul>
        <p>
          Coins have no monetary value, are non-transferable, and are not redeemable for cash.
        </p>

        <h3>I purchased Conqueror but don&apos;t see the features.</h3>
        <p>
          Try these steps in order:
        </p>
        <ul>
          <li>Force-quit and reopen the App</li>
          <li>Go to <strong>Profile → Settings → Restore Purchases</strong> (Conqueror entitlement is verified through RevenueCat and should re-appear)</li>
          <li>Confirm the purchase succeeded in your <strong>App Store account → Purchase History</strong> or <strong>Google Play → Order History</strong></li>
          <li>If still missing, email <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> with your transaction ID and we will investigate</li>
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
          against humans, create a private match in your <strong>faction</strong> and invite
          specific friends, or wait longer in public matchmaking. Hosts can also lock a match
          to <strong>Humans Only</strong> when creating it.
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

        <h3>I lost progress / my account looks empty.</h3>
        <p>
          Most likely you&apos;re signed into a different account than expected. Check{" "}
          <strong>Profile → Settings → Account</strong> to see which sign-in is active. If you
          previously used Google but the App is now signed in with Apple (or vice versa),
          those are separate accounts. Sign out and back in with the original provider.
        </p>

        <h3>Push notifications aren&apos;t arriving.</h3>
        <p>
          Check the following:
        </p>
        <ul>
          <li>Notification permission is granted in your device&apos;s system settings</li>
          <li>Notifications are enabled in <strong>Profile → Settings → Notifications</strong></li>
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
          <Link href="/privacy" className="hover:text-[var(--gold-bright)]">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--gold-bright)]">Terms</Link>
          <Link href="/support" className="hover:text-[var(--gold-bright)]">Support</Link>
          <a href="mailto:info@lexconquer.com" className="hover:text-[var(--gold-bright)]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
