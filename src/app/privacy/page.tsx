import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Lex Conquer mobile app — what we collect, how we use it, and your controls.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-wider text-gold-gradient">LEX CONQUER</Link>
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold-bright)]">← Back home</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20 prose-legal">
        <h1 className="font-display text-4xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-[var(--muted)] text-sm mb-8">Last updated: April 30, 2026</p>
        <div className="divider-gold mb-10" />

        <p>
          This Privacy Policy describes how <strong>Motonize LLC</strong> (&ldquo;Motonize,&rdquo;
          &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, shares, and
          protects information about you when you use the <strong>Lex Conquer</strong> mobile
          application (the &ldquo;App&rdquo;) on iOS and Android. It applies to the App only.
          For the studio&apos;s company website, see{" "}
          <a href="https://motonize.com/privacy">motonize.com/privacy</a>.
        </p>

        <p>
          By using the App, you agree to the collection and use of information described here.
          If you do not agree, please do not use the App.
        </p>

        <h2>1. Information we collect</h2>

        <h3>1.1 Account information (you provide via sign-in)</h3>
        <p>
          To create an account, we use third-party sign-in providers — currently{" "}
          <strong>Google Sign-In</strong>, <strong>Sign in with Apple</strong>, and (on iOS) Apple{" "}
          <strong>Game Center</strong>. When you sign in, we receive:
        </p>
        <ul>
          <li>Your email address (Apple may provide a private relay address that forwards to your real one)</li>
          <li>Your name as registered with the provider (optional with Apple)</li>
          <li>A unique provider account identifier</li>
          <li>For Game Center: your Game Center player ID and alias (display name)</li>
        </ul>
        <p>
          We do not see, store, or have access to your password for those accounts. We use the
          information above to create and identify your Lex Conquer account.
        </p>

        <h3>1.2 Profile and gameplay data (stored in Firebase Firestore)</h3>
        <p>
          As you use the App, we store information including:
        </p>
        <ul>
          <li>
            <strong>Profile:</strong> display name (chosen by you), rank theme, settings
            preferences (chat on/off, bonus coin offers on/off, music on/off, badge preferences),
            tier (free or paid)
          </li>
          <li>
            <strong>Game data:</strong> match records (players, scores, words played, tiles
            claimed, base captures), tournament participation, group memberships, performance
            ranks (RP), achievements
          </li>
          <li>
            <strong>Social graph:</strong> friends list, friend requests, group membership
          </li>
          <li>
            <strong>Chat content:</strong> messages you send and receive in in-game, group, and
            friend-to-friend chats — collected only when chat is <strong>not disabled</strong> in
            your Profile Settings
          </li>
        </ul>

        <h3>1.3 Push notification tokens</h3>
        <p>
          If you grant notification permission, we store the device token issued by Apple Push
          Notification service (APNs) or Google Firebase Cloud Messaging (FCM) so we can deliver
          notifications about your turn, invitations, friend activity, and match outcomes. You
          can revoke notification permission at any time in your device settings; doing so does
          not delete the token immediately, but it stops being usable for delivery.
        </p>

        <h3>1.4 Purchase information</h3>
        <p>
          When you make an in-app purchase (such as the Conqueror lifetime upgrade or Lex
          Coin packs), the transaction is processed by <strong>Apple App Store</strong> or{" "}
          <strong>Google Play</strong>. We use <strong>RevenueCat</strong> as our subscription
          and entitlement service to verify and grant entitlements. We receive:
        </p>
        <ul>
          <li>Which product you purchased and when</li>
          <li>Your entitlement status (e.g., Conqueror tier active)</li>
          <li>Transaction identifiers from the App Store / Google Play</li>
        </ul>
        <p>
          <strong>We do not see, store, or have access to your payment method, card details,
          billing address, or any financial information.</strong> All payments go directly to
          Apple or Google.
        </p>

        <h3>1.5 Advertising</h3>
        <p>
          The App displays ads served by <strong>Google AdMob</strong> in two scenarios:
        </p>
        <ul>
          <li>
            <strong>Free tier passive ads:</strong> users on the free tier see banner and
            interstitial ads during normal play.
          </li>
          <li>
            <strong>Opt-in rewarded video ads:</strong> users on any tier (free or paid) may
            choose to watch a rewarded video ad to earn in-game Lex Coins. This is voluntary
            and controlled by a setting in <strong>Profile Settings → Advertisements → Bonus
            Coin Offers</strong>. Paid users with this setting disabled see no ads at all.
          </li>
        </ul>
        <p>
          AdMob may collect and use your device&apos;s advertising identifier (Apple IDFA on
          iOS, Android Advertising ID on Android), approximate location derived from IP, and
          ad-interaction data to serve and measure ads. On iOS, App Tracking Transparency (ATT)
          requires us to ask your permission before using identifiers for tracking; if you
          decline, ads will be non-personalized. AdMob&apos;s data practices are governed by
          Google&apos;s Privacy Policy:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>.
        </p>

        <h3>1.6 Analytics and diagnostics</h3>
        <p>
          We use <strong>Firebase Analytics</strong> (Google) to understand how the App is used
          in aggregate — which features are popular, where users encounter issues, and how
          performance varies across devices. Firebase Analytics collects:
        </p>
        <ul>
          <li>Event data (screens viewed, actions taken)</li>
          <li>Device characteristics (model, operating system version, language, region)</li>
          <li>Approximate location derived from IP (typically country level)</li>
          <li>App version, install source, session duration</li>
        </ul>
        <p>
          We may use <strong>Firebase Crashlytics</strong> to receive automatic crash reports
          when the App fails. Crash reports include device state at the time of the crash and a
          stack trace, but do not include personal content or chat messages.
        </p>

        <h3>1.7 Game Center (iOS only, when enabled)</h3>
        <p>
          On iOS, the App may integrate with Apple <strong>Game Center</strong> for
          achievements, leaderboards, and player identity. If you sign in to Game Center, your
          Game Center player ID may be associated with your Lex Conquer account, and
          achievements you earn in the App may be posted to your Game Center profile. Game
          Center is governed by Apple&apos;s privacy practices.
        </p>

        <h3>1.8 Server logs</h3>
        <p>
          Our backend (Firebase, Vercel) automatically receives standard web request data when
          the App connects to our servers — including IP address, request timestamps, and basic
          performance information. This is used for security, abuse detection, and operational
          monitoring. Logs are retained for a limited period (typically 30–90 days).
        </p>

        <h2>2. How we use your information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>Create and maintain your account</li>
          <li>Operate the game — matchmaking, gameplay, scoring, ranking, achievements</li>
          <li>Deliver push notifications you have opted into</li>
          <li>Show your display name, rank, and game results to opponents and to people in your groups or friend list</li>
          <li>Process and verify in-app purchases and grant entitlements</li>
          <li>Show ads (free tier) and offer optional rewarded video ads to users who have not disabled them</li>
          <li>Detect and prevent cheating, harassment, and other abuse</li>
          <li>Respond to your support inquiries</li>
          <li>Improve the App through aggregate analytics and crash diagnostics</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use chat content for advertising.
          We do not build behavioral profiles for marketing.
        </p>

        <h2>3. How we share information</h2>

        <h3>3.1 With other players</h3>
        <p>
          Lex Conquer is a multiplayer game. Other players will see information necessary for
          gameplay — your display name, avatar, current rank, match history within games you
          share, and chat messages you send (when chat is enabled). Players in your groups or
          friend list also see your group memberships and online status.
        </p>

        <h3>3.2 With service providers</h3>
        <p>
          We share information with companies that help us operate the App, under contractual
          confidentiality and data-protection terms. Major providers include:
        </p>
        <ul>
          <li>
            <strong>Google Firebase</strong> — authentication, data storage (Firestore), push
            notifications, analytics, crash reporting.{" "}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
              firebase.google.com/support/privacy
            </a>
          </li>
          <li>
            <strong>Google AdMob</strong> — ad serving and measurement.{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>RevenueCat</strong> — in-app purchase verification and entitlement
            management.{" "}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
              revenuecat.com/privacy
            </a>
          </li>
          <li>
            <strong>Apple App Store</strong> and <strong>Google Play</strong> — payment
            processing and app distribution.
          </li>
          <li>
            <strong>Apple Game Center</strong> — iOS achievements and leaderboards (when
            enabled).
          </li>
          <li>
            <strong>Vercel</strong> — web hosting for our marketing site and certain backend
            functions.
          </li>
        </ul>

        <h3>3.3 For legal reasons</h3>
        <p>
          We may share information when required by valid legal process (subpoena, court order)
          or to protect the rights, property, or safety of Motonize, our users, or the public.
        </p>

        <h3>3.4 Business transfers</h3>
        <p>
          If Motonize is acquired, merges, or sells assets that include the App, your
          information may be transferred as part of that transaction. We will notify you of any
          such change.
        </p>

        <h2>4. Your privacy controls</h2>

        <h3>4.1 In-app settings</h3>
        <p>
          The App&apos;s Profile Settings include controls to:
        </p>
        <ul>
          <li>
            <strong>Game Chat toggle</strong> — when off, you cannot send messages and you do not
            see messages from others. Chat content from you is no longer collected.
          </li>
          <li>
            <strong>Bonus Coin Offers toggle</strong> — when off, the App does not present
            opportunities to watch rewarded video ads for coins. Paid users with this off see no
            ads at all.
          </li>
          <li>
            <strong>Manage your display name</strong>
          </li>
        </ul>

        <h3>4.2 Account deletion</h3>
        <p>
          You can delete your account from inside the App at any time via{" "}
          <strong>Profile Settings → Delete Profile</strong>. Deletion permanently removes
          your account, profile, game history, friend graph, and personal data from our systems
          within a reasonable period. Some information may persist briefly in encrypted backups
          and is purged on the standard backup-rotation schedule. Aggregate analytics that
          cannot be linked back to you may be retained.
        </p>
        <p>
          If you cannot access the App to delete your account, email{" "}
          <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> from the address linked to
          your sign-in and we will process the deletion within 7 business days.
        </p>

        <h3>4.3 Push notifications</h3>
        <p>
          Manage push permissions in your device&apos;s system settings. Revoking permission
          stops all notifications immediately.
        </p>

        <h3>4.4 Advertising controls (iOS)</h3>
        <p>
          On iOS, you may decline App Tracking Transparency at the prompt to receive
          non-personalized ads. You may reset your advertising identifier at any time in{" "}
          <strong>iOS Settings → Privacy &amp; Security → Tracking</strong>.
        </p>

        <h3>4.5 Advertising controls (Android)</h3>
        <p>
          On Android, you may opt out of personalized ads in{" "}
          <strong>Google Settings → Ads</strong>.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain your account and game data for as long as your account is active. When you
          delete your account, we remove personal data within a reasonable period. Server logs
          are retained for 30–90 days. Backups are rotated on a standard schedule, typically
          within 30 days of deletion. Aggregated analytics that cannot be linked to you may be
          retained indefinitely.
        </p>
        <p>
          We may retain limited records longer when required for legal, tax, audit, or
          fraud-prevention purposes.
        </p>

        <h2>6. Children</h2>
        <p>
          Lex Conquer is intended for users <strong>13 years of age or older</strong>. In the
          European Economic Area, the United Kingdom, and certain other jurisdictions, the
          minimum age may be higher (typically 16) per local law. We do not knowingly collect
          personal information from children below the applicable minimum age. If you are a
          parent or guardian and believe your child has provided us information, contact{" "}
          <a href="mailto:info@lexconquer.com">info@lexconquer.com</a> and we will delete it.
        </p>

        <h2>7. International users</h2>
        <p>
          Motonize is based in the United States. If you use the App from outside the U.S., your
          information will be transferred to and processed in the United States and other
          countries where our service providers operate. By using the App, you consent to this
          transfer.
        </p>

        <h3>7.1 European Economic Area, United Kingdom, and Switzerland</h3>
        <p>
          If you are in the EEA, UK, or Switzerland, you have the following rights under the
          General Data Protection Regulation (GDPR) and equivalent laws:
        </p>
        <ul>
          <li>Access to your personal data</li>
          <li>Correction of inaccurate data</li>
          <li>Erasure (the &ldquo;right to be forgotten&rdquo;)</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
          <li>Withdrawal of consent at any time</li>
          <li>The right to lodge a complaint with your local supervisory authority</li>
        </ul>
        <p>
          Our legal basis for processing your data is generally the performance of the contract
          (operating the App you signed up for), our legitimate interests (security,
          improvement), and your consent (for optional features such as ads with personalization
          and notifications).
        </p>

        <h3>7.2 California (CCPA / CPRA)</h3>
        <p>
          If you are a California resident, you have the right to know what personal information
          we collect, request deletion, request correction, and opt out of the &ldquo;sale&rdquo;
          or &ldquo;sharing&rdquo; of personal information. We do not sell personal information
          for monetary value. To the extent any of our advertising activity constitutes
          &ldquo;sharing&rdquo; under the CPRA, you may opt out via the iOS App Tracking
          Transparency prompt or the Android personalized-ads setting described in Section 4.
          To exercise other rights, contact{" "}
          <a href="mailto:info@lexconquer.com">info@lexconquer.com</a>.
        </p>

        <h2>8. Security</h2>
        <p>
          We use industry-standard practices to protect your information, including TLS
          encryption for data in transit and access controls on backend systems. No system is
          perfectly secure; if we ever experience a breach affecting your data, we will notify
          you in accordance with applicable law.
        </p>

        <h2>9. Third-party links</h2>
        <p>
          The App may contain links to third-party websites (such as the App Store, Google Play,
          or our marketing site). We are not responsible for the content or privacy practices of
          those sites. Please review their policies separately.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date at the top of this page. Material changes will be
          highlighted in-App and on lexconquer.com. Your continued use of the App after a change
          constitutes acceptance of the revised policy.
        </p>

        <h2>11. Contact us</h2>
        <p>
          For privacy questions, requests, or concerns, contact:
        </p>
        <p>
          Motonize LLC<br />
          New York, NY<br />
          United States<br />
          <a href="mailto:info@lexconquer.com">info@lexconquer.com</a>
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
