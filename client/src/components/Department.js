import React from 'react';
import { Card, } from 'semantic-ui-react';

const Department = ({ department, }) => (
  <Card>
    <Card.Content>
      <Card.Header>{ department.name }</Card.Header>
    </Card.Content>
  </Card>
);

export default Department;