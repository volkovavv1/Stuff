import React from "react";

import styles from "../../styles/Cart.module.css"

import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFavourites } from "../../features/user/userSlice";

const Favourites = () => {
    const dispatch = useDispatch();
    const { favourites } = useSelector(({ user }) => user)

    const removeItem = (id) => {
        dispatch(removeItemFromFavourites(id))
    }
    
    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Favourite items</h2>

            {!favourites.length || favourites.length === 0? (
                <div className={styles.empty}>Here is empty</div>
            ) : (
                <>
                <div className={styles.list}>
                    {favourites.map((item) => {
                        const { title, category, images, price, id } = item

                        return (                        
                            <div className={`styles.item ${styles.itemFav}`} key={id}>
                                <div 
                                    className={styles.image} 
                                    style={{ backgroundImage: `url(${images[0]})` }} 
                                />
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{title}</h3>
                                    <div className={styles.category}>{category.name}</div>
                                </div>

                                <div className={styles.price}>{price}$</div>

                                <div className={styles.close} onClick={() => removeItem(item.id)}>
                                        <svg className="icon">
                                            <use
                                                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                                            />
                                        </svg>
                                    </div>
                            </div>
                        )
                    })}
                </div>
                </>
            )}  
        </section>
    )
}

export default Favourites