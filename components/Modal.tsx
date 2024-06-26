'use client'

import React, { Fragment, useState } from 'react'
import { Dialog, Transition, TransitionChild } from '@headlessui/react'

const Modal = () => {

    let [isOpen, setIsOpen] = useState(true)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

  return (
    <>
        <button className='btn' type='button' onClick={openModal}>
            Track
        </button>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' open={isOpen} onClose={closeModal} className='dialog-container'>
                <div className='min-h-screen px-4 text-center'>
                    <TransitionChild
                        as={Fragment}
                        enterFrom='opacity-0'
                        enterTo='opacity100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div>Child</div>
                    </TransitionChild>

                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <div className='dialog-content'>test</div>
                    </TransitionChild>

                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default Modal