import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Open_Sans } from "@next/font/google";
import { NextPage } from "next";
import HeroComponent from "@/components/HeroComponent";
import TodoList from "@/components/TodoList";

const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
});

const Index: NextPage = () => {
  return (
    <div className={`${styles.heroContainer} ${openSans.className}`}>
      <div className={styles.columnLayout}>
        <HeroComponent />
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
