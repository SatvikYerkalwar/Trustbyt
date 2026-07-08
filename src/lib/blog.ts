export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string; // ISO
  author: string;
  content: string[]; // paragraphs; lines starting with "## " render as subheadings, "- " as list items
};

export const blogPosts: BlogPost[] = [
  {
    slug: "10-signs-a-website-is-a-scam",
    title: "10 signs a website is a scam (and how to check in 30 seconds)",
    excerpt:
      "Fake shopping sites and lookalike bank pages are everywhere. Here are the ten red flags our URL checker looks for — so you can spot them yourself.",
    category: "Guides",
    readMinutes: 6,
    date: "2026-06-28",
    author: "Satvik Yerkalwar",
    content: [
      "Scammers don't need to be clever anymore — they just need to be fast. A fake website can be spun up in minutes, blasted over WhatsApp and SMS, and taken down before anyone reports it. The good news: almost every scam site trips at least one of the same warning signs.",
      "## 1. The domain looks almost right",
      "Lookalike domains swap or add a single character — think amaz0n-offers.in or sbi-rewards.co. If the address bar doesn't exactly match the real brand, stop.",
      "## 2. Urgency and countdown timers",
      "\"Only 3 left!\" and \"Offer expires in 4:59\" exist to stop you thinking. Real banks and brands never rush you into pasting card details.",
      "## 3. It asks for too much, too soon",
      "A shopping page that wants your PAN, OTP, or UPI PIN before you've bought anything is harvesting data, not selling products.",
      "## 4. No HTTPS padlock — or a brand-new certificate",
      "No padlock is an instant no. But a padlock alone isn't safety: scam sites get free certificates too. Combine it with the other signs.",
      "## The 30-second check",
      "- Read the domain character by character.",
      "- Search the brand name plus the word \"scam\".",
      "- Paste the link into the free TrustByt URL checker on our homepage.",
      "- When in doubt, call the real company using the number on their official site or your card.",
      "Trust your gut. If something feels off, it usually is — and no genuine deal disappears because you took two minutes to verify it.",
    ],
  },
  {
    slug: "how-to-spot-a-phishing-email",
    title: "How to spot a phishing email before you click",
    excerpt:
      "Phishing is still the number one way people get scammed online. Learn the anatomy of a phishing email and the habits that keep you safe.",
    category: "Guides",
    readMinutes: 5,
    date: "2026-06-20",
    author: "Satvik Yerkalwar",
    content: [
      "Phishing works because it looks ordinary. A message that seems to come from your bank, your boss, or a delivery company nudges you to click a link or download a file. One click can hand over your password or install malware.",
      "## Check the sender, not the name",
      "The display name is easy to fake. Expand the actual email address. support@hdfc-secure-verify.com is not HDFC.",
      "## Hover before you click",
      "On desktop, hover over any link to preview the real destination. On mobile, long-press. If the preview doesn't match the visible text, don't tap it.",
      "## Watch the tone",
      "- Threats: \"your account will be suspended in 24 hours\".",
      "- Rewards: \"you've won a prize, claim now\".",
      "- Secrecy: \"don't tell anyone, transfer quietly\".",
      "All three are engineered to override your judgement.",
      "## When it might be real",
      "Legitimate companies are fine with you being cautious. Close the email, open the official app or website yourself, and check there. Never use the link or phone number inside a suspicious message.",
      "Paste any suspicious email text into the TrustByt email analyzer — it runs entirely in your browser and flags the classic phishing patterns instantly.",
    ],
  },
  {
    slug: "what-to-do-if-you-lost-money-to-a-scam",
    title: "You lost money to a scam. Here's exactly what to do next",
    excerpt:
      "The first hour matters most. A calm, step-by-step plan to report the fraud, freeze the money trail, and protect your accounts.",
    category: "Emergency",
    readMinutes: 4,
    date: "2026-06-12",
    author: "Satvik Yerkalwar",
    content: [
      "If you've just realised you were scammed, take a breath. Acting quickly and calmly in the first hour gives you the best chance of recovering money and limiting damage.",
      "## 1. Call 1930 immediately",
      "1930 is India's national cybercrime helpline. The faster you report a fraudulent transaction, the higher the chance the money can be frozen before it's withdrawn.",
      "## 2. File a complaint online",
      "Go to cybercrime.gov.in and file a formal complaint. Keep the acknowledgement number safe — you'll need it for follow-ups and your bank.",
      "## 3. Tell your bank",
      "- Report the transaction as fraud.",
      "- Ask them to block the card or freeze the account if needed.",
      "- Request a written reference for your complaint.",
      "## 4. Preserve the evidence",
      "Screenshot the messages, transaction IDs, phone numbers, and any website links. Don't delete anything — it all helps the investigation.",
      "## 5. Secure your other accounts",
      "Change passwords, enable two-factor authentication, and watch for follow-up scams — fraudsters often return posing as \"recovery agents\".",
      "You are not alone, and being scammed is not your fault. Reporting fast helps you and helps stop the scammer from reaching the next person.",
    ],
  },
  {
    slug: "keeping-your-parents-safe-online",
    title: "Keeping your parents and grandparents safe online",
    excerpt:
      "Older family members are the most targeted and the least warned. A gentle, practical guide to protecting the people who raised you.",
    category: "Family",
    readMinutes: 5,
    date: "2026-06-04",
    author: "Satvik Yerkalwar",
    content: [
      "Scammers deliberately target older people — they're trusting, often less familiar with new tricks, and sometimes have savings worth stealing. The best defence isn't a gadget; it's a few clear habits and an open conversation.",
      "## Make it safe to ask",
      "The biggest reason people fall for scams is embarrassment about asking. Tell your family: \"If anything about money or an OTP feels strange, call me first — you'll never annoy me.\"",
      "## Set three simple rules",
      "- Never share an OTP with anyone, ever — not even someone claiming to be from the bank.",
      "- No bank, police, or government office asks for payment over the phone.",
      "- If someone creates urgency, that's the moment to slow down and call family.",
      "## Set up their phone",
      "Enable spam call filtering, turn on automatic app updates, and add your number as an emergency contact. Bookmark cybercrime.gov.in and save 1930.",
      "## Practice together",
      "Show them the free TrustByt tools. Paste a real scam SMS into the analyzer together so they can see how it works. Confidence comes from practice, not lectures.",
      "A ten-minute conversation today can save a lifetime of savings. That's the whole reason TrustByt exists.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
