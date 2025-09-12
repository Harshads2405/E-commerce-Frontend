<<<<<<< HEAD
import { dress } from "../../../Data/dress/dress";
import { gouns } from "../../../Data/Gouns/gouns";
import { mens_kurta } from "../../../Data/Men/mens_kurta";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
=======
import { mens_kurta } from '../../../Data/mens_kurta'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e

export default function HomePage() {
  return (
    <div>
<<<<<<< HEAD
      <MainCarousel />
      <div className="space-y-5 flex flex-col justify-center lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={dress} sectionName={"Women's Dress"} />
        <HomeSectionCarousel data={gouns} sectionName={"Women's Gouns"} />
        {/* <HomeSectionCarousel data={pants} sectionName={"Men's Pants"} /> */}
      </div>
    </div>
  );
=======
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's dresses"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Tops"}/>

        </div>
    </div>
  )
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
}
