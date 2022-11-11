import { Divider, Typography } from '@material-ui/core';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

// criar graficos

export function Graficos() {
  const mindset = [
    { name: 'Extrovert', value: 61 },
    { name: 'Introvert', value: 39 },
  ];

  const energy = [
    { name: 'Intuitive', value: 77 },
    { name: 'Observer', value: 23 },
  ];

  const nature = [
    { name: 'Pensante', value: 49 },
    { name: 'Sentimentos', value: 51 },
  ];

  const tactics = [
    { name: 'Judge', value: 57 },
    { name: 'Explorer', value: 43 },
  ];

  const identity = [
    { name: 'Assertive', value: 75 },
    { name: 'Cautious', value: 25 },
  ];

  const COLORS = ['#0088FE', 'rgba(255,0,0,1)'];

  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Mindset
      </Typography>

      <ResponsiveContainer width='80%' height='35%'>
        <PieChart width={500} height={500}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={mindset}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {mindset.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Energy
      </Typography>

      <ResponsiveContainer width='80%' height='35%'>
        <PieChart width={500} height={500}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={energy}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {energy.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Nature
      </Typography>

      <ResponsiveContainer width='80%' height='35%'>
        <PieChart width={500} height={500}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={nature}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {nature.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Tactics
      </Typography>

      <ResponsiveContainer width='80%' height='35%'>
        <PieChart width={500} height={500}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={tactics}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {tactics.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>

      <Divider variant='middle' />
      <Typography variant='h4' align='center' gutterBottom>
        Identity
      </Typography>

      <ResponsiveContainer width='80%' height='35%'>
        <PieChart width={500} height={500}>
          <Pie
            dataKey='value'
            isAnimationActive={false}
            data={identity}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {identity.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />

          <Legend layout='vertical' verticalAlign='middle' align='right' />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
