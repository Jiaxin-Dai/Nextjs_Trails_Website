import React from 'react'
import { TrailCardProps  } from "../types";

interface TruncatedTextProps {
  text: string;
  maxWords: number;
}

const TruncatedText = ( {text, maxWords} : TruncatedTextProps ) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');

  return <span>{truncatedText}</span>;
};

const getBadgeClass = (difficulty: string) => {
  if (difficulty == "Beginner") {
    return 'badge badge-accent';
  } else if (difficulty == "Intermediate") {
    return 'badge badge-primary';
  } else if (difficulty == "Advanced") {
    return 'badge badge-neutral';
  } else {
    return '';
  }
};

export const TrailCard  = ( { trail }: TrailCardProps) => {
  const badgeClass = getBadgeClass(trail.difficulty);

  return(
    <div className="flex flex-wrap justify-center items-start gap-50 p-10">
      <div key={trail.id}>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={trail.thumbnail == null ? '/logo.jpeg' : trail.thumbnail} alt={trail.name} className="object-cover w-full h-60"/>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">{trail.name}
            <div className={badgeClass}>{trail.difficulty}</div>
          </h2>
         
          <p>
              <TruncatedText text={trail.description} maxWords={30} />
          </p>
          <div className="card-actions flex justify-between items-center">
          
            <div className="rating gap-1 flex" >
            <input type="radio" name={`rating-${trail.id}`} className="hidden mask mask-heart" checked={true} readOnly />
              <input type="radio" name={`rating-${trail.id}`} className="mask mask-heart bg-red-400" checked={trail.rating >= 1 } readOnly />
              <input type="radio" name={`rating-${trail.id}`} className="mask mask-heart bg-orange-400" checked={trail.rating >= 2 } readOnly/>
              <input type="radio" name={`rating-${trail.id}`} className="mask mask-heart bg-yellow-400" checked={trail.rating >= 3 } readOnly/>
              <input type="radio" name={`rating-${trail.id}`} className="mask mask-heart bg-lime-400" checked={trail.rating >= 4 } readOnly/>
              <input type="radio" name={`rating-${trail.id}`} className="mask mask-heart bg-green-400" checked={trail.rating >= 5 } readOnly/>
            </div>
      
            <div className="badge badge-accent badge-outline">{trail.rating}</div>
            <a href={trail.url} className="btn btn-primary " target="_blank" rel="noopener noreferrer">
              See the details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
  

}
export default TrailCard
