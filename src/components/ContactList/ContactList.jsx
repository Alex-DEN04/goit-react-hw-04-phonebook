import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import Contact from '../Contact/Contact';

export default function ContactList({ items, onDeleteContact }) {
  return (
    <Box as="ul">
      {items.map(item => (
        <Contact
          key={item.id}
          item={item}
          onDeleteContact={onDeleteContact}
        ></Contact>
      ))}
    </Box>
  );
}

ContactList.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};
