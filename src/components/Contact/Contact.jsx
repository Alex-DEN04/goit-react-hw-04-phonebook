import PropTypes from 'prop-types';

import { Item, Button } from './Contact.styled';

export default function Contact({ item, onDeleteContact }) {
  return (
    <Item>
      {item.name}: {item.number}
      <Button type="button" onClick={() => onDeleteContact(item.id)}>
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};
