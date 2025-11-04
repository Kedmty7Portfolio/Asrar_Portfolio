const volunteer_data = [
  "المشاركة مع ملتقى الأدباء  ( في كتابة نصوص )",
  "استضافة بودكاست يتناول موضوعات ثقافية وإبداعية",
  "نشر نصوص قصيرة في الكتاب الجماعي 'غ نبيذة' الذي يضم أعمال 100 كاتب"
];
export default function Volunteering() {
  return (
    <div
      className={` my-4 rounded-lg p-[var(--main-padding)] card flex flex-col gap-2.5`}
    >
      <h1 className="title">التطوع</h1>
      {volunteer_data.map((v, idx) => (
        <div className="vol bg-gray-100/90 p-2 flex flex-col gap-3" key={idx}>
          
          <ol className={`list-disc mr-5 sub-font-size`}>
            <li key={idx}>{v}</li>
          </ol>
        </div>
      ))}
    </div>
  );
}
