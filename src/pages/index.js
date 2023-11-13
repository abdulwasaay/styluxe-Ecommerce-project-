import Heads from "@/Components/Head/Head"
import ImageSlider from "@/Components/Images/Images";
import Product from "@/Components/products/Product";
import { getSession } from "next-auth/react";
import styles from "@/styles/Home.module.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import Shipping from "@/Components/Freeshipping/Shipping";
import { onValue } from "firebase/database";
import { getAlldata } from "@/services/Productmethods";

export default function Home(props) {
  const { arr } = props;
  const data = arr.map(p => {
    return <Product obj={p} />
  })

  return (
    <>
      <Heads text="Whispering Pages: Where Words Dance and Dreams Sing"
        cont="Explore a world of insightful articles and engaging stories on [Your Blog Name]. Discover thought-provoking content that delves into [Your Niche/Topics], offering fresh perspectives and valuable insights."
      />
      <div>
        <ImageSlider />
      </div>
      <div>
        <Shipping />
      </div>
      <div>
        <h1 className={styles.heading}><CollectionsIcon className={styles.icon}/>New Collection</h1>
        <div className={styles.container}>
          {data}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const arr=[]
    const data = getAlldata();
    onValue(data, (u) => {
        for (let key in u.val()) {
            if (u.val().hasOwnProperty(key)) {
                arr.unshift(u.val()[key])
            }
        }
    });
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/Forms/Login",
        permanent: false,
      }
    }
  }
  if (session.user.email.toLowerCase() === "admin421@gmail.com") {
    return {
      redirect: {
        destination: "/Dashboard/Dashboard",
        permanent: false,
      }
    }
  }
  return {
    props: {
      arr
    }
  }
}



