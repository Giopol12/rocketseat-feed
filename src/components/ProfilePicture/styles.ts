import styled from 'styled-components'
interface ProfilePictureContainerProps {
  hasBorder: boolean
}

export const ProfilePictureContainer = styled.img<ProfilePictureContainerProps>`
  box-sizing: content-box;
  height: 50px;
  width: 50px;
  background: #202024;
  padding: ${(props) => (props.hasBorder ? '4px' : 0)};
  border: ${(props) => (props.hasBorder ? '2px solid #00B37E' : 0)};
  border-radius: 10px;
`
