import React from 'react';
import Loading from '@components/Loading';

const Loader = component => () => {
  const Component = () => component;
  const { loading } = component.props;
  if (!loading) return <Component />;
  return <Loading />;
};

export default Loader;
