import { getCurrentWindow } from '@tauri-apps/api/window';
import { LogicalSize, LogicalPosition, PhysicalPosition } from '@tauri-apps/api/dpi';

export default async function changeWindowSize(x: number, y: number): Promise<boolean> {
    try {

        const win = getCurrentWindow();

        const outer = await win.outerSize();
        const position = await win.outerPosition();

        const CurrentExternalWidth = outer.width;
        const currentContentWidth = (await win.innerSize()).width;
        const decoration = CurrentExternalWidth - currentContentWidth;

        const newExternalWidth = x + decoration;
        const newX = position.x + CurrentExternalWidth - newExternalWidth;

        await win.setSize(new LogicalSize(x, y));
        await win.setPosition(new PhysicalPosition(newX, position.y));

        return true;
    } catch (e) {
        return false;
    }
}