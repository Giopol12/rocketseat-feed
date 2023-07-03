import styled from 'styled-components'
export const UserContainer = styled.section`
  align-self: start;
  max-width: 16rem;
  background: #202024;
  border-radius: 8px;
`
export const UserBoxBackground = styled.div`
  border-radius: 8px 8px 0 0;
  height: 4.5rem;

  background-image: url('https://s3-alpha-sig.figma.com/img/7b4c/c8ab/47e4b9b0ce3b2198883be1830957f349?Expires=1687132800&Signature=IUdCixd0vysR6ONDJyUyooIgmAZH2CtL1DbhqyM2v1oSDGNmdVDFuINY4b6RmbgdlhCh0VTatLrxAMKW1VatdVcY4wRoIbD8QRW8j68eNIGY82pGwGYV2~D41odf2CCSJwlVhSRJlSsQP1iSYrGQjW31osNwD1hWJmZO-z0hrjfJtl6ibSFfmDoOzjMM~tUaeJVDv76~-Gk8NvTltwKZ~7XtckfH4TMDmW4nT-xtlNygm4Ut6qWXZw1VJw3pbSwja71onYxhF7mk8vwD1r-akzTs224JhpR-VpXXeMkWL7y8xOvKZGO1SDP~jZFYbC6OELmvyHcwxTFG2u0p9AwzQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: cover;
`
export const UserProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  h2 {
    font-weight: 700;
    font-size: 1rem;
    margin-top: 1rem;
  }
  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #8d8d99;
  }
`

export const UserButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #323238;
  margin-top: 1.5rem;
  padding: 2rem;
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 700;
    font-size: 0.875rem;
    gap: 10px;
    background: transparent;
    border: 1px solid #00b37e;
    color: #00b37e;
    cursor: pointer;
    border-radius: 8px;
    padding: 16px 24px 16px 24px;
  }
  button:hover {
    background: #00b37e;
    color: white;
    transition: background, color, 0.1s;
  }
`
