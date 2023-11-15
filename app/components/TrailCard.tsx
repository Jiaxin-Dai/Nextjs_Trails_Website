import React from 'react'
import SeeTheDetails from './SeeTheDetails';

interface Trail {
  id: number;
  name: string;
  location: string;
}

export const TrailCard  = () => {
  const trails: Trail[] = []
  trails.push({ id: 1, name: 'Trail 1', location: 'Location 1' });
  trails.push({ id: 2, name: 'Trail 2', location: 'Location 2' });
  trails.push({ id: 3, name: 'Trail 3', location: 'Location 3' });
  trails.push({ id: 1, name: 'Trail 1', location: 'Location 1' });
  trails.push({ id: 2, name: 'Trail 2', location: 'Location 2' });
  trails.push({ id: 3, name: 'Trail 3', location: 'Location 3' });


  return (
    <div className="flex flex-wrap justify-center items-start gap-40 p-10">
      {trails.map((trail) => (
        <div key={trail.id}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/avatar.png" alt="Trail" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{trail.name}</h2>
            <p>{trail.location}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See the details</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}
export default TrailCard
