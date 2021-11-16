import React, { useEffect, useState} from 'react'

const SignInTile = props => {
  if (props.signedIn === null){
    return (
    <div>
      <a href='/users/sign_in'> Sign In </a> / <a href ='/users/sign_up'>Sign Up</a>
    </div>
    )
  } else {
    return (
    <div>
      <a href ='/users/sign_out' data-method='delete'> Sign Out</a>
    </div>
    )
  }
}


export default SignInTile