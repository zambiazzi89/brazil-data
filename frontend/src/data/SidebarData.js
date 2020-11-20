import React from 'react'
import { FaBook, FaHeart, FaVoteYea } from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Educação',
    path: '/edu',
    icon: <FaBook />,
    cName: 'nav-text',
  },
  {
    title: 'Saúde',
    path: '/saude',
    icon: <FaHeart />,
    cName: 'nav-text',
  },
  {
    title: 'Política',
    path: '/pol',
    icon: <FaVoteYea />,
    cName: 'nav-text',
  },
]
