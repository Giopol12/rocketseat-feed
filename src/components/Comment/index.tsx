import { ProfilePicture } from '../ProfilePicture'
import {
  CommentContainer,
  CommentContent,
  CommentInfo,
  CommentInformationsContainer,
} from './styles'
import fotoComment from '../../assets/foto.jpg'
import { Trash } from 'phosphor-react'
import { Like } from '../Like'

export function Comment() {
  return (
    <CommentContainer>
      <ProfilePicture hasBorder={false} url={fotoComment} />
      <div>
        <CommentInformationsContainer>
          <CommentInfo>
            <div>
              <strong>
                Devon Lane <span>(você)</span>
              </strong>
              <p>Cerca de 2h</p>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </CommentInfo>
          <CommentContent>
            <p>Muito bom Devon, parabéns!! 👏👏 </p>
          </CommentContent>
        </CommentInformationsContainer>
        <Like />
      </div>
    </CommentContainer>
  )
}
