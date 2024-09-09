import s from "./page.module.scss";
import Header from "@/components/Header/Header";
import Learning from "@/components/Learning/Learning";
import ModesList from "@/components/ModesList/ModesList";
import AnalyticsList from "@/components/AnalyticsList/AnalyticsList";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={s.main}>
      <Header />
      <Learning />
      <ModesList />
      <AnalyticsList />
      <Footer />
    </div>
  );
}
