import * as React from 'react';
import Link from 'next/link';

import { Post } from '../interfaces';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    padding: 0 10px;
`;
const ButtonGroup = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 0 0 0;
    background-color: transparent;
    opacity: 0;
    & > *{
        margin: 0 5px 0 0;
    }
`;
const Preview = styled.a`
    display: block;
    cursor: pointer;
`;
const Card = styled.div`
    &:hover{
        .button-group{
            opacity: 1;
        }
    }
`;

type Props = {
    data: Post;
    onEditPost(id:string):void
    onDeletePost(id:string):void
};

const ListItem: React.FunctionComponent<Props> = ({ data, onEditPost, onDeletePost }) => (
    <Card className="card">
        <ButtonGroup className='button-group'>
            <Button className="btn waves-effect waves-light" onClick={() => onEditPost(data.id.toString())}>
                <i className="material-icons">edit</i>
            </Button>
            <Button className="btn waves-effect waves-light" onClick={() => onDeletePost(data.id.toString())}>
                <i className="material-icons">delete</i>
            </Button>
        </ButtonGroup>
        <Link href="/posts/[id]" as={`/posts/${data.id}`}>
            <Preview className="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg" alt="" />
                <span className="card-title">{data.title}</span>
            </Preview>
        </Link>
        <div className="card-content">
            <p>{data.body}</p>
        </div>
        <div className="card-action text-center">
            <Link href="/posts/[id]?edit" as={`/posts/${data.id}`}>
                <a>This is a link</a>
            </Link>
        </div>
    </Card>
);

export default ListItem;
