import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

export function Tabela() {
  const data = [
    {
      id: 1,
      company: 'Sicoob Central Cecremge',
      responsibility: 'Developer II',
      start: 'November 2020',
      end: '-',
    },

    {
      id: 2,
      company: 'Construtora Você',
      responsibility: 'Analist I',
      start: 'March 2018',
      end: 'November 2020',
    },

    {
      id: 3,
      company: 'Caixa Econômica Federal',
      responsibility: 'Intern',
      start: 'November 2016',
      end: 'November 2017',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: 'rgba(255,0,0,0.3)',
            }}
          >
            <TableCell>Company</TableCell>
            <TableCell>Responsibility</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.responsibility}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
