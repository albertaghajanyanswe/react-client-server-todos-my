import {useState} from 'react';
import M from 'messages';

const useForm = (submitCallback, initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const capitalize = (str) => {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCallback();
    }

    const handleChange = (e, input) => {
        e.persist();
        const {name, value} = e.target;
        setValues((values) => ({...values, [name]: value}));
        if (input.validate && value.length > 0) {
            const error = input.validate(value);
            setErrors((errors) => ({...errors, ...error}));
        } else if (value.trim() === '' && input.required) {
            setErrors((errors) => ({
                ...errors,
                [name]: `${M.get('validation.required').replace('{name}', capitalize(name))}.`
            }));
        } else {
            setErrors({...errors, [name]: ''});
        }
    }

    return { values, handleChange, handleSubmit, errors };
}

export default useForm;
