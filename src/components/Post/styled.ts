import styled from 'styled-components'

export const PublishedPostsContainer = styled.main`
  max-width: 832px;
  background: #202024;
  padding: 2.5rem;
  border-radius: 8px;
`

export const PostDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  p {
    font-size: 0.875rem;
    color: #8d8d99;
  }
`
export const InfoProfileContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
`
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #c4c4cc;
  a {
    color: #00b37e;
    cursor: pointer;
  }
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #323238;
`
export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  textarea {
    resize: none;
    border: 1px solid #00b37e;
    border-radius: 8px;
    min-height: 6rem;
    background: #121214;
    padding: 1rem;
    color: #c4c4cc;
  }
  textarea:focus {
    outline: 1px solid #00b37e;
  }
  button {
    align-self: start;
    border: none;

    border-radius: 8px;
    color: #fff;
    background: #00875f;
    padding: 1rem 1.5rem 0.875rem;
  }
  button:hover {
    background: #00b37e;
    cursor: pointer;
    transition: background 0.1s;
  }
`
