import { ProfilePicture } from '../ProfilePicture'
import {
  PostContainer,
  CommentContainer,
  InfoProfileContainer,
  PostDetailsContainer,
  PublishedPostsContainer,
} from './styled'
import { Comment } from '../Comment'
import fotoPerfil from '../../assets/foto.jpg'

export function Post() {
  return (
    <PublishedPostsContainer>
      <PostDetailsContainer>
        <InfoProfileContainer>
          <ProfilePicture url={fotoPerfil} />
          <div>
            <strong>Jane Cooper</strong>
            <p>Dev Front-End</p>
          </div>
        </InfoProfileContainer>
        <p>Publicado há 1 h</p>
      </PostDetailsContainer>
      <PostContainer>
        <p>Fala galera</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a>👉 jane.design/doctorcare</a>
        <a>#novoprojeto #nlw #rocketseat</a>
      </PostContainer>
      <CommentContainer>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <button>Publicar</button>
      </CommentContainer>
      <Comment />
    </PublishedPostsContainer>
  )
}
