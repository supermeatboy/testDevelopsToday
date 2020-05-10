import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const NewPostPage: React.FC = () => (
    <Layout title="NewPostPage">
        <h1>NewPostPage</h1>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default NewPostPage
