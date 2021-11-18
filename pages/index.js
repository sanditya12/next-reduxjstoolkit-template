import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectStateField } from "../redux/state1Slice";
import styles from "../styles/Home.module.css";
import IncrementBtn from "./components/IncrementBtn";

export default function Home() {
  const currentState = useSelector(selectStateField);
  return (
    <div>
      <h1>CURRENT STATE = {currentState}</h1>
      <IncrementBtn />
    </div>
  );
}
