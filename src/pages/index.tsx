import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-extrabold dark:text-white pb-4">
        Papperlapapp-Shop
      </h1>

      <ol>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/products"}
          >
            Produkte
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/favorites"}
          >
            Favoriten
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={"/news"}
          >
            News
          </Link>
        </li>
      </ol>
    </div>
  );
}
