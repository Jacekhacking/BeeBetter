import React  from 'react';
import styles from "./AdminEditor.module.css"


const AdminEditor = () => {
    return (
        <>
            <h2 className={`${styles['blog-header']} text-dark ff-serif-bold fs-700`}>New Blog Post</h2>
            <div className={`${styles['blog-area-container']}`}>
                <textarea className={`${styles['blog-area']}`} name="BlogArea" id="" cols="100" rows="10" placeholder="Blog post goes here!"></textarea>
            </div>
        </>
    )
}

export default AdminEditor;