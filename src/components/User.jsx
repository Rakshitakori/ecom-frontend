import React from 'react'
const User = ( {name,email,course,children} ) => {
  return (
    <>
    <div> name:{name}</div>
    <div> email:{email}</div>
    <div>course:{course}</div>
    {children}
    </>
  )
}

export default User