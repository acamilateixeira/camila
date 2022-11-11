import { createStyles, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { FaLaravel, FaNodeJs, FaPython, FaReact, FaWordpress } from 'react-icons/fa';

import { Tabela } from '../components/home/tabela';

export function Home() {
  const css = makeStyles(theme =>
    createStyles({
      imagem: {
        borderRadius: '50%',
        padding: '10px',
        width: '80%',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',
        opacity: '50%',

        animationIterationCount: 'infinite',
        animation: `$girar 3000ms ${theme.transitions.easing.easeInOut}`,
        animationTimingFunction: 'linear',
      },

      '@keyframes girar': {
        '0%': {
          background: 'linear-gradient(100deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '25%': {
          background: 'linear-gradient(50deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '50%': {
          background: 'linear-gradient(25deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
        '100%': {
          background: 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)',
        },
      },

      titulo: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '10px',
        marginBottom: '20px',
      },

      container: {
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255,0,0,0.1)',
        marginBottom: '20px',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      },
    })
  )();

  return (
    <>
      <Grid container justifyContent='center' alignItems='center' direction='row'>
        <Grid item sm={12} md={6} lg={6}>
          <img
            className={css.imagem}
            src='https://acamilateixeira.github.io/camilat/img/foto.png'
            alt='foto'
          />

          <Typography variant='h4' color='textSecondary'>
            Developer FullStack
          </Typography>

          <Typography variant='h5' color='textSecondary'>
            <IconButton>
              <FaReact />
            </IconButton>
            <IconButton>
              <FaLaravel />
            </IconButton>
            <IconButton>
              <FaNodeJs />
            </IconButton>
            <IconButton>
              <FaPython />
            </IconButton>
            <IconButton>
              <FaWordpress />
            </IconButton>
          </Typography>
        </Grid>

        <Grid item sm={12} md={6} lg={6} className={css.container} >
          <Grid item xs={12}>
            <Typography className={css.titulo} align='center'>
              Hi, nice to see you here!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='body1' align='center'>
              I'm <b>Camila Teixeira</b>,
              <br />
              <br />
              <b> 4 years ago</b> I started work with <b>HTML</b> and <b>CSS</b> in Portugal,
              costumed maked websites with WordPress that's how i met <b>developer life</b>.
              <br />
              <br />
              I decided to become <b>developer</b> and back to Brazil to start university
              of Analysis and Systems Development.
              <br />
              Today I'm work with <b>Developer - FullStack</b> in{' '}
              <b>Sicoob Central Cecremge - BR/MG </b>, a financial institution here I'm learning:
              <br />
            </Typography>
          </Grid>

          <Grid item xs={12} >
            <Tabela />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
