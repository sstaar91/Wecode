import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faStar,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  faClock,
  faThumbsUp,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

const Icon = ({ icon, size = 'sm', spin = false, color = 'black' }) => {
  const icons = {
    faStar: faStar,
    faThumbsUp: faThumbsUp,
    faLocationDot: faLocationDot,
    faClock: faClock,
    faSpinner: faSpinner,
    faUser: faUser,
  };

  return (
    <FontAwesomeIcon icon={icons[icon]} size={size} spin={spin} color={color} />
  );
};

export default Icon;
