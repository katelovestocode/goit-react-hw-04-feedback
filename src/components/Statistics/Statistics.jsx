import PropTypes from 'prop-types';
import { Item, Span, Title, ItemTotal, ItemFeedback } from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box display="flex" flexDirection="column" p={10} as="div">
            <Title> Statistics </Title>
            <Item> <Span> Good: </Span> {good} </Item>
            <Item> <Span> Neutral: </Span> {neutral} </Item>
            <Item> <Span> Bad:</Span> {bad}</Item>
            <ItemTotal> <Span> Total: </Span> {total}</ItemTotal>
            <ItemFeedback> <Span> Positive feedback: </Span> { positivePercentage} % </ItemFeedback>
        </Box>
    )
 }

 Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,}

