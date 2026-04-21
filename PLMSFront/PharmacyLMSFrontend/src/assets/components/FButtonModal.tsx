import {createPortal} from 'react-dom';

interface   FButtonModalProps {
   
   modalStyle?: React.CSSProperties;
   isOpen: boolean;
   children?: React.ReactNode;
   modalForm: string;
   onClose: () => void;

}

const FButtonModal = ({ isOpen, onClose, children,modalForm }: FButtonModalProps) => {
    const modalStyle: Record<string, React.CSSProperties> = {
        modalOverlay : { position: "fixed", 
                        top:'50%', 
                        left: '50%',  
                        padding: "20rem", 
                        transform: "translate(-50%, -50%)", 
                        zIndex: 1000, 
                        width: "fit-content", 
                        height: "fit-content"
                        
                },
        modalContent : {
                        border : "2px solid lightgray",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white", 
                        display:"flex", 
                        flexDirection: "column", 
                        width:"fit-content", 
                        height:"fit-content" 
        }
    }
    
  if (!isOpen) return null;

  return createPortal(
    
      <div  className="modalOverlay" style={modalStyle.modalOverlay} >
          <div className="modalContent" style={modalStyle.modalContent} >
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