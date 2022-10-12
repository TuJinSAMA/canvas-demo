export const getCanvasContext = (canvas) => { 
  return canvas.getContext ? canvas.getContext('2d') : null;
}