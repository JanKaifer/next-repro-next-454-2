import Link from "next/link";
import classes from "../styles/page2.module.css";

export default function Page() {
  return (
    <>
      <div className={classes.box}>Page 2</div>
      <Link href="/page1">Page 1</Link>
    </>
  );
}
