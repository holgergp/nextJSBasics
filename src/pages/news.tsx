import { getNews } from "@/server";
import { News } from "@/types";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps<{
  news: News[];
}> = async () => {
  const news = await getNews();
  return {
    props: {
      news,
    },
  };
};

export default function Products({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2">News</h2>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href={"/"}
      >
        Zurück
      </Link>
      <ol>
        {news.map((p) => {
          return (
            <li key={p.id} className="flex" >
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.newsShort}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
