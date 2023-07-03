import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
export function Header() {
  return (
    <HeaderContainer>
      <img width={208} src={Logo} alt="Logo Ignite" />
    </HeaderContainer>
  )
}
