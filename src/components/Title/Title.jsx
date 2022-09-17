import PropTypes from 'prop-types';

import { TitleStyled } from './Title.styled';

export default function Title({ title }) {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
