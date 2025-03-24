function Start-NewTerminal {
    param (
        [string]$command,
        [string]$workingDirectory
    )
    
    Start-Process powershell -ArgumentList "-NoExit", "-WindowStyle", "Hidden", "-Command", "cd '$workingDirectory'; $command"
}

Start-NewTerminal -command "npm i" -workingDirectory "bankingRecord"
Start-NewTerminal -command "npm i" -workingDirectory "container"
Start-NewTerminal -command "npm i" -workingDirectory "login"
Start-NewTerminal -command "npm i" -workingDirectory "personalData"
Start-NewTerminal -command "npm i" -workingDirectory "utils"