import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DomainProps {}

const StyledDomain = styled.div`
  color: pink;
`;

export function Domain(props: DomainProps) {
  return (
    <StyledDomain>
      <h1>Welcome to domain!</h1>
    </StyledDomain>
  );
}

export default Domain;
