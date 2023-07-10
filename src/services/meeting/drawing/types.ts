export interface DrawingData {
  name?: string;
  lineColor?: string;
  textColor: string;
  pencil?: string;
  clickX?: number[];
  clickY?: number[];
  clickDrag?: boolean[];
  drawingWidth?: string;
  drawingHeight?: string;
  externalClickX?: number;
  externalClickY?: number;
  fadeOut?: boolean;
}
