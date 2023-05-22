import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(probs) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/AOLn63HkMcF5ckURNRmxo0pjJ9USJMcieuWxWrIBmrZwhw=s32-c-mo"/>
                <Dropdown pointing="top left" text="Taşkesen">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={probs.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
        </Menu.Item>
    </div>
  )
}
