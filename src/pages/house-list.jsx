import { HousePreview } from '../cmps/house-list-cmps/house-preview';
import { staysService } from '../services/stays.services';
import { useEffect, useState } from 'react';
export function HouseList() {
  const [stays, setStays] = useState({});

  useEffect(() => {
    staysService.query().then((stay) => setStays(stay));
  }, []);

  return (
    <div className="house-list">
      <div className="stays-container">
        {stays.length > 0
          ? stays.map((stay) => <HousePreview stay={stay} />)
          : 'loading'}
      </div>
    </div>
  );
}
