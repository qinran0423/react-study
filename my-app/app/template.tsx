"use client";
import Link from "next/link"

export default function Template({ children, router }: { children: React.ReactNode, router: any }) {
  console.log(router)
  return (
    <div>
      <ul className="flex text-neutral-50">
        <li className="mx-4">
          <Link href="/">首页</Link>
        </li>
				<li className="mx-4">
          <Link href="/page1">page1</Link>
        </li>
				<li className="mx-4">
          <Link href="/movies">电影</Link>
        </li>
				<li className="mx-4">
          <Link href="/movies/4">电影详情</Link>
        </li>
				<button onClick={() => router?.push("/movies/[...params]", "/movies/a/b/c/d")}>跳转到 【...params】</button>
      </ul>
      {children}
    </div>
  )
}
