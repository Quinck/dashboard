import React from 'react';
import './fullscreen-modal.css';

export interface FullscreenModalProps {
  show: boolean;
  onClose: () => void;
  content: any;
}

interface FullscreenModalState {
  show: boolean;
}
export class FullscreenModal extends React.Component<FullscreenModalProps, FullscreenModalState> {

  render() {
    const { show, onClose, content } = this.props;

    return (
      <div className="container" >
        <div className={show ? "main-modal show-modal" : "main-modal hideModal"}>
          <div className='fullscreen-modal-header'>
            <div className='close' onClick={onClose}/>
          </div>
          <div className='modal-content'>
            {content}
          </div>
        </div>
      </div>
    );
  }
}
