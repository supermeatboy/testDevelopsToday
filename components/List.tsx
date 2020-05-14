import * as React from 'react';
import ListItem from './ListItem';
import { Post } from '../interfaces';
import { Posts } from '../pages/style';

type Props = {
    items: Post[];
    onEditPost(id:string):void
    onDeletePost(id:string):void
};

const List: React.FunctionComponent<Props> = ({ items, onEditPost, onDeletePost }) => (
    <Posts className="row">
        {items.map((item) => (
            <div className="col s12 m4 l4" key={item.id}>
                <ListItem data={item} onEditPost={onEditPost} onDeletePost={onDeletePost} />
            </div>
        ))}
    </Posts>
);

export default List;
