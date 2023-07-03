import { ProfilePicture } from '../ProfilePicture'
import {
  UserBoxBackground,
  UserButtonContainer,
  UserContainer,
  UserProfileBox,
} from './styles'

import fotoPerfil from '../../assets/foto.jpg'
import { PencilLine } from 'phosphor-react'

export function User() {
  return (
    <UserContainer>
      <UserBoxBackground />
      <UserProfileBox>
        <ProfilePicture url={fotoPerfil} />
        <h2>Giopol do Galo</h2>
        <p>Web developer</p>
      </UserProfileBox>
      <UserButtonContainer>
        <button>
          <PencilLine size={20} /> Editar seu perfil
        </button>
      </UserButtonContainer>
    </UserContainer>
  )
}
