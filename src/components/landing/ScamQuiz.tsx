import { useState } from "react";
import { CheckCircle2, XCircle, RefreshCw, Trophy, BookOpen } from "lucide-react";
import { SectionHeader } from "./Features";

type Q = { q: string; options: string[]; answer: number; tip: string };

const QUESTIONS: Q[] = [
  {
    q: "You get an SMS: 'Your bank account will be blocked. Update KYC at bit.ly/kyc-now'. What should you do?",
    options: [
      "Click the link and update KYC quickly",
      "Ignore the SMS and call your bank using the number on your debit card",
      "Reply with your account number to confirm",
    ],
    answer: 1,
    tip: "Real banks never send KYC links over SMS. Always call the number on the back of your card.",
  },
  {
    q: "Someone calls saying they are from Income Tax department and asks for your OTP to process a refund. What do you do?",
    options: [
      "Share the OTP — refunds need verification",
      "Hang up. Government agencies never ask for OTPs",
      "Give only the last 4 digits to be safe",
    ],
    answer: 1,
    tip: "No bank, no government office, and no genuine company will ever ask for your OTP, PIN or password.",
  },
  {
    q: "A WhatsApp message from an unknown number says you won a free iPhone. To claim it, you must pay Rs 499 for 'delivery'. This is:",
    options: [
      "A genuine lucky draw",
      "A common scam — never pay to claim a prize",
      "Safe if the website looks professional",
    ],
    answer: 1,
    tip: "If you didn't enter a contest, you didn't win it. Paying any fee for a 'prize' is always a scam.",
  },
  {
    q: "You see a UPI request on your phone for Rs 5,000 saying 'Refund from Amazon'. What should you do?",
    options: [
      "Approve it — refunds come as UPI requests",
      "Reject it. Refunds come automatically, you never need to approve them",
      "Approve only if the sender's name looks real",
    ],
    answer: 1,
    tip: "UPI 'collect requests' debit your account, they don't credit it. Never approve refund requests.",
  },
  {
    q: "Your grandson asks for Rs 20,000 over WhatsApp from a new number, saying his phone broke. The best first step is:",
    options: [
      "Transfer immediately, family comes first",
      "Call your grandson on his usual number to confirm",
      "Send half the amount as a safety measure",
    ],
    answer: 1,
    tip: "Scammers impersonate family members. Always verify by calling the person on the number you already know.",
  },
];

export function ScamQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const choose = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (step + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const score = answers.reduce((s, a, i) => (a === QUESTIONS[i].answer ? s + 1 : s), 0);

  return (
    <section id="quiz" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Free tool · 03"
          title={<>How <span className="text-gradient">scam-aware</span> are you?</>}
          desc="A simple 5-question quiz designed for elderly users and first-time internet users in India. Large text, plain language, no tricks."
        />

        <div className="reveal mx-auto mt-10 max-w-3xl rounded-3xl border border-border/70 bg-surface/40 p-6 sm:p-9 glow-card">
          {!done ? (
            <>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug sm:text-2xl">
                {QUESTIONS[step].q}
              </h3>

              <div className="mt-6 grid gap-3">
                {QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className="group flex items-center gap-3 rounded-xl border border-border/70 bg-background/40 p-4 text-left text-[16px] leading-snug transition hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border/70 bg-surface font-mono text-[13px] text-muted-foreground group-hover:border-primary/50 group-hover:text-primary">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className="flex flex-col items-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/40">
                  <Trophy className="h-7 w-7 text-primary" />
                </span>
                <h3 className="mt-4 text-3xl font-semibold">
                  You scored {score} / {QUESTIONS.length}
                </h3>
                <p className="mt-2 max-w-md text-[15px] text-muted-foreground">
                  {score === QUESTIONS.length
                    ? "Excellent — you can spot scams better than most. Share this quiz with your family."
                    : score >= 3
                    ? "Good awareness. A few tips below will make you even harder to scam."
                    : "No worries — most scams work because they are designed to confuse. Read the tips below."}
                </p>
              </div>

              <ol className="mt-8 space-y-3">
                {QUESTIONS.map((q, i) => {
                  const correct = answers[i] === q.answer;
                  return (
                    <li key={i} className="rounded-xl border border-border/60 bg-background/40 p-4">
                      <div className="flex items-start gap-2">
                        {correct ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                        ) : (
                          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
                        )}
                        <div>
                          <div className="text-[14px] font-medium">{q.q}</div>
                          <div className="mt-1 text-[13px] text-muted-foreground">
                            <span className="text-foreground/80">Correct answer:</span>{" "}
                            {q.options[q.answer]}
                          </div>
                          <div className="mt-1 flex items-start gap-1.5 text-[13px] text-primary">
                            <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            <span>{q.tip}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <button
                onClick={reset}
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium transition hover:border-primary/40 hover:bg-surface"
              >
                <RefreshCw className="h-4 w-4" />
                Take the quiz again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}