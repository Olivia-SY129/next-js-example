import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

type Props = {
  countryCodes: Item[];
};

interface Item {
  id: string | number;
  title: string;
  desc: string;
}

const Home = ({ countryCodes }: Props) => {
  return (
    <div className={styles.main}>
      <Header />
      <CardContainer items={countryCodes} />
    </div>
  );
};

interface Country {
  code: string;
  name: string;
  emoji: string;
}

interface Item {
  id: string | number;
  title: string;
  desc: string;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  if (!data) return;

  /* 
  데이터 가공
  code -> id
  name -> title
  code - emoji -> desc  
  */

  const { countries } = data;
  const countryCodes: Item[] = countries.map(
    ({ code, name, emoji }: Country) => ({
      id: code,
      title: name,
      desc: `${code} - ${emoji}`,
    })
  );

  return {
    props: {
      countryCodes: countryCodes.slice(0, 9),
    },
  };
}

export default Home;
