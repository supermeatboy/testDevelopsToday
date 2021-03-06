import Layout from '../components/Layout';
import List from '../components/List';
import { Post } from '../interfaces';
import { GetStaticProps } from 'next';
import axios from 'axios';

type Props = {
    items: Post[];
};
const IndexPage = ({ items }: Props) => {

    const onEditPost = (id: string) =>{
        console.log(id)
    }
    const onDeletePost = (id: string) =>{
        const res = axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
        console.log(id, res)
    }

    return (
    <Layout title="Home">
        <div className="container">
            <h1>Posts</h1>
            <List items={items} onEditPost={onEditPost} onDeletePost={onDeletePost} />
        </div>
    </Layout>
)};

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const res = await axios.get('https://simple-blog-api.crew.red/posts');
    const items: Post[] = await res.data;
    return { props: { items } };
};

export default IndexPage;
