import Image from "next/image";
import landingPic from "../../public/pics/Emma & Grant Engagement-07.jpg"
import pic1 from "../../public/pics/Emma & Grant Engagement-05.jpg"
import pic2 from "../../public/pics/Emma & Grant Engagement-10.jpg"
import pic3 from "../../public/pics/Emma & Grant Engagement-11.jpg"
import pic4 from "../../public/pics/Emma & Grant Engagement-27.jpg"
import pic5 from "../../public/pics/Emma & Grant Engagement-30.jpg"
import pic6 from "../../public/pics/Emma & Grant Engagement-33.jpg"
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
        <h1 className="text-center text-6xl md:text-8xl font-extrabold leading-relaxed font-local m-0 pt-9 text-shadow-lg/45 text-white">
          Emma & Grant
        </h1>
        </div>
        <div className="m-3 pt-42 md:pt-50">
          <h3 className={styles.bgTitle}>
          Our Wedding
        </h3>
        <p className={styles.bgText}>4:30pm Saturday, October 25, 2025<br/>2684 Columbus St, Grove City, OH 43123</p>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
          <div className="">
            <Image src={pic1}
              alt="Emma and Grant 1"
              quality={100}
              placeholder="blur" 
              className="rounded-2xl shadow-2xl"/>
          </div>
          <div>
            <Image src={pic2}
            alt="Emma and Grant 2"
            quality={100}
            placeholder="blur"
            className="rounded-2xl shadow-2xl"/>
            </div>
            <div>
            <Image src={pic3}
            alt="Emma and Grant 3"
            quality={100}
            placeholder="blur"
            className="rounded-2xl shadow-2xl"/>
            </div>
            <div>
            <Image src={pic4}
            alt="Emma and Grant 4"
            quality={100}
            placeholder="blur"
            className="rounded-2xl shadow-2xl"/>
            </div>
            <div>
            <Image src={pic5}
            alt="Emma and Grant 5"
            quality={100}
            placeholder="blur"
            className="rounded-2xl shadow-2xl"/>
            </div>
            <div>
            <Image src={pic6}
            alt="Emma and Grant 6"
            quality={100}
            placeholder="blur"
            className="rounded-2xl shadow-2xl"/>
            </div>
            </div>
        </div>
    </main>
  );
}
