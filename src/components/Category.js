import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImageButton from './ImageButton';

/* Category Modal for selecting topic */
const Category = () => {

    let categories = ['entertainment', 'finance', 'food', 'gaming', 'general', 'music', 'science', 'sports', 'technology'];

    useEffect(() => {
        let category_btns = document.querySelectorAll('.img-button');
        categories.map((elem, index) => {
            category_btns[index].style.backgroundImage = `url("../images/${elem}.jpeg")`;
            category_btns[index].addEventListener('click', (elem) => {
                let button_text = elem.target.innerHTML;
                let selected_category = document.querySelector('#selected-category');
                let close_modal_btn = document.querySelector('#modal-close-btn');
                selected_category.innerHTML = button_text + " News";
                close_modal_btn.click();
            })
        })
    }, [])

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h5 className="modal-title" id="exampleModalLabel">Choose Today's Topic</h5>
                        </div>
                        <div className="modal-body">
                            <div className="row align-middle justify-content-center">
                                {categories.map((elem) => {
                                    let link = "/" + elem;
                                    return (<div className="col-md-4 my-2 flex-wrap d-flex justify-content-center" key={elem}>
                                        <Link to={link}><ImageButton name={elem} /></Link>
                                    </div>)
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className='bg-radial-grad ms-auto me-auto'>
                                <button type="button" id='modal-close-btn' className="button" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category