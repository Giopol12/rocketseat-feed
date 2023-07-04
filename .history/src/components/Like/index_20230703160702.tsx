import { ThumbsUp } from 'phosphor-react'
import { LikeContainer } from './styles'
import { useState } from 'react'

export function Like() {
  const [like, setLike] = useState(() => 0)
  function incrementLike() {}
  return (
    <LikeContainer>
      <button onClick={incrementLike}>
        <ThumbsUp size={20} />
        <span className="spacer">0</span>
      </button>
    </LikeContainer>
  )
}
