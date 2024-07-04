import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const hoverStyle = " hover:text-sky-500";
  return (
    <main className="text-xl text-sky-300 ">
      <h1>CPRG-306: Web Development2 - Assignments</h1>
      <ul>
        <li className={hoverStyle}>
          <Link href="week-2">Week 2 Assignment</Link>
        </li>
        <li className={hoverStyle}>
          <Link href="week-3">Week 3 Assignment</Link>
        </li>
        <li className={hoverStyle}>
          <Link href="week-4">Week 4 Assignment</Link>
        </li>
        <li className={hoverStyle}>
          <Link href="week-5">Week 5 Assignment</Link>
        </li>
        <li className={hoverStyle}>
          <Link href="week-6">Week 6 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
