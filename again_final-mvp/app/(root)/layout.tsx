import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
      <h1>Home Layout</h1>
      { children }
    </div>
  )
}

export default RootLayout
