import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addName} from "../../Store/Slice";

import "./Form.css"

export default function Form(){
const {handleSubmit, register, reset} = useForm();
const dispatch = useDispatch();

const submit = (data) => {
    dispatch(addName({data}))
    reset()
}
return(
    <form onSubmit={handleSubmit(submit)}>
        <label>Name: <input type="text" {...register('name', {required: true, minLength: 3})} placeholder="Enter the name"/></label>
        <button>Save</button>
    </form>
)
}