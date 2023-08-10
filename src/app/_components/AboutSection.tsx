import SectionHeading from "@/app/_components/SectionHeading";

export default function AboutSection() {
  return (
    <section className="space-y-2">
      <SectionHeading title="About" />
      <p className="space-y-2">
        TastingNoteは
        <br className="sm:hidden" />
        <span className="inline-block">
          J.S.Aソムリエ呼称資格認定試験
          <br className="sm:hidden" />
          2次試験対策用のアプリです。
        </span>
      </p>
      <p>
        本番同様のテイスティングシートを使って
        <br className="sm:hidden" />
        ワインテイスティングの記録が行えます。
      </p>
    </section>
  );
}
