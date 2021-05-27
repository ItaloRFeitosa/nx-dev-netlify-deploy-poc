import React from 'react'
import styled from 'styled-components'

import { H1, Dark } from '@nx-netlify-deploy-poc/ui'

const Container = styled.div`
  width: 100%;
  color: ${Dark.colors.white};
  padding-top: 48px;
`

export function Dashboard(){
  return <Container>
      <H1>This is the page of Dashboard Changed</H1>
  </Container>
}
