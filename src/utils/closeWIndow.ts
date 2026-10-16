import { getCurrentWindow } from "@tauri-apps/api/window";
export default async function closeWindow() {
    console.log("Janela atual:", getCurrentWindow().label);
    try {
        await getCurrentWindow().close();
    } catch (erro) {
        console.error("Erro ao fechar o aplicativo:", erro);
    }
}