import { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-sell-what-you-build',
    title: 'How to Sell What You Build',
    description: 'We won first place at the AWS x Datadog x Anthropic Hackathon. Our code wasn\'t the best in the room. Here\'s what actually won.',
    date: 'Mar 2026',
    tags: ['Building', 'Hackathon', 'AI Security'],
    readTime: '8 min read',
    content: `We won first place at the AWS x Datadog x Anthropic Hackathon.

Our code wasn't the best in the room. Not even close.

We won because we could make people care in 10 seconds. And that's a very different skill than writing good code.

Most builders spend 95% of their energy on the product and 5% on how they present it. This is backwards. Not because the product doesn't matter — it does. But because a great product that nobody understands is the same as a product that doesn't exist.

I used to think the work speaks for itself. It doesn't. You have to speak for it.

---

We built Crimson — an automated red-teaming platform for AI agents. Before we wrote a single line of code, we had one sentence:

*Every company shipping AI agents to production right now has no systematic way to test them against adversarial attacks.*

That sentence won the hackathon. Everything else was evidence.

Here's what I mean. When you say that sentence out loud to someone technical, something happens. Their face changes. They know it's true. They've thought about it. They just haven't seen anyone try to solve it yet.

That's what a good one-sentence pitch does. It doesn't explain your product. It makes the problem so obvious that the product becomes inevitable.

Most people pitch the other way around. They start with what they built, then try to convince you why it matters. But conviction doesn't work that way. You don't convince people into caring. You show them something they already care about but haven't articulated yet.

The best pitches don't introduce a new idea. They put words to a feeling that already exists.

---

During our demo, we didn't walk through architecture. We didn't show a tech stack slide. We said six words:

*Watch this agent leak credentials live.*

Then we showed it happening.

Severity ratings. Six attack categories. Concrete steps to fix each one. A dashboard that turns "we should probably think about AI security" into "here are the five things that are broken right now."

The judges didn't just understand Crimson. They *wanted* it.

That's the difference between presenting and selling. Presenting is showing what you made. Selling is making someone feel what it would be like to have it — and then what it would be like to not have it.

Think about every product demo you've sat through that bored you. They all have the same problem: they describe features instead of creating feelings. "We support 12 integrations and have a REST API." Nobody leans forward for that.

Now think about the demos you remember. They showed you a moment. A single, specific, undeniable moment where the product did something that made you go: *oh.*

That's what you're aiming for. Not comprehensiveness. Not technical depth. One moment of "oh."

---

The last thing that separated us was the simplest. We told the judges where this goes.

Most hackathon projects die on Sunday. Everyone in the room knows it. The judges have seen hundreds of impressive demos that go nowhere. So there's a silent question behind every score they give: *will this still exist in six months?*

We answered it directly. Crimson isn't a hackathon project. It's a CI/CD security gate. Every deployment pipeline will eventually need AI security testing the same way every codebase needs unit tests today. That future isn't speculation — it's an inevitability that hasn't been built yet.

When you connect what you built today to where the world is clearly going tomorrow, something shifts. You stop being a team that built a cool demo. You become a team that's early to something big.

Judges don't want to pick the best project. They want to pick the one they'll feel smart about in a year.

---

There's a loop that most builders are stuck in and don't realize it.

You see a problem. You build a solution. By the time you ship, the problem has shifted slightly. There's a new gap. You chase it. You build again. Ship again. The problem shifts again.

You're always solving. You're never ahead.

Stripe broke this loop. They didn't build "better payments for 2010." They built payments for a world where every company would be an internet company. In 2010, that world barely existed. They built for it anyway.

NVIDIA broke this loop. Jensen Huang didn't pivot to AI when GPT got popular. He spent a decade building parallel computing infrastructure for machine learning while analysts called it a niche market. For years, the bet looked irrational. Then overnight, it looked inevitable.

The pattern is always the same. Someone sees a small signal that everyone else dismisses. They don't just notice it — they extrapolate it further than anyone is comfortable with. And then they build as if that future is already here.

The difference between visionary and delusional is not the size of the bet. It's whether you're building on something you *know* is coming versus something you *wish* were coming. The knowing gives you foundation. The wishing gives you nothing.

Building for today's problems with today's assumptions means you'll always be one step behind.

Building for today's problems with tomorrow's assumptions means you're already there when everyone else arrives.

---

When I think about Crimson now, the code barely matters. The architecture barely matters. What matters is that we had a clear thesis about where the world is going, and we built a thing that only makes sense if that thesis is right.

AI security testing will become as standard as unit testing. That's not a hot take. That's just what happens when you deploy systems that accept natural language as input and make decisions with real consequences.

The hackathon win was nice. But the skill underneath it — seeing where things are going and making other people see it too — that's the thing I'll actually keep using.

---

I think selling what you build is the most undertrained skill in tech.

We celebrate the builders. The ones who ship. The ones who write elegant code and design beautiful systems. And we should. But the builders who actually *win* — who get funded, get hired, get their projects adopted — they all share one trait that has nothing to do with code:

They can make you feel something about what they made.

Not through hype. Not through buzzwords. Through clarity. Through showing you a future that's so obvious you wonder why you didn't see it yourself.

That's what selling really is. It's not manipulation. It's translation. You take what's in your head — the problem you see, the solution you built, the future you believe in — and you put it into someone else's head so clearly that it feels like their own thought.

The best engineers I know are not the best coders. They're the best translators.

Learn to build. Then learn to make people care about what you built.

The second skill is harder. And it's the one that changes everything.`,
  },
  {
    slug: '10-apps-in-10-weeks',
    title: '10 Apps in 10 Weeks: What I Learned Shipping Fast',
    description: 'Lessons from building and deploying one full app every week — from idea to production.',
    date: 'Feb 2026',
    tags: ['Shipping', 'Building in Public'],
    readTime: '6 min read',
    content: 'Coming soon.',
  },
  {
    slug: 'building-multi-agent-systems-langgraph',
    title: 'Building Multi-Agent Systems with LangGraph',
    description: 'How I architected a supervisor agent with sub-agents at EasyBee AI to reduce cold-start latency from 5s to 150ms.',
    date: 'Jan 2026',
    tags: ['AI Engineering', 'LangGraph'],
    readTime: '10 min read',
    content: 'Coming soon.',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
