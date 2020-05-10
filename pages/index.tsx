import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Button = styled.div`
    //border: 10px solid red;
`

const IndexPage = () => (
    <Layout title="Home">
        <div className="container">
            <h1>Posts</h1>
            <div className="row">
                <div className="col s12 m4 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://materializecss.com/images/sample-1.jpg" alt=''/>
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <Button className="card-action">
                            <Link href="#"><a>This is a link</a></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
