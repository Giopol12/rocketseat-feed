import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { User } from '../../components/User'
import { MainContainer, PublishedPosts } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <User />
        <PublishedPosts>
          <Post />
          <Post />
        </PublishedPosts>
      </MainContainer>
    </>
  )
}
