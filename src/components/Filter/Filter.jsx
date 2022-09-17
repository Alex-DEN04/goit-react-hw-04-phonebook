import { Box } from 'components/Box';
import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <Box ml={5} gap={3}>
      <Label htmlFor="">Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Box>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
