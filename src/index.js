import './style/index.styl';
import { getCanvasContext } from './utils/canvas';
import { createClock } from './examples/clock';

const canvas = document.getElementById('canvas');
let ctx = getCanvasContext(canvas);

createClock(ctx);
