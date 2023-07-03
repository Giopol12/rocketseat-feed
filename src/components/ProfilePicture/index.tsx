import { ProfilePictureContainer } from './styles'

interface ProfilePictureProps {
  url: string
  hasBorder?: boolean
}
export function ProfilePicture({ url, hasBorder = true }: ProfilePictureProps) {
  return <ProfilePictureContainer hasBorder={hasBorder} src={`${url}`} />
}
