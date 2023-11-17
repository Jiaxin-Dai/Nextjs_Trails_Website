import Image from 'next/image'
import TrailCard from './components/TrailCard'
import PhotoCarousel from './components/PhotoCarousel';
import { fetchTrails } from "./utils";
import { HomeProps, TrailProps  } from "./types";
// import { allTrails } from "./constants/fakeData";


export default async function Home({ searchParams }: HomeProps) {

  console.log(searchParams.latitude);
  console.log(searchParams.longitude);

  const allTrails = await fetchTrails({
    latitude: searchParams.latitude || 33.4484,
    longitude: searchParams.longitude || -112.0740,
    page: searchParams.page || undefined,
    per_page: searchParams.per_page || undefined,
    radius: searchParams.radius || undefined,
  });

  const trailsArray = Array.isArray(allTrails.data) ? allTrails.data : [];

   const isDataEmpty = !Array.isArray(trailsArray) || trailsArray.length < 1 || !trailsArray;
  //  console.log(!Array.isArray(trailsArray))
  //  console.log(trailsArray.length < 1 )
  console.log(trailsArray)
  //  console.log(isDataEmpty)


  const images = trailsArray.map((trail: TrailProps) => trail.thumbnail || '');

  return (
    <main>
      <div className="flex-wrap items-start p-10">
        <PhotoCarousel images={images} />
      </div>
      
     <div className="flex flex-wrap justify-center items-start gap-50 p-10">
          {!isDataEmpty && (
            trailsArray.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          )))}
        </div>
      
    </main>
  )
}
