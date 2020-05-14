import React, {/*useState*/} from 'react';
import Layout from '../../components/Layout';
//import { ITodo } from '../../interfaces'
import Form from "../../components/Form";
import axios from "axios";


const CreatePost: React.FC = () => {
    //const [todos, setTodos] = useState<ITodo[]>([])

    const addHandlerPost = async (data:any) => {
        const res = await axios.post('https://simple-blog-api.crew.red/posts', data);
        console.log(res.data)
    }


    return (<Layout title="Create Post">
        <div className="container">
            <h1>Create Post</h1>
            <Form onAdd={addHandlerPost}/>
        </div>
    </Layout>
)};

export default CreatePost;
