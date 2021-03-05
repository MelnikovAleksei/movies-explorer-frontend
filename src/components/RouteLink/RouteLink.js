import React from 'react';
import { Link } from 'react-router-dom';

function RouteLink({ linkPath, linkTitle }) {

  const ROUTE_LINK_STYLES = {
    link: 'route-link',
  };

  return (
    <Link
      className={ROUTE_LINK_STYLES.link}
      to={linkPath}
    >
      {linkTitle}
    </Link>
  )
}

export default RouteLink;
