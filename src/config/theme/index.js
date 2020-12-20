import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-roboto';

export default createMuiTheme(
  {
    palette: {
      primary: {
        main: '#F57F45',
        light: '#e99a72',
        dark: '#f15b0f',
      },
      secondary: {
        main: '#F57F45',
        ligth: '#e99a72',
        dark: '#f15b0f',
      },
      background: {
        paper: '#fff',
        login: 'linear-gradient(45deg, #F57F45 40%, #e99a72 100%)',
      },
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 12,
    },
    overrides: {
      MuiTableCell: {
        head: {
          backgroundColor: '#F57F45',
          color: 'white',
        },
        body: {
          fontSize: 14,
        },
      },
      MuiTableRow: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
          },
        },
      },
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: '#F57F45',
          borderRadius: 3,
          border: 0,
          color: 'white !important',
          height: 48,
          padding: '0 30px',
          '&:hover': {
            border: '1px solid #f15b0f',
            color: '#F57F45 !important',
          },
        },
        outlined: {
          border: '1px solid #f15b0f',
          borderRadius: 3,
          height: 48,
          color: '#F57F45',
          padding: '0 30px',
          '&:hover': {
            border: 0,
            color: 'white',
            background: '#e99a72',
          },
        },
      },
      MuiListItem: {
        root: {
          '&$selected, &$selected:hover': {
            backgroundColor: '#F57F45',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  ptBR
);
