import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="page1-div">Page 1</div>
      <Link href="/page2">Page 2</Link>
      <style jsx>{`
        .page1-div {
          width: 100px;
          height: 100px;
          background-color: green;
        }
      `}</style>
    </>
  );
}
