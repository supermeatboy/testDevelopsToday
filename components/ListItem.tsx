import * as React from 'react';
import Link from 'next/link';

import { Post } from '../interfaces';
import styled from 'styled-components';

type Props = {
    data: Post;
};

const Button = styled.div`
    color: red;
`;
const Preview = styled.a`
    display: block;
    cursor: pointer;
`;

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
    <div className="card">
        <Link href="/posts/[id]" as={`/posts/${data.id}`}>
            <Preview className="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg" alt="" />
                <span className="card-title">{data.title}</span>
            </Preview>
        </Link>
        <div className="card-content">
            <p>{data.body}</p>
        </div>
        <Button className="card-action">
            <Link href="/posts/[id]" as={`/posts/${data.id}`}>
                <a>This is a link</a>
            </Link>
        </Button>
    </div>
);

export default ListItem;
