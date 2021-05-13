import './Pokeball.css';
import getColor from './lib/colors';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Pokeball({ name, type, onSetFree }) {
  return (
    <PokeballStyle style={{ borderColor: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onSetFree(name)}>🏜</button>
    </PokeballStyle>
  );
}

export const PokeballStyle = styled.article`
  background: transparent;
  font-size: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border-color: white;
  cursor: pointer;
`;

PokeballStyle.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onSetFree: PropTypes.func,
};
