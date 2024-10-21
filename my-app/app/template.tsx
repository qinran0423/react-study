'use client'
import Link from "next/link"
import { useRouter }  from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter()
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
          <Link href="/movies/4">详情</Link>
        </li>
				<button onClick={() => router.push('/movies/a/b/c/d')}>跳转到 【...params】</button>
      </ul>
      {children}
    </div>
  )
}
