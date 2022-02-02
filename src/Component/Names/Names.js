import {useSelector} from "react-redux";
import Name from "../Name/Name";

import "./Names.css"

export default function Names(){
    const {names} = useSelector(state => state['nameReducer']);
    return(
        <div>
            <div className="name">All:{names.length} Completed: {names.filter(({Nominal}) => Nominal).length}</div>
            {names.map(name => <Name key={name.id} name={name}/>)}
        </div>
    )
}