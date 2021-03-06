import styled from 'styled-components';
import device from './../../util/device';

export const Container = styled.div`
    width: 1200px;
    border-radius: 8px;
    margin: auto;
    margin-top: 200px;
    background: #fff;
    padding: 30px 40px;
    border-radius: 16px;
    width: 500px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

    & h1 {
        margin-bottom: 40px;
    }

    & button {
        margin-bottom: 10px;
    }

    & .red {
        color: red;
    }

    @media ${device.mobile} {
        width: 100%;
    }

    @media ${device.tablet} {
        height: calc(100% - 50px);
        margin-top: 50px;
    }
`;

export const ReadOnly = styled.div`
    margin-bottom: 50px;
`;

export const ReadOnlyField = styled.div`
    border-bottom: 1px solid #c4c4c4;
    font-size: 14px;
    color: var(--text0);
    padding-bottom: 5px;

    & p {
        color: var(--text1);
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
    }
`;

export const DeleteAccountText = styled.div`
    & p {
        color: var(--text1);
        font-size: 14px;
        margin: 4px 0;
    }

    & p:last-child {
        color: red;
        font-weight: 700;
    }

    margin-bottom: 30px;
    text-align: center;
`;
