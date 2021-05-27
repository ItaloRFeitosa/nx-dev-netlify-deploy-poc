import { User } from '@nx-netlify-deploy-poc/domain'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/dark'
import { SharedHeader } from '../shared-header'

export type SharedLayoutProps = {
  info:{
    user: User,
    title: string,
  },
  Content: (props: Record<string, unknown>) => JSX.Element,
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  font-family: sans-serif;
  background-color: ${colors.darkest};

  > main {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`

export function SharedLayout ({info, Content}: SharedLayoutProps) {
  return <Container>
    <SharedHeader {...info} />
    <main>
      <Content {...info}/>
    </main>
  </Container>
}

