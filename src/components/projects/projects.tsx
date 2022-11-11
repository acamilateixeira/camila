import { Box, Card, CardContent, FormControlLabel, Grid, Radio, Tabs } from '@material-ui/core';
import { useState } from 'react';

import { projectsMock } from '../../mocks/projects';
import { TabOption } from '../tabOption';

export function Projects() {
  const [selectedTab, setSelectedTab] = useState(0);
  const imageViewer = document.createElement('div');
  const [nameImg, setNomeImagem] = useState(1);

  function changeImagem(nameImg: number) {
    setNomeImagem(nameImg);
  }

  function openImageViewer(imageUrl: string) {
    imageViewer.innerHTML = `<img src="${imageUrl}" alt="image" />`;

    imageViewer.style.textAlign = 'center';
    imageViewer.style.display = 'block';
    imageViewer.style.position = 'fixed';
    imageViewer.style.top = '0';
    imageViewer.style.left = '0';
    imageViewer.style.alignSelf = 'center';
    imageViewer.style.width = '100%';
    imageViewer.style.height = '100%';
    imageViewer.style.zIndex = '99999999';
    imageViewer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    imageViewer.style.cursor = 'pointer';

    document.body.appendChild(imageViewer);

    imageViewer.addEventListener('click', () => {
      imageViewer.style.display = 'none';
    });
  }

  return (
    <>
      <Box mt={2}>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          {projectsMock.map((project, index) => (
            <TabOption
              key={project.id}
              label={project.nome}
              onClick={() => setSelectedTab(index)}
              selected={selectedTab === index}
            />
          ))}
        </Tabs>

        {projectsMock.map((project, index) => (
          <Box key={project.id} display={selectedTab === index ? 'block' : 'none'} mt={2}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Box mt={2} fontSize={14} fontWeight={600}>
                      {project.nome}
                    </Box>
                    <Box fontSize={14}>{project.descricao}</Box>

                    <Box
                      mt={2}
                      fontSize={14}
                      fontWeight={600}
                      style={{
                        color: project.status === 'In Developement' ? '#95CD41' : '#28B5B5',
                      }}
                    >{`Status: ${project.status}`}</Box>
                  </Grid>

                  <Grid item xs={10}>
                    <Box
                      mt={2}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      flexWrap='wrap'
                      style={{
                        maxHeight: '450px',
                        maxWidth: '100%',
                        height: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <img
                        src={`/static/images/projects/${project.id}/${nameImg}.png`}
                        alt={project.nome}
                        style={{
                          width: 'auto',
                          height: '100%',
                          imageOrientation: 'from-image',
                          borderRadius: 16,
                          objectFit: 'fill',
                          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                          marginBottom: 10,
                          cursor: 'pointer',
                        }}
                        loading='lazy'
                        onClick={() =>
                          openImageViewer(`/static/images/projects/${project.id}/${nameImg}.png`)
                        }
                      />
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={nameImg === 1}
                            onChange={() => changeImagem(1)}
                            value='1'
                            color='primary'
                            size='small'
                          />
                        }
                        label=''
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={nameImg === 2}
                            onChange={() => changeImagem(2)}
                            value='2'
                            color='primary'
                            size='small'
                          />
                        }
                        label=''
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={nameImg === 3}
                            onChange={() => changeImagem(3)}
                            value='3'
                            color='primary'
                            size='small'
                          />
                        }
                        label=''
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}
