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

  return (
    <div> 
      <table className='table table-bordered'>
        <thead>
          <tr>
            <td>Name</td>
            <td>location</td>
          </tr>
        </thead>
        <tbody>
          {trails.map(trail => (
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          ))}
        </tbody>
      </table>
      <SeeTheDetails/>
    </div>
  )
}
export default TrailCard
