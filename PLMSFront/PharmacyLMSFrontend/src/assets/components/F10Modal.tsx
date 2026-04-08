import {createPortal} from 'react-dom';

interface   F10ModalProps {
   isOpen: boolean;
   children?: React.ReactNode;
   onClose: () => void;

}

const F10Modal = ({ isOpen, onClose, children }: F10ModalProps) => {
    
  if (!isOpen) return null;

  return createPortal(
    <div  className="modalOverlay" style={style.modalOverlay}>
        <div className="modalContent" style={style.modalContent}>
            {children}
        <button onClick={onClose}>Close</button>
        </div>
    </div>,
     document.getElementById('modal-root') as HTMLElement
    );

};
const style: { [key: string]: React.CSSProperties } = {
    modalOverlay: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column'
    }
  };

export default F10Modal;