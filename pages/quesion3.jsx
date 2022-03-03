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
          質問3/3
        </div>
        <div className="bg-gray-100 h-full flex justify-center items-center">
          <form className="flex w-full justify-around flex-col md:flex-row">
            <Link href="/conmfirm">
              <div className="flex bg-yellow-300 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full md:w-1/3 my-10 md:my-0 justify-center">
                テスト５
              </div>
            </Link>
            <Link href="/conmfirm">
              <div className="flex bg-yellow-300 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full md:w-1/3 justify-center">
                テスト６
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
