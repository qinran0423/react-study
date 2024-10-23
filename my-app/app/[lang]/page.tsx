import { Locale } from '@/i18n-config'

type HeroItem = {
  ename: number;        // 英文名
  cname: string;       // 中文名
  id_name: string;     // ID 名称
  title: string;       // 标题
  new_type: number;    // 新类型
  hero_type: number;   // 英雄类型
  skin_name: string;    // 皮肤名称
  moss_id: number;     // 藏品 ID
};

export default async function Home({params: { lang }}: {params: { lang: Locale}}) {
  console.log(lang)
  const response = await fetch('https://study.duyiedu.com/api/herolist')
  const data = await response.json()
  console.log(data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.data.map((item: HeroItem) => (
            <li key={item.id_name}>{item.cname}</li>
        ))}
      </ul>
    </div>
  );
}
