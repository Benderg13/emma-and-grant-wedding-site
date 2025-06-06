import Image from "next/image";
import landingPic from "../../public/pics/Emma & Grant Engagement-07.jpg"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main>
        <div  className={styles.bgWrap}>
          <Image src={landingPic}
          alt="Emma and Grant"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill={true}
          style={{
            objectFit: "cover",
          }}
          />
        </div>
        <div>
        {/* the ring thing*/}
        <h1 className={styles.bgHeader}>
          Emma & Grant
        </h1>
        </div>
        <div>
          <h3 className={styles.bgTitle}>
          Our Wedding
        </h3>
        <p className={styles.bgText}>4:30pm Saturday, October 25, 2025<br/>2684 Columbus St, Grove City, OH 43123</p>
            {/* pictures in a grid style */}
        </div>
    </main>
  );
}
