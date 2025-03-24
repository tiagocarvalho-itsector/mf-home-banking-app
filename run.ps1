function Start-NewTerminal {
    param (
        [string]$command,
        [string]$workingDirectory
    )
    
    Start-Process powershell -ArgumentList "-NoExit", "-WindowStyle", "Hidden", "-Command", "cd '$workingDirectory'; $command"
}

Start-NewTerminal -command "npm start" -workingDirectory "utils"
Start-NewTerminal -command "npm start" -workingDirectory "login"
Start-NewTerminal -command "npm start" -workingDirectory "personalData"
Start-NewTerminal -command "npm start" -workingDirectory "bankingRecord"
Start-NewTerminal -command "npm start" -workingDirectory "container"