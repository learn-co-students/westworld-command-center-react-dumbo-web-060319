import React from 'react';
import { Card } from 'semantic-ui-react';
import Host from './Host';

const HostList = props => {
  let hostListItems = props.hosts.map(host => {
    return <Host key={host.id} hostData={host} />;
  });
  return <Card.Group itemsPerRow={6}>{hostListItems}</Card.Group>;
};

export default HostList;
