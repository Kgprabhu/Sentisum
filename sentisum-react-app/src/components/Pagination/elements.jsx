import styled from 'styled-components'

const PaginationList  = styled.ul`
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
export {PaginationList,PaginationItem,PaginationWrapper,PaginationPrev,PaginationNext}