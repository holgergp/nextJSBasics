import { getFavoriteBrands } from "@/server";
import { Favorite } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavoriteBrands();
      setFavorites(data);
    };

    fetchData();
  }, []);
  return (
    <div className="p-5">
      <h2 className="text-3xl font-extrabold dark:text-white pb-2">Favoriten</h2>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href={"/"}
      >
        Zurück
      </Link>
      <ol>
        {favorites.map((p) => {
          return (
            <li key={p.id} className="flex" >
              <div className="flex-initial w-6 ">{p.id}</div>
              <div className="flex-initial">{p.brand}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
