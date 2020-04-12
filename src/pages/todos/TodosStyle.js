import styled from 'styled-components/macro';

export const TodosPageWrapper = styled.div`
    padding: 2rem;
    
    @media (max-width: 991px) {
        text-align: center;
    }
`;

export const TodosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;