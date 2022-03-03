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
          質問1/3
        </div>
        <div className=" bg-gray-100 h-full flex justify-center items-center">
          <form className="flex w-1/2 justify-around">
            <Link href="/quesion2">
              <div className="flex bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/3 justify-center">
                テスト１
              </div>
            </Link>
            <Link href="/quesion2">
              <div className="flex bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/3 justify-center">
                テスト２
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
