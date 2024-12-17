import { app, BrowserWindow } from 'electron'
import path from 'path'

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        // width: 800,
        // he ight: 600,
        webPreferences: {
        //   nodeIntegration: false,
          contextIsolation: false,
        },
    })
    // mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
    const indexPath = path.join(app.getAppPath() + '/dist-react/index.html')
    console.log(`Loading file: ${indexPath}`)
    
    mainWindow.loadFile(indexPath).then(() => {
        console.log('File loaded successfully')
    }).catch((error) => {
        console.error('Error loading file:', error)
    })
    setTimeout(() => { mainWindow.webContents.openDevTools({ mode: "detach", activate: true, }); }, 1000);
})