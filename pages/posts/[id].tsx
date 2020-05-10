import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import axios from 'axios';

type Props = {
    item?: Post;
    errors?: string;
};

export const StaticPropsDetail = (props: Props) =>{
    const { item, errors } = props;

    if (errors) {
        return (
            <Layout title="Error">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <Layout title={item ? item.title : 'Post Detail'}>
            <div className="container">{item && <ListDetail item={item} />}</div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    //const paths = [{ params: { id: ['id'] } }];
    const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
    const posts: Post[] = await res.data;
    const paths = posts.map(post => ({
        params: { id: post.id.toString() },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
        const item: Post = await res.data;
        //const item = samplePostData.find(data => data.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
