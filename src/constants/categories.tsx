import { Component } from 'react';
import FaceIcon from '@material-ui/icons/Face';
import SvgIcon from 'material-ui/SvgIcon';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ClearIcon from '@material-ui/icons/Clear';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PublicIcon from '@material-ui/icons/Public';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CategoryIcon from '@material-ui/icons/Category';
import SettingsIcon from '@material-ui/icons/Settings';
import FunctionsIcon from '@material-ui/icons/Functions';

export const ROW_STARTS = [
  "Player",
  "Wonder",
  "Military",
  "Wealth",
  "Wonder",
  "Culture",
  "Trading",
  "Guild",
  "Science",
  "Sum",
  "AVG",
];

export interface ICategory {
  label: string,
  icon?: any,
  color?: string,
}

export const CATEGORIES : Array<ICategory> = [
  {
    label: 'Player',
    icon: <FaceIcon color={'secondary'} />,
    color: 'secondary',
  },
  {
    label: 'Wonder',
    icon: <PublicIcon color={'secondary'} />,
    color: 'secondary',
  },
  {
    label: 'Military',
    icon: <ClearIcon color={'primary'} />,
  },
  {
    label: 'Wealth',
    icon: <MonetizationOnIcon color={'primary'} />,
  },
  {
    label: 'Wonder',
    icon: <ChangeHistoryIcon color={'primary'} />,
  },
  {
    label: 'Culture',
    icon: <MenuBookIcon color={'primary'} />,
  },
  {
    label: 'Trading',
    icon: <StorefrontIcon color={'primary'} />,
  },
  {
    label: 'Guild',
    icon: <CategoryIcon color={'primary'} />,
  },
  {
    label: 'Science',
    icon: <SettingsIcon color={'primary'} />,
  },
  {
    label: 'Sum',
    color: 'red',
  },
  {
    label: 'Avg',
  },
]
