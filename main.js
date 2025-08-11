// main.js - This is the entry point for the Electron process.
// This version correctly handles both development and production environments.

// Import necessary modules from Electron and Node.js.
import { app, BrowserWindow } from 'electron';
import path from 'path';
import url, { fileURLToPath } from 'url';

// A common and robust way to check if the app is in development mode.
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

// In an ES module, __dirname is not defined. We need to create it manually.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Keep a global reference to the main window object.
let mainWindow;

/**
 * Creates the main application window.
 */
function createWindow() {
  // Create a new browser window with specific dimensions and web preferences.
  mainWindow = new BrowserWindow({
    // We've removed fixed width and height.
    // The 'maximized: true' option makes the window open in a maximized state,
    // which automatically adjusts to the user's screen resolution.
    maximized: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the appropriate URL based on the environment.
  if (isDev) {
    // In development, load the Vite development server.
    // The wait-on package ensures the server is ready before this is called.
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // In production, load the built index.html from the 'dist' folder.
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// This method is called when Electron has finished initialization.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, if there are no windows open, re-create one when the dock icon is clicked.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
