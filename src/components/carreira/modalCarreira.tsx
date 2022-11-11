import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { MdClose, MdDownload } from 'react-icons/md';

import { Tabela } from './tabela';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCarreira({ isOpen, onClose }: ModalProps) {
  function handleDownload() {
    const element = document.createElement('a');
    element.setAttribute('href', 'https://acamilateixeira.github.io/camilat/files/cv.pdf');
    element.setAttribute('target', '_blank');
    element.click();
  }

  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <DialogTitle
        style={{
          background: 'rgba(0,0,0,1)',
          padding: '10px',
        }}
      >
        <Grid container direction='row' justifyContent='space-between'>
          <Typography
            variant='h6'
            style={{
              color: '#fff',
            }}
          >
            Career
          </Typography>

          <IconButton
            onClick={onClose}
            style={{
              color: '#fff',
              background: 'rgba(0,0,0,1)',
              backgroundColor: 'rgba(0,0,0,1)',
            }}
            aria-label='fechar'
          >
            <MdClose />
          </IconButton>
        </Grid>
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Here you can understand more about my career! Let's go!
        </DialogContentText>

        <Tabela />

        <Typography variant='h6' style={{ marginTop: '20px' }}>
          Doing the download of my resume you have a file with details of every job in which I worked.
        </Typography>

        <Button
          onClick={handleDownload}
          startIcon={<MdDownload />}
          variant='contained'
          color='primary'
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Download PDF
        </Button>
      </DialogContent>
    </Dialog>
  );
}
