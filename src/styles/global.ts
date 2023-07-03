import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
 body{
   font-family: 'Roboto', sans-serif;
    background:#121214;
    color:#E1E1E6
 }
 body,input,textarea,button{
   font:400 1rem Roboto,sans-serif
 }
`
