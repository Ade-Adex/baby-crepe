// /context/UserContext.tsx
'use client'

import React, { createContext, useContext } from 'react'
import { mockUser } from '@/app/data/user'
import { User } from '@/app/types/user'

interface UserContextType {
  user: User
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={{ user: mockUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
