// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::{
    Manager,
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent}
};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            // Cria o ícone na bandeja do sistema
            let _tray = TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("Personal Assistent")
                .on_tray_icon_event(|tray, event| {
                    match event {
                        // Clique esquerdo simples
                        TrayIconEvent::Click {
                            button: MouseButton::Left,
                            button_state: MouseButtonState::Up,
                            ..
                        } => {

                            let app = tray.app_handle();
                            
                            if let Some(window) = app.get_webview_window("main") {
                                if window.is_visible().unwrap_or(false) {
                                    let _ = window.hide();
                                } else {
                                    let _ = window.show();
                                }
                            }
                        }
                        _ => {}
                    }
                })
                .build(app)?;

            // Posiciona janela
            if let Some(window) = app.get_webview_window("main") {
                if let Ok(Some(monitor)) = window.current_monitor() {
                    let screen_size = monitor.size();
                    let window_size = window.outer_size().unwrap_or_default();

                    let x = (screen_size.width as i32) - (window_size.width as i32) - 5;
                    let y = (screen_size.height as i32) - (window_size.height as i32) - 50;

                    let _ = window.set_position(tauri::PhysicalPosition::new(x, y));
                }
                let _ = window.show();
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
