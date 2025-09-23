"use client";

import React, { useState } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';

const ModalCompany = ({ src, alt, title, content }) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className='flex flex-col justify-center items-center bg-green-900/10 rounded-lg p-4 hover:bg-green-900/30 focus:outline-none w-full h-full'
      >
        <div className="w-24 h-24 mb-2">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <p className='mt-2 text-center text-sm font-medium'>{title}</p>
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 bg-black/70 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              className="w-full max-w-4xl rounded-xl bg-gray-800/80 p-6 backdrop-blur-2xl duration-300 ease-out"
            >
              <DialogTitle as="h3" className="text-2xl font-bold text-white">
                {title}
              </DialogTitle>
              <div className="mt-2 text-sm/6 text-gray-200">
                {content}
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                  onClick={close}
                >
                  Cerrar
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ModalCompany;
