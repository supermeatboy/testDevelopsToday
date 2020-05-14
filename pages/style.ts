import styled from 'styled-components';

export const Posts = styled.div`
    display: flex;
    flex-flow: row wrap;
    & > *{
        margin: 0!important;
    }
`;
export const Input = styled.input`
    &:focus + label,
    &:valid + label {
        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(-14px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: #26a69a;
    }
`;
export const Textarea = styled.textarea`
    &.materialize-textarea {
        min-height: 150px;
    }
    &:focus + label,
    &:valid + label {
        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(-14px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: #26a69a;
    }
`;