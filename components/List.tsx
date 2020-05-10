import * as React from 'react';
import ListItem from './ListItem';
import { Post } from '../interfaces';

type Props = {
    items: Post[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
    <div className="row">
        {items.map((item) => (
            <div className="col s12 m4 l4" key={item.id}>
                <ListItem data={item} />
            </div>
        ))}
    </div>
);

export default List;
