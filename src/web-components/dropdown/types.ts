import { number } from 'yargs';

export enum PositionsEnum {
  'BOTTOM-LEFT' = 'bottom-left',
  'BOTTOM-CENTER' = 'bottom-center',
  'BOTTOM-RIGHT' = 'bottom-right',
  'TOP-LEFT' = 'top-left',
  'TOP-CENTER' = 'top-center',
  'TOP-RIGHT' = 'top-right',
}

export type Positions = PositionsEnum | `${PositionsEnum}`;

export enum PositionOptions {
  'DO-NOTHING',
  'USE-ORIGINAL',
  'CALCULATE-NEW',
  'CENTER',
}
