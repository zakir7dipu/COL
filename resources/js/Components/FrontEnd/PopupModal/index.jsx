import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {modalAction} from "@/Featurs/PopupModal/PopupModalSlice.js";

function Index({size, haveHeader, children}) {
    const {isShow} = useSelector(state => state.modalAction)
    const dispatch = useDispatch()

    return (
        <Modal
            size={size ? size : 'lg'}
            show={isShow}
            onHide={() => dispatch(modalAction())}
            aria-labelledby="example-modal-sizes-title-lg"
            // centered
        >
            {haveHeader &&
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
            }

            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default Index;
