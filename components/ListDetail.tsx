import * as React from 'react';

import { Post } from '../interfaces';

type ListDetailProps = {
    item: Post;
};

const ListDetail: React.FC<ListDetailProps> = ({ item: post }) => (
    <>
        <div className="row">
            <div className="col s12">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">Textarea</label>
                    </div>
                </div>
            </form>
        </div>
    </>
);

export default ListDetail;
