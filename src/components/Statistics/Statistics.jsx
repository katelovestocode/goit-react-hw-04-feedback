import PropTypes from 'prop-types';
import { Item, Span, Title } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box display="flex" flexDirection="column" p={10} as="div">
            <Title> Statistics </Title>
            <Item> <Span> Good: </Span> {good} </Item>
            <Item> <Span> Neutral: </Span> {neutral} </Item>
            <Item> <Span> Bad:</Span> {bad}</Item>
            <Item> <Span> Total: </Span> {total}</Item>
            <Item> <Span> Positive feedback: </Span> { positivePercentage} % </Item>
        </Box>
    )
 }

 Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,}

