import Link from "next/link";
import classes from "../styles/page1.module.css";

export default function Page() {
  return (
    <>
      <div className={classes.box}>Page 1</div>
      <Link href="/page2">Page 2</Link>
    </>
  );
}
