import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

export function Personalidade() {
  return (
    <Card>
      <CardHeader title='Personalidade' />

      <CardContent>
        <Typography variant='body1'>
          {/* Eu tenho uma personalidade (dita pelos meus colegas de equipe) como muito{' '} */}
          I have a personality (spoken by my teammates) like very {' '}
          <strong>dedicated</strong>.
          <br />
          <br />
          <img
            src='https://media3.giphy.com/media/FFb9yZK6t0oDu/giphy.gif?cid=de9bf95e4rt06bgy3plo1dawo25vkl525lkugb0k397yulqc&amp;rid=giphy.gif&amp;ct=g'
            width='200px'
            style={{ borderRadius: '10%' }}
            alt='cachorro dedicado'
          />
          <br />
          I really like studying, <strong>learn</strong> with other people and teach if I
          can.
          <br />
          <br />
          I always give ideas for improvement. I don't like wasting time on the problem, but yeah
          with the solution.
          <br />
          <br />

          My biggest advantage is <strong>creativity</strong>
          ,
          I'm always working on something new or learning something.
          <br />
          I like to put knowledge into practice and run for the challenge.
          <br />
          <br />
          <img
            src='https://media1.giphy.com/media/7kn27lnYSAE9O/giphy.gif?cid=de9bf95edusteep49wpjgeyvehbvs63bkwdvcekcwenrv36a&amp;rid=giphy.gif&amp;ct=g'
            width='200px'
            style={{ borderRadius: '10%' }}
            alt='running'
          ></img>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
