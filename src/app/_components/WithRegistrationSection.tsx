import SectionHeading from "@/app/_components/SectionHeading";

export default function WithRegistrationSection() {
  return (
    <section className="space-y-2">
      <SectionHeading title="With Registration" />
      <p>登録をすると以下の機能が使えます</p>
      <ul className="list-inside list-disc space-y-2">
        <li>テイスティングシートの記録・管理</li>
        <li>記録したテイスティングシートの検索</li>
        <li>テイスティングしたワインの登録</li>
      </ul>
    </section>
  );
}
