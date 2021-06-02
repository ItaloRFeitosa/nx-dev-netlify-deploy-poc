import React from 'react'
import { Route } from 'react-router-dom';

import { SharedLayout, SharedLayoutProps } from '@nx-netlify-deploy-poc/ui'
import { User } from '@nx-netlify-deploy-poc/domain';

import { Accounting } from './accounting';

const makeAccounting = (user: User): SharedLayoutProps => ({
    info:{
      title: 'Accounting',
      user
    },
    Content: Accounting
})

const makePages = (user: User) => [{
  exact: true,
  path: "/",
  component: () => <SharedLayout {...makeAccounting(user)}/>
}]

export function App() {
  const user: User ={
    name: "Italo Feitosa",
    avatarUrl: "https://avatars.githubusercontent.com/u/28817089?v=4",
    email: "italo85199@gmail.com",
    roles: ["developer"]
  }

  return <>
    {makePages(user).map((page) => <Route {...page}/>)}
  </>
}
