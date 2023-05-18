import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(probs) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={probs.signIn} color="red" >Giriş Yap</Button>
            <Button primary style={{marginLeft:"0.5 em"}}>Kayıt Ol</Button>
        </Menu.Item>
        
    </div>
  )
}
