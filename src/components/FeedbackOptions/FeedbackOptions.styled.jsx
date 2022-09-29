import styled from '@emotion/styled'

export const List = styled.ul`
display: flex;
align-items: center;
justify-conten: center;
`

export const ListItem = styled.li`
padding: ${p => p.theme.space[1]}px;
margin-bottom: ${p => p.theme.space[3]}px;
`

export const Button = styled.button`
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.boxColor};
border:  ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
border-radius:${p => p.theme.radii.normal};
font-weight: ${p => p.theme.fontWeights.bold};
width: 80px;

`