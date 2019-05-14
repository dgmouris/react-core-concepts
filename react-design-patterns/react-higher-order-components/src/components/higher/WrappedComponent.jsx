import React from 'react';
import secretToLife from './SecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}
    <p>
      Say hello to {props.jim}
    </p>
    <p>Hello to {props.name("act on this fuckers")}</p>
  </div>
);

const WrappedComponent = secretToLife(DisplayTheSecret);

export default WrappedComponent;