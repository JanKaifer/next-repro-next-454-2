import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="page2-div">Page 2</div>
      <Link href="/page1">Page 1</Link>
      <style jsx>{`
        .page2-div {
          width: 100px;
          height: 100px;
          background-color: red;
        }
      `}</style>
    </>
  );
}
