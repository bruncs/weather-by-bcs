import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { City } from '../../store/cities/types';

import styles from './SearchResultBox.module.css';

const SearchResultBox: React.FC = () => {
  const [selectedId, setSelectedId] = useState<City['id']>(null);

  const cities = useSelector((state: ApplicationState) => state.cities.byId);
  const cityIds = useSelector((state: ApplicationState) => state.cities.allIds);

  const truncate = (name: string) => {
    if (name.length > 20) return `${name.slice(0, 20).trim()}...`;
    return name;
  };

  return (
    <div className={styles.container}>
      {selectedId ? (
        <>
          <div className={styles.header}>
            <button className={styles.navButtonBack} onClick={() => setSelectedId(null)}>
              <img src="/images/angle-left.svg" />
              <span>Back to results</span>
            </button>
          </div>
          <div className={styles.cityName}>{cities[selectedId].name}</div>
          <div className={styles.temperatures}>
            <div className={styles.minTemp}>
              <div className={styles.label}>Min</div>
              <div className={styles.value}>{cities[selectedId].minTemp.toFixed(0)}°</div>
            </div>
            <div className={styles.maxTemp}>
              <div className={styles.label}>Max</div>
              <div className={styles.value}>{cities[selectedId].maxTemp.toFixed(0)}°</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.title}>Closest cities</div>
            <div className={styles.subtitle}>{cityIds.length} results found</div>
          </div>
          <ul className={styles.list}>
            {cityIds.map((id) => (
              <li className={styles.listItem} key={id}>
                <button className={styles.navButton} onClick={() => setSelectedId(id)}>
                  <span>{truncate(cities[id].name)}</span>
                  <img src="/images/chevron-circle-right.svg" />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchResultBox;
