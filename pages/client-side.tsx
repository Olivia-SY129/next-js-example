import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className={styles.main}>
      <Header />
      <ClientOnly>
        <Countries />
      </ClientOnly>
    </div>
  );
};

export default Home;
