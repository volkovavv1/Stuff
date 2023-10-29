import React, { useState } from 'react'

import styles from "../../styles/User.module.css"
import { createUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmpty = Object.values(values).some(val => !val);

        if(isEmpty) return

        dispatch(createUser(values))

        closeForm();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        name="email" 
                        value={values.email} 
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input 
                        type="name" 
                        placeholder="Your name" 
                        name="name" 
                        value={values.name}  
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input 
                        type="password" 
                        placeholder="Your password" 
                        name="password" 
                        value={values.password}  
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input 
                        type="avatar" 
                        placeholder="Your avatar" 
                        name="avatar" 
                        value={values.avatar}  
                        autoComplete="off" 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.link} onClick={() => toggleCurrentFormType('login')}>I already have an account</div>

                <button type='submit' className={styles.submit}>
                    Create an account
                </button>
            </form>
        </div>
    )
}

export default UserSignupForm