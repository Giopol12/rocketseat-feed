import { ThumbsUp } from 'phosphor-react'
import { LikeContainer } from './styles'
import { useState } from 'react'

export function Like() {
  const [like, setLike] = useState(() => 0)
  function incrementLike() {
    setLike((state) => state + 1)
  }
  return (
    <LikeContainer>
      <button onClick={incrementLike}>
        <ThumbsUp size={20} />
        <span className="spacer">like</span>
      </button>
    </LikeContainer>
  )
}
