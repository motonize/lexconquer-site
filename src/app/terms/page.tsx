import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "End User License Agreement and Terms of Service for the Lex Conquer mobile app.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-lg tracking-wider text-gold-gradient">LEX CONQUER</Link>
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold-bright)]">← Back home</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20 prose-legal">
        <h1 className="font-display text-4xl font-semibold mb-2">Terms of Service</h1>
        <p className="text-[var(--muted)] text-sm mb-8">Last updated: April 30, 2026</p>
        <div className="divider-gold mb-10" />

        <p>
          These Terms of Service (&ldquo;Terms,&rdquo; also serving as the End User License
          Agreement) govern your use of the <strong>Lex Conquer</strong> mobile application (the
          &ldquo;App&rdquo;), published by <strong>Motonize LLC</strong> (&ldquo;Motonize,&rdquo;
          &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms apply to the App
          on iOS and Android. For terms governing the studio&apos;s company website, see{" "}
          <a href="https://motonize.com/terms">motonize.com/terms</a>.
        </p>

        <p>
          <strong>By downloading, installing, or using the App, you agree to these Terms.</strong>{" "}
          If you do not agree, do not download or use the App.
        </p>

        <h2>1. License</h2>
        <p>
          Subject to your compliance with these Terms, Motonize grants you a limited,
          non-exclusive, non-transferable, non-sublicensable, revocable license to download and
          use the App on devices you own or control, for your personal, non-commercial
          entertainment use. This license does not transfer ownership of the App or any of its
          content; we and our licensors retain all rights not expressly granted to you here.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least <strong>13 years of age</strong> to use the App (or older where
          required by local law — for example, 16 in much of the European Economic Area). By
          using the App, you represent that you meet the applicable minimum age. If you are
          under the age of majority in your jurisdiction, you confirm that a parent or guardian
          has reviewed these Terms on your behalf.
        </p>

        <h2>3. Your account</h2>
        <p>
          To use the App you create an account using Google Sign-In or Sign in with Apple. You
          are responsible for:
        </p>
        <ul>
          <li>Keeping your sign-in credentials secure</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us if you suspect your account has been accessed without authorization</li>
        </ul>
        <p>
          You may delete your account at any time from <strong>Profile Settings → Delete
          Profile</strong>. See our <Link href="/support">Support page</Link> for details.
        </p>

        <h2>4. In-app purchases</h2>

        <h3>4.1 Lifetime &ldquo;Conqueror&rdquo; upgrade</h3>
        <p>
          The App offers a one-time purchase called <strong>Conqueror</strong> that unlocks
          features such as larger grids, more players per match, advanced bot opponents, an
          ad-free experience (when combined with the rewarded-ads opt-out), and other premium
          benefits described in-App at the time of purchase. The Conqueror upgrade is a{" "}
          <strong>one-time purchase</strong>, not a subscription, and does not auto-renew.
        </p>

        <h3>4.2 Virtual currency (Lex Coins)</h3>
        <p>
          The App includes a virtual currency called <strong>Lex Coins</strong> used inside the
          game. Lex Coins can be obtained by:
        </p>
        <ul>
          <li>Purchasing Lex Coin packs through the App Store or Google Play (one-time consumable purchases — Handful, Pouch, Chest, Vault, or Treasury sizes)</li>
          <li>Watching opt-in rewarded video ads (when this option is enabled in Profile Settings)</li>
          <li>Other in-game means we may make available from time to time</li>
        </ul>
        <p>
          <strong>Lex Coins have no monetary value and are not redeemable for cash or any other
          form of legal tender.</strong> Lex Coins are non-transferable between accounts and are
          forfeited upon account deletion or termination. Unused Lex Coins do not accrue interest
          and have no expiration unless your account is closed.
        </p>

        <h3>4.3 Payment processing</h3>
        <p>
          All in-app purchases are processed by <strong>Apple App Store</strong> or{" "}
          <strong>Google Play</strong>, depending on your platform. Motonize does not see or
          store your payment method. By making a purchase, you also agree to Apple&apos;s or
          Google&apos;s applicable payment terms.
        </p>

        <h3>4.4 Refunds</h3>
        <p>
          Refund requests for in-app purchases are handled by Apple or Google according to their
          published policies, not by Motonize. To request a refund:
        </p>
        <ul>
          <li>
            <strong>iOS:</strong>{" "}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
          </li>
          <li>
            <strong>Android:</strong> Google Play Help → Refund a purchase
          </li>
        </ul>
        <p>
          We will, where feasible, provide reasonable assistance with refund-related questions
          but cannot grant or deny refunds directly. Coins or features granted by a refunded
          purchase will be revoked from your account.
        </p>

        <h2>5. Free tier and ads</h2>
        <p>
          Lex Conquer is free to download and play. Users on the free tier see banner and
          interstitial ads served by <strong>Google AdMob</strong> during normal play and may
          also encounter opt-in rewarded video ads in exchange for Coins. Free-tier users
          cannot fully disable ads. <strong>Conqueror-tier (paid) users</strong> see no banner
          or interstitial ads, and may additionally turn off all rewarded ad offers via{" "}
          <strong>Profile Settings → Advertisements → Show Rewarded Ad Offers</strong>. When
          a Conqueror user disables this setting, the App presents no advertisements of any
          kind during normal use.
        </p>

        <h2>6. User content and conduct</h2>

        <h3>6.1 What is user content</h3>
        <p>
          The App lets you create and share content with other players, including:
        </p>
        <ul>
          <li>Display name</li>
          <li>Group names and descriptions</li>
          <li>Chat messages — in-game, group, and friend-to-friend</li>
          <li>Tournament names</li>
        </ul>

        <h3>6.2 Prohibited content and conduct</h3>
        <p>You agree not to use the App to:</p>
        <ul>
          <li>Post, share, or chat content that is unlawful, threatening, harassing, defamatory, hateful, sexually explicit, or otherwise objectionable</li>
          <li>Impersonate any person, group, or entity</li>
          <li>Harass, bully, or stalk other users</li>
          <li>Post content that infringes any third-party right (copyright, trademark, privacy, publicity)</li>
          <li>Solicit personal information from minors or share contact information of others without consent</li>
          <li>Cheat, exploit bugs, use unauthorized third-party software, automation, or modified clients</li>
          <li>Interfere with the operation of the App, our servers, or other users&apos; gameplay</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the App, except where permitted by law</li>
          <li>Use the App for any commercial purpose without our written consent</li>
          <li>Violate any applicable law or regulation</li>
        </ul>

        <h3>6.3 Reporting and moderation</h3>
        <p>
          Users may report objectionable content or conduct via the in-App reporting tools or
          by emailing <a href="mailto:info@lexconquer.com">info@lexconquer.com</a>. We review
          reports and may take action including warning, content removal, account suspension, or
          permanent ban. We aim to act on serious reports within 24 hours.
        </p>

        <h3>6.4 Chat controls</h3>
        <p>
          Chat is enabled by default but is fully optional. You can disable chat globally in{" "}
          <strong>Profile Settings</strong>; when disabled, you cannot send chat messages and
          you do not see chat messages from others (including in groups and friend chats).
        </p>

        <h3>6.5 License you grant us in your content</h3>
        <p>
          For any content you post or share through the App (display names, group names, chat
          messages, etc.), you grant Motonize a non-exclusive, worldwide, royalty-free license
          to host, store, reproduce, modify (e.g., for moderation), display, and distribute that
          content as needed to operate the App and provide the service to you and other users.
          You retain ownership of your content. This license terminates when you delete the
          content or your account, except for content already shared with others (which may
          persist in their conversations) and backups (which are purged on the standard
          rotation schedule).
        </p>

        <h2>7. Suspension and termination</h2>
        <p>
          We may suspend or terminate your access to the App at any time, with or without
          notice, if we reasonably believe you have violated these Terms or engaged in conduct
          that harms the App, other users, or Motonize. We may also suspend or discontinue the
          App or any of its features at our discretion. Termination of your account does not
          entitle you to any refund of in-app purchases except as required by Apple, Google, or
          applicable law.
        </p>
        <p>
          You may stop using the App and delete your account at any time. The provisions of
          these Terms that by their nature should survive termination — including intellectual
          property, disclaimers, indemnification, limitation of liability, and dispute
          resolution — will survive.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          The App, including all of its content, software, design, graphics, logos, sound, and
          the names &ldquo;Lex Conquer,&rdquo; &ldquo;Motonize,&rdquo; and associated marks, is
          owned by Motonize LLC or its licensors and is protected by copyright, trademark, and
          other intellectual-property laws. Except for the limited license granted in Section 1,
          you receive no rights to the App or its content.
        </p>
        <p>
          You may not copy, distribute, modify, create derivative works of, publicly display,
          publicly perform, republish, sell, license, or otherwise exploit the App or its
          content, except as expressly permitted by these Terms or by applicable law.
        </p>

        <h2>9. Updates and changes to the App</h2>
        <p>
          We may release updates, patches, or changes to the App from time to time. Some updates
          may be required to continue using the App. We may modify, add, or remove features at
          our discretion, including features behind in-app purchases, with reasonable notice
          where practical. We will not eliminate features for which you have made a one-time
          purchase without offering reasonable continued access or an equivalent alternative.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          The App is provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
          <strong>&ldquo;as available.&rdquo;</strong> To the fullest extent permitted by law,
          Motonize disclaims all warranties of any kind, whether express or implied, including
          warranties of merchantability, fitness for a particular purpose, non-infringement,
          accuracy, reliability, and uninterrupted availability. We do not warrant that the App
          will be free of bugs, errors, or interruptions, or that any defects will be corrected.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Motonize and its officers, employees, and
          contractors will not be liable for any indirect, incidental, special, consequential,
          punitive, or exemplary damages, or any loss of profits, revenues, data, goodwill, or
          virtual items (including Coins), arising from or related to your use of (or inability
          to use) the App, even if we have been advised of the possibility of such damages. Our
          total aggregate liability for any claim arising out of or relating to these Terms or
          the App will not exceed the greater of (a) the amount you paid Motonize for the App
          and in-app purchases in the twelve (12) months before the claim arose, or (b) US
          $100.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Motonize and its officers,
          employees, and agents from and against any claims, damages, liabilities, losses, and
          expenses (including reasonable attorneys&apos; fees) arising out of or related to (a)
          your use of the App, (b) your violation of these Terms, (c) your violation of any
          third-party right, or (d) any content you post through the App.
        </p>

        <h2>13. Governing law and dispute resolution</h2>
        <p>
          These Terms are governed by the laws of the <strong>State of New York</strong>,
          without regard to its conflict-of-laws rules. Any dispute arising out of or relating
          to these Terms or the App will be brought exclusively in the state or federal courts
          located in <strong>Kings County, New York</strong>, and you consent to personal
          jurisdiction in those courts. You and Motonize each waive the right to a jury trial
          to the fullest extent permitted by law.
        </p>

        <h2>14. Apple-specific terms (iOS App Store)</h2>
        <p>
          The following provisions apply when you use the App on a device running iOS or
          iPadOS:
        </p>
        <ul>
          <li>
            <strong>Parties:</strong> these Terms are an agreement between you and Motonize LLC
            only, and not with Apple Inc. (&ldquo;Apple&rdquo;). Motonize, not Apple, is solely
            responsible for the App and its content.
          </li>
          <li>
            <strong>Scope of license:</strong> the license to use the App is limited to a
            non-transferable license to use the App on any Apple-branded products that you own
            or control, as permitted by the Usage Rules in the Apple Media Services Terms.
          </li>
          <li>
            <strong>Maintenance and support:</strong> Motonize is solely responsible for
            providing any maintenance and support services for the App. Apple has no obligation
            to provide any maintenance or support services in connection with the App.
          </li>
          <li>
            <strong>Warranty:</strong> Motonize is solely responsible for any product warranties,
            whether express or implied by law, to the extent not effectively disclaimed. In the
            event of any failure of the App to conform to any applicable warranty, you may
            notify Apple, and Apple will refund the purchase price (if any) for the App. To the
            maximum extent permitted by applicable law, Apple has no other warranty obligation
            with respect to the App.
          </li>
          <li>
            <strong>Product claims:</strong> Motonize, not Apple, is responsible for addressing
            your or any third party&apos;s claims relating to the App or your possession or use
            of the App, including product-liability claims, claims that the App fails to conform
            to any applicable legal or regulatory requirement, and claims arising under
            consumer-protection or similar legislation.
          </li>
          <li>
            <strong>Intellectual property:</strong> in the event of any third-party claim that
            the App or your possession and use of the App infringes that party&apos;s
            intellectual-property rights, Motonize, not Apple, will be solely responsible for
            the investigation, defense, settlement, and discharge of any such claim.
          </li>
          <li>
            <strong>Legal compliance:</strong> you represent and warrant that you are not located
            in a country subject to a U.S. government embargo and not listed on any U.S.
            government list of prohibited or restricted parties.
          </li>
          <li>
            <strong>Third-party beneficiary:</strong> you and Motonize acknowledge that Apple and
            its subsidiaries are third-party beneficiaries of these Terms, and that, upon your
            acceptance of these Terms, Apple will have the right (and will be deemed to have
            accepted the right) to enforce these Terms against you as a third-party beneficiary
            of these Terms.
          </li>
        </ul>

        <h2>15. Google Play (Android)</h2>
        <p>
          When you use the App on Android, you also agree to the Google Play Terms of Service
          and any other applicable Google policies. Refunds, payment processing, and certain
          consumer-protection rights are governed by Google&apos;s applicable terms.
        </p>

        <h2>16. Changes to these Terms</h2>
        <p>
          We may revise these Terms from time to time. The revised version becomes effective
          when posted at <a href="https://lexconquer.com/terms">lexconquer.com/terms</a>; the
          &ldquo;Last updated&rdquo; date will reflect the change. We will provide reasonable
          notice of material changes. Your continued use of the App after a change constitutes
          acceptance of the revised Terms.
        </p>

        <h2>17. Contact</h2>
        <p>
          For questions about these Terms, contact:
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
