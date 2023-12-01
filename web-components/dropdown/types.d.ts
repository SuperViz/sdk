export declare enum PositionsEnum {
    'BOTTOM-LEFT' = "bottom-left",
    'BOTTOM-CENTER' = "bottom-center",
    'BOTTOM-RIGHT' = "bottom-right",
    'TOP-LEFT' = "top-left",
    'TOP-CENTER' = "top-center",
    'TOP-RIGHT' = "top-right"
}
export type Positions = PositionsEnum | `${PositionsEnum}`;
export declare enum PositionOptions {
    'DO-NOTHING' = 0,
    'USE-ORIGINAL' = 1,
    'CALCULATE-NEW' = 2,
    'CENTER' = 3
}
