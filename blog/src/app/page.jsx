import { allBlogs } from "contentlayer/generated";
import HomeCover from "./components/Home/HomeCover";

export default function Home() {
  return (
    <main className="my-5">
      <HomeCover blogs={allBlogs} />
    </main>
  );
}
