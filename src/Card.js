import getColor from './lib/colors';

import './Card.css';
import Pokeball from './images/pokeball.svg';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type, onPlaceIntoPokedex } = props;

  return (
    <CardWrapper style={{ background: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onPlaceIntoPokedex(name)}>
        <img
          src={Pokeball}
          width="30"
          height="30"
          alt="Catch pokemon and add to pokeball"
        />
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  background: salmon;
  color: ivory;
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.5rem;

  display: grid;
  place-items: center;
`;

CardWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onPlaceIntoPokedex: PropTypes.func,
};
