/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.44,31.94a7.31,7.31,0,0,1-5.7-11.88L7.32,18.64a9.3,9.3,0,0,0,13.1,13.11L19,30.33A7.29,7.29,0,0,1,14.44,31.94Z"/><path d="M25.36,1.67a4.12,4.12,0,1,0,4.11,4.11A4.12,4.12,0,0,0,25.36,1.67Zm0,6.23a2.12,2.12,0,1,1,2.11-2.12A2.12,2.12,0,0,1,25.36,7.9Z"/><path d="M26.56,18.18h-5a1,1,0,0,0-.24.05l3.09-3.55a2.83,2.83,0,0,0-.69-4.33l-8-4.6a1,1,0,0,0-1.12.08L9.83,9.58A1,1,0,0,0,9.66,11a1,1,0,0,0,.79.38,1,1,0,0,0,.61-.21l4.27-3.34,3.11,1.77-5.08,5.78h0a9.28,9.28,0,0,0-4.53,1.83l1.43,1.43A7.3,7.3,0,0,1,20.42,28.81l1.42,1.43a9.27,9.27,0,0,0,.77-10.06h2.82l-.77,6.51a1,1,0,0,0,.88,1.11h.12a1,1,0,0,0,1-.88l.9-7.62a1,1,0,0,0-.25-.78A1,1,0,0,0,26.56,18.18Zm-6.37-7.56,2.52,1.46a.79.79,0,0,1,.4.59.81.81,0,0,1-.2.69L19.75,17A9.17,9.17,0,0,0,16,15.45Z"/>',
  solid:
    '<path d="M14.77,31.94a7.31,7.31,0,0,1-5.7-11.88L7.65,18.64a9.3,9.3,0,0,0,13.1,13.11l-1.42-1.42A7.29,7.29,0,0,1,14.77,31.94Z"/><path d="M26.65,2.1a3.12,3.12,0,1,0,3.11,3.12A3.12,3.12,0,0,0,26.65,2.1Z"/><path d="M26.81,18.18H21.47q-.31-.33-.66-.63l4.38-4.86a2.14,2.14,0,0,0-.53-3.27L20.9,7.23l0,0L17.05,5.07a1,1,0,0,0-1.11.08L11.15,8.9a1,1,0,0,0,1.23,1.58l4.27-3.34,2.87,1.63L13.6,15.39a9.33,9.33,0,0,0-4.44,1.82l1.42,1.43A7.3,7.3,0,0,1,20.75,28.81l1.43,1.43A9.27,9.27,0,0,0,23,20.18h2.74l-.77,6.51a1,1,0,0,0,.87,1.11h.12a1,1,0,0,0,1-.88l.9-7.62a1,1,0,0,0-.25-.78A1,1,0,0,0,26.81,18.18Z"/>',
};

export const accessibility1IconName = 'accessibility-1';
export const accessibility1Icon: IconShapeTuple = [accessibility1IconName, renderIcon(icon)];
