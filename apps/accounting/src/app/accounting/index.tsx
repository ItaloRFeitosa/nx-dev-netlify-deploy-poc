import React from 'react'
import styled from 'styled-components'

import { H1, Dark } from '@nx-netlify-deploy-poc/ui'

const Container = styled.div`
  width: 100%;
  color: ${Dark.colors.white};
  padding-top: 48px;
`

export function Accounting(){
  return <Container>
      <H1>This is the page of Accounting</H1>
  </Container>
}
