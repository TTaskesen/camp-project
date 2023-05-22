import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(probs) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={probs.signIn} color="red" >Giriş Yap</Button>
            <Button  style={{marginLeft:"0.5em"}} color="olive">Kayıt Ol</Button>
        </Menu.Item>
        
    </div>
  )
}
