import { ThumbsUp } from 'phosphor-react'
import { LikeContainer } from './styles'

export function Like() {
  return (
    <LikeContainer>
      <button>
        <ThumbsUp size={20} />
        <span className="spacer">0</span>
      </button>
    </LikeContainer>
  )
}
