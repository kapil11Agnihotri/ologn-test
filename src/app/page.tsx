import Link from "next/link";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Link href="/" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
         Weather Forecast
      </Link>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
