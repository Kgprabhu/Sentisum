import styled from 'styled-components'
import { PropTypes } from 'mobx-react';

const Header = styled.div``
const SearchPageWrapper = styled.div``
const Sentence = styled.li `
    text-align: left;
    border-bottom: 1px solid #a2a1a1;
    padding-bottom: 16px;
    margin-top: 15px;
    list-style: none;
    padding: 0 16px 16px 16px;
`
const SentenceList = styled.ul`
    flex: 2 0 0;
`
const SentenceHeader = styled.h2`
`
const SentenceWrapper =  styled.div`
    display:flex;
`
const SentimentWrapper = styled.div`
    flex : 1 0 0 ;
`
const MathcedSentence = styled.div`
    flex : 2 0 0;
`
const IconsWrapper = styled.div`
    display: flex;
`
const PostiveIcon = styled.div`
    flex : 2 0 0;
`
const NegativeIcon = styled.div`
    flex: 2 0 0;
`
const Pagination  = styled.ul`
    display: flex;
    list-style: none;
    margin:0px;
    padding: 0 5px;
`
const PaginationItem = styled.li`
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    /* border-color: blue; */
    border: 1px solid #dee2e6;
    cursor:pointer;
    ${props => props.isActive && `
        background:blue;
    `
    }
`
const PaginationWrapper = styled.div`
    display:flex;
    align-items:center;
    padding-left:40px;

    
`
const PaginationPrev = styled.div`
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    border: 1px solid #dee2e6;
    ${props => props.isActive && `
        background:blue;
    `
    }
    cursor:pointer;
`

const PaginationNext = styled.div`
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    border: 1px solid #dee2e6;
    cursor:pointer;
    ${props => props.isActive && `
        background:blue;
    `
    }
`

export{Header,PaginationWrapper,
    PaginationPrev,PaginationNext,SearchPageWrapper,Sentence,SentenceList,SentenceHeader,SentenceWrapper,SentimentWrapper,MathcedSentence,IconsWrapper,PostiveIcon,NegativeIcon,PaginationItem,Pagination}