import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { MdClose } from 'react-icons/md';

import { Projects } from './projects';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalProjects({ isOpen, onClose }: ModalProps) {
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
            Project
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
          This is the projects section it is still under development (be Patient)
          <span role='img' aria-label='triste'>
            😢
          </span>
        </DialogContentText>

        <Projects />
      </DialogContent>
    </Dialog>
  );
}
