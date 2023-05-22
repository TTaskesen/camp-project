import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(probs) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={probs.signIn} primary >Giriş Yap</Button>
            <Button  style={{marginLeft:"0.5em"}} primary>Kayıt Ol</Button>
        </Menu.Item>
        
    </div>
  )
}
