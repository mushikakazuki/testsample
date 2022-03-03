import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Question from "../components/question.jsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen clear-both block overflow-hidden">
        <div className="bg-gray-100 h-screen text-6xl flex items-center justify-center font-blood ">
          ありがとうございました。
        </div>
      </div>
    </>
  );
}
