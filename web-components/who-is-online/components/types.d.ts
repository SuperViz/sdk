export declare enum WIODropdownOptions {
    GOTO = "go-to",
    FOLLOW = "follow",
    UNFOLLOW = "unfollow"
}
export interface Following {
    id: string;
    name: string;
    color: string;
    slotIndex: number;
}
export interface Options {
    label: string;
    id: string;
    name: string;
    color: string;
    slotIndex: number;
}
export declare enum PositionOptions {
    'DO-NOTHING' = 0,
    'USE-ORIGINAL' = 1,
    'CALCULATE-NEW' = 2
}
