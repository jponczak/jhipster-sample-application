import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './country.reducer';

export const CountryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const countryEntity = useAppSelector(state => state.country.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="countryDetailsHeading">Country</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{countryEntity.id}</dd>
          <dt>
            <span id="countryName">Country Name</span>
          </dt>
          <dd>{countryEntity.countryName}</dd>
          <dt>Region</dt>
          <dd>{countryEntity.region ? countryEntity.region.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/country" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/country/${countryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CountryDetail;
