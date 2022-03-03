import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Question from "../components/question.jsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen clear-both block overflow-hidden">
        <div className="flex h-16 bg-gray-200 justify-center items-center">
          質問2/3
        </div>
        <div className=" bg-gray-100 h-full flex justify-center items-center">
          <form className="flex w-1/2 justify-around">
            <Link href="/quesion3">
              <div className="flex bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3 justify-center">
                テスト３
              </div>
            </Link>
            <Link href="/quesion3">
              <div className="flex bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3 justify-center">
                テスト４
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
