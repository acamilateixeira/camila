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
import { MdClose } from 'react-icons/md';

import { Graficos } from './graficos';
import { Personalidade } from './personalidade';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalPerfil({ isOpen, onClose }: ModalProps) {
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
            Profile
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
          Here is a amazing part of my project I'm open my
          <span role='img' aria-label='coracao'>
            💖
          </span>
          to we can talk about who I'm, The professional I've become throughout
          of those years.
          <br />
          More than that who am i becoming.
        </DialogContentText>

        <Typography variant='h6'>"Protagonist" Personality</Typography>

        <Personalidade />

        <Graficos />

        <Typography variant='caption' color='textSecondary'>
          Test carried out by the website{' '}
          <a href='16personalities.com' target='_blank' rel='noopener noreferrer'>
            16 Personalities
          </a>
        </Typography>

        <Typography
          variant='h6'
          style={{
            textAlign: 'center',
          }}
        >
          <strong>What does it mean?</strong>
        </Typography>

        <Button
          variant='outlined'
          color='primary'
          fullWidth
          style={{
            marginTop: '10px',
            marginBottom: '30px',
          }}
          href='https://www.16personalities.com/br/personalidade-enfj'
        >
          More information
        </Button>
      </DialogContent>
    </Dialog>
  );
}
