import React from 'react';

import { User } from "@nx-netlify-deploy-poc/domain"

import { colors } from "../../theme/dark"

import styled from 'styled-components';
import { H2 } from '../../tipography';

/* eslint-disable-next-line */
export interface SharedHeaderProps {
  title: string
  user: User
}

const StyledSharedHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colors.darker};
  color: ${colors.darkText};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  & > ${H2} {
    margin-right: 8px;

  }
`

const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
`

export function SharedHeader({ title, user }: SharedHeaderProps) {
  return (
    <StyledSharedHeader>
      <Content>
        <H2>{title}</H2>
        <Profile>
          <H2>{user.name}</H2>
          <ProfileImg src={user.avatarUrl}/>
        </Profile>
      </Content>
    </StyledSharedHeader>
  );
}
