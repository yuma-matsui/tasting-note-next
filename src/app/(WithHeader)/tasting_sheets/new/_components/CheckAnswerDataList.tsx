export default function CheckAnswerDataList({ title, answer }: { title: string; answer: string | null }) {
  return (
    <>
      <dt className="box-content border-y border-gray-400 bg-gray-300 p-2">
        <span className="text-base font-bold">{title}</span>
      </dt>
      {<dd className="break-words p-2">{answer}</dd>}
    </>
  );
}
