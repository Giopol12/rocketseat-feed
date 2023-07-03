import styled from 'styled-components'

export const CommentContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
`

export const CommentInformationsContainer = styled.div`
  background: #29292e;
  width: 42.875rem;
  padding: 1rem;
  border-radius: 9px;
`
export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  strong {
    line-height: 160%;
  }
  p,
  span,
  svg {
    color: #8d8d99;
  }

  p {
    font-size: 0.75rem;
    line-height: 160%;
  }
  button {
    background: transparent;
    border: none;
  }
  svg:hover {
    cursor: pointer;
    color: #f75a68;
    transition: 0.1s;
  }
`
export const CommentContent = styled.div`
  margin-top: 0.625rem;
  font-size: 0.875rem;
  line-height: 160%;
`
