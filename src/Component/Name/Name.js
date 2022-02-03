import {useDispatch} from "react-redux";
import {deleteName, groovyName} from "../../Store/Slice";


const Name = ({name: {id, name, Nominal}}) => {
    const dispatch = useDispatch();

    const nameNominal = () => {
        dispatch(groovyName({}))
    };
    const deleteNameId = (id) => {
        dispatch(deleteName({id}))
                   }

    return(
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px', gap: '20px'}}>
            <label className={`${Nominal ? 'completed' : ''}`}>
                <input type="checkbox" onChange={nameNominal} value={Nominal} checked={Nominal}/> {name}</label>
                      <button onClick={() => {deleteNameId(id)}}>Delete</button>
        </div>

    )
}
export default Name;