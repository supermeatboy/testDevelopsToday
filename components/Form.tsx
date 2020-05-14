import React from 'react';
import { Input, Textarea } from '../pages/style';
import { useForm } from 'react-hook-form';

interface FormProps {
    onAdd(data: any): void;
}
type Inputs = {
    title: string;
    body: string;
};

const Form: React.FC<FormProps> = ({onAdd}) => {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data:any) => onAdd(data);

    return (
        <div className="input-field mt2">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="input-field">
                        <Input
                            name="title"
                            id="input_text"
                            type="text"
                            ref={register({ required: true })} />
                        <label htmlFor="input_text">Title post</label>
                        {errors.title && <span>This field is required</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <Textarea
                            name="body"
                            id="textarea1"
                            ref={register({ required: true })}
                            className="materialize-textarea" />
                        <label htmlFor="textarea1">Type here post description</label>
                        {errors.body && <span>This field is required</span>}
                    </div>
                </div>
                <div className="row right-align">
                    <button className="btn waves-effect waves-light" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Form;
