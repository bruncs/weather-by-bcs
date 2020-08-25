import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo';
import Button from '../Button';
import SearchResultBox from '../SearchResultBox';

import { ApplicationState } from '../../store';
import { listCityRequest } from '../../store/cities/actions';

import styles from './Layout.module.css';
import Toast from '../Toast';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  const cityIds = useSelector((state: ApplicationState) => state.cities.allIds);
  const coordinates = useSelector((state: ApplicationState) => state.coordinates);
  const loading = useSelector((state: ApplicationState) => state.cities.fetchState.loading);
  const error = useSelector((state: ApplicationState) => state.cities.fetchState.error);

  const handleSearch = async () => {
    dispatch(listCityRequest(coordinates));
  };

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayHeader}>
        <Logo />
        {error && <Toast message={error.message} />}
        {coordinates && <Button text="Search" loading={loading} onClick={handleSearch} />}
      </div>
      <div className={styles.overlayContent}>{cityIds.length > 0 && <SearchResultBox />}</div>
    </div>
  );
};

export default Layout;
