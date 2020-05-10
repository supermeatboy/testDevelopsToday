import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const PostsPage: React.FC = () => (
    <Layout title="Posts">
        <h1>Posts</h1>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default PostsPage
