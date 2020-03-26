/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,14.05a4,4,0,1,0,4,4A4,4,0,0,0,18,14.05Zm0,6.44a2.42,2.42,0,1,1,2.42-2.42A2.42,2.42,0,0,1,18,20.49Z"/><path d="M24.23,11.71a39.14,39.14,0,0,0-4.57-3.92,22.86,22.86,0,0,1,3.48-1.72c.32-.12.62-.21.92-.3a2.28,2.28,0,0,0,3.81-.46,3.31,3.31,0,0,1,1.92.84c1.19,1.19,1.22,3.59.1,6.58.49.65.94,1.31,1.35,2,.17-.4.35-.79.49-1.18,1.47-3.85,1.28-7-.53-8.78a5.29,5.29,0,0,0-3.33-1.44,2.29,2.29,0,0,0-4.31.54c-.37.11-.74.22-1.13.37a25.79,25.79,0,0,0-4.57,2.35A26.21,26.21,0,0,0,13.28,4.2c-3.85-1.46-7-1.28-8.77.53C2.85,6.4,2.58,9.17,3.68,12.59a2.28,2.28,0,0,0,1.59,3.67c.32.61.67,1.22,1.06,1.82A25.54,25.54,0,0,0,4,22.66c-1.47,3.84-1.28,7,.53,8.77a5.63,5.63,0,0,0,4.12,1.51,13.34,13.34,0,0,0,4.65-1,26.21,26.21,0,0,0,4.58-2.35A25.79,25.79,0,0,0,22.43,32a14.16,14.16,0,0,0,3.65.9A2.3,2.3,0,0,0,30.46,32a4.55,4.55,0,0,0,.74-.57c1.81-1.81,2-4.93.53-8.77A32.68,32.68,0,0,0,24.23,11.71ZM12.57,30.09c-3,1.15-5.45,1.13-6.65-.08s-1.23-3.62-.07-6.64a22.77,22.77,0,0,1,1.71-3.48,40.19,40.19,0,0,0,3.92,4.56c.43.43.87.85,1.31,1.25q.9-.46,1.83-1.05c-.58-.52-1.16-1-1.72-1.61a34,34,0,0,1-5.74-7.47A2.29,2.29,0,0,0,5.5,11.69h0c-.75-2.5-.62-4.49.43-5.54a3.72,3.72,0,0,1,2.72-.92,11.4,11.4,0,0,1,3.93.84,22.86,22.86,0,0,1,3.48,1.72,39.14,39.14,0,0,0-4.57,3.92c-.44.44-.87.9-1.29,1.36a20.27,20.27,0,0,0,1,1.85c.54-.61,1.09-1.21,1.68-1.8a36.33,36.33,0,0,1,5-4.17,36.88,36.88,0,0,1,4.95,4.17,36.26,36.26,0,0,1,4.17,5,37,37,0,0,1-4.17,5A30.68,30.68,0,0,1,12.57,30.09ZM29.79,30l-.16.13a2.27,2.27,0,0,0-3.5.72,12.57,12.57,0,0,1-3-.77,22,22,0,0,1-3.48-1.72,39.14,39.14,0,0,0,4.57-3.92,38.26,38.26,0,0,0,3.92-4.56,22.88,22.88,0,0,1,1.72,3.48C31,26.39,31,28.81,29.79,30Z"/>',
  solid:
    '<path d="M24.23,11.71a39.14,39.14,0,0,0-4.57-3.92,22.86,22.86,0,0,1,3.48-1.72c.32-.12.62-.21.92-.3a2.28,2.28,0,0,0,3.81-.46,3.31,3.31,0,0,1,1.92.84c1.19,1.19,1.22,3.59.1,6.58.49.65.94,1.31,1.35,2,.17-.4.35-.79.49-1.18,1.47-3.85,1.28-7-.53-8.78a5.29,5.29,0,0,0-3.33-1.44,2.29,2.29,0,0,0-4.31.54c-.37.11-.74.22-1.13.37a25.79,25.79,0,0,0-4.57,2.35A26.21,26.21,0,0,0,13.28,4.2c-3.85-1.46-7-1.28-8.77.53C2.85,6.4,2.58,9.17,3.68,12.59a2.28,2.28,0,0,0,1.59,3.67c.32.61.67,1.22,1.06,1.82A25.54,25.54,0,0,0,4,22.66c-1.47,3.84-1.28,7,.53,8.77a5.63,5.63,0,0,0,4.12,1.51,13.34,13.34,0,0,0,4.65-1,26.21,26.21,0,0,0,4.58-2.35A25.79,25.79,0,0,0,22.43,32a14.16,14.16,0,0,0,3.65.9A2.3,2.3,0,0,0,30.46,32a4.55,4.55,0,0,0,.74-.57c1.81-1.81,2-4.93.53-8.77A32.68,32.68,0,0,0,24.23,11.71ZM12.57,30.09c-3,1.15-5.45,1.13-6.65-.08s-1.23-3.62-.07-6.64a22.77,22.77,0,0,1,1.71-3.48,40.19,40.19,0,0,0,3.92,4.56c.43.43.87.85,1.31,1.25q.9-.46,1.83-1.05c-.58-.52-1.16-1-1.72-1.61a34,34,0,0,1-5.74-7.47A2.29,2.29,0,0,0,5.5,11.69h0c-.75-2.5-.62-4.49.43-5.54a3.72,3.72,0,0,1,2.72-.92,11.4,11.4,0,0,1,3.93.84,22.86,22.86,0,0,1,3.48,1.72,39.14,39.14,0,0,0-4.57,3.92c-.44.44-.87.9-1.29,1.36a20.27,20.27,0,0,0,1,1.85c.54-.61,1.09-1.21,1.68-1.8a36.33,36.33,0,0,1,5-4.17,36.88,36.88,0,0,1,4.95,4.17,36.26,36.26,0,0,1,4.17,5,37,37,0,0,1-4.17,5A30.68,30.68,0,0,1,12.57,30.09ZM29.79,30l-.16.13a2.27,2.27,0,0,0-3.5.72,12.57,12.57,0,0,1-3-.77,22,22,0,0,1-3.48-1.72,39.14,39.14,0,0,0,4.57-3.92,38.26,38.26,0,0,0,3.92-4.56,22.88,22.88,0,0,1,1.72,3.48C31,26.39,31,28.81,29.79,30Z"/><circle cx="17.99" cy="18.07" r="3.3" transform="translate(-2.66 3.11) rotate(-9.22)"/>',
};

export const atomIconName = 'atom';
export const atomIcon: IconShapeTuple = [atomIconName, renderIcon(icon)];
