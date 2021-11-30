import react from 'react';
import './listRadio.css';

function ListRadio(props) {
    return (
        <label class="container-radio">{props.name}
            <input type="radio" name="radio" />
            <span class ="checkmark-radio"></span>
        </label>
    )
}

export default ListRadio;