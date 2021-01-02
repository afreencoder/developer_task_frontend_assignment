import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    padding: 20px;
`;

export const TimeLineContainer = styled.div`
    flex: 2;
    padding: 20px;
    border: 2px solid #efefef;
    .rounded-circle{
        background-color: rgb(191 197 250);
        padding:10px;
        text-align:center;
    }
`;

export const DataTableContainer = styled.div`
    flex: 8;
    padding: 20px;
    border: 2px solid #efefef;
    margin-left: 20px;
    font-size: 12px;
    th {
        color: #8c8d8f;
    }
    tr{
        height: 60px;
        line-height: 48px;
    }
    .status-delivered{
        color: green;
    }
`;
export const Line = styled.div`
    position: relative;
`;