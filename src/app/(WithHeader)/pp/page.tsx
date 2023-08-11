import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "プライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">プライバシーポリシー</h1>
      <p className="break-words leading-loose">
        「Tasting Note（以下、「本サービス」といいます。）」をご利用いただきありがとうございます。
        ユーザーの皆様には本サービスにおける、ユーザーの個人情報の取扱いについて、
        以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
      </p>

      <div className="prose">
        <h2>第1条（個人情報）</h2>
        <p>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>
        <h2>第2条（個人情報を収集・利用する目的）</h2>
        <p>本サービスが個人情報を収集・利用する目的は、以下のとおりです。</p>
        <ol>
          <li>当社サービスの提供・運営のため</li>
          <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
          <li>
            ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
          </li>
          <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
          <li>
            利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
          </li>
          <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
          <li>上記の利用目的に付随する目的</li>
        </ol>
        <h2>第3条（利用目的の変更）</h2>
        <p>
          本サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
        </p>
        <p>
          利用目的の変更を行った場合には、変更後の目的について、本サービス所定の方法により、ユーザーに通知し、または本サービスのウェブサイト上に公表するものとします。
        </p>
        <h2>第4条（個人情報の第三者提供）</h2>
        <p>
          本サービスは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>
        <ol>
          <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
          </li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
        </ol>
        <p>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</p>
        <ol>
          <li>本サービスが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
          <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
        </ol>
        <h2>第5条（プライバシーポリシーの変更）</h2>
        <p>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
        </p>
        <p>
          本サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本サービスのウェブサイト上に掲載したときから効力を生じるものとします。
        </p>
      </div>

      <div className="space-y-2">
        <p>附則</p>
        <p>本ポリシーは2023年6月15日から施行します。</p>
      </div>
    </div>
  );
}