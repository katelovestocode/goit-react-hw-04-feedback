import styled from '@emotion/styled'

export const Item = styled.p`
display: flex;
padding: ${p => p.theme.space[1]}px;
`

export const Span = styled.span`
 font-weight: ${p => p.theme.fontWeights.bold};
 margin-right: ${p => p.theme.space[3]}px;
`

export const Title = styled.h2`
 margin-bottom: ${p => p.theme.space[3]}px;
`