import React, {/*useState*/} from 'react';
import Layout from '../../components/Layout';
//import { ITodo } from '../../interfaces'
import Form from "../../components/Form";


const CreatePost: React.FC = () => {
    //const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (data:any) => {
        // const newTodo: ITodo = {
        //     title: title,
        //     id: Date.now(),
        //     completed: false
        // }
        // //setTodos([newTodo, ...todos])
        // setTodos(prev => [newTodo, ...prev])
        console.log(data)
    }


    return (<Layout title="Create Post">
        <div className="container">
            <h1>Create Post</h1>
            <Form onAdd={addHandler}/>
        </div>
    </Layout>
)};

export default CreatePost;
