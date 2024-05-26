import React, {useRef, useState} from "react";
import {Box, Modal} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Newsletter() {
  const [isWrong, setIsWrong] = useState()
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const [email, setEmail] = useState()
  const onClick = () => {
    if(inputRef.current.value.split('@').length>1 ) {
      inputRef.current.value = ''
      setIsWrong(false)
      setOpen(true)
    } else {
      setIsWrong(true)
    }
  }
  return (
    <div className="mt-[50px]">
      <div className="page-width newsletter">
        <div className="rounded p-[30px] bg-[#E8D5C4]">
          <div className="mb-3">
            <h2 className="text-center">Розсилка</h2>
            <p className="text-center">
             Підпишись на нашу розсилку і отримай 10% на перше замовлення!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 ">
              <input
                  ref={inputRef}
                className="border border-divider rounded"
                type="text"
                placeholder="Емейл"
                  onChange={(e) => setEmail(e.target.value) }
              />
              {isWrong && (
                  <span className={'text-critical'}>Невірний формат емейл</span>
              )}
              <button className="button" onClick={onClick}>Підписатися</button>
            </div>
          </div>
        </div>
      </div>

      <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 450 }}>
          <h2 id="parent-modal-title">Ви успішно підписалися на розсилку!</h2>
          <p id="parent-modal-description">
            Менеджер вишле вам промокод найблизчим часом на емейл {email}!
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
