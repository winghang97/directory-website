import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <div className="flex flex-col">
        <a href="#">Home</a>
        <a href="#">Review</a>
        <span>New Releases</span>
        <a href="#">Last 30 days</a>
        <a href="#">This week</a>
      </div>
    </nav>
  );
}
