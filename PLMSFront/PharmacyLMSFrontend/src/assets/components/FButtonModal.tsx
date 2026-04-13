import {createPortal} from 'react-dom';

interface   FButtonModalProps {
   
   isOpen: boolean;
   children?: React.ReactNode;
   modalForm: string;
   onClose: () => void;

}

const FButtonModal = ({ isOpen, onClose, children,modalForm }: FButtonModalProps) => {
    
  if (!isOpen) return null;

  return createPortal(
    
      <div  className="modalOverlay" style={{position: "fixed", top:'50%', left: '50%',  padding: "20rem", transform: "translate(-50%, -50%)", zIndex: 1000, width: "fit-content", height: "fit-content"}}>
          <div className="modalContent" style={{backgroundColor: "white", display:"flex", flexDirection: "column", width:"fit-content", height:"fit-content" }} >
              {children}
            <div id="modalButtons" style={{display: "flex", justifyContent: "space-around", margin: "1rem"}}>
                <button onClick={onClose}>Close</button>
                <button type="submit" form={modalForm}>Submit</button>
            </div>
          </div>
          
      </div>,
     document.getElementById('modal-root') as HTMLElement
    );

};


export default FButtonModal;