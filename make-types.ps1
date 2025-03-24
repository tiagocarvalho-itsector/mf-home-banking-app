function Start-NewTerminal {
    param (
        [string]$command,
        [string]$workingDirectory
    )
    
    Start-Process powershell -ArgumentList "-NoExit", "-WindowStyle", "Hidden", "-Command", "cd '$workingDirectory'; $command"
}

Start-NewTerminal -command "npm run make-types" -workingDirectory "utils"
Start-NewTerminal -command "npm run make-types" -workingDirectory "login"
Start-NewTerminal -command "npm run make-types" -workingDirectory "personalData"
Start-NewTerminal -command "npm run make-types" -workingDirectory "bankingRecord"
Start-NewTerminal -command "npm run make-types" -workingDirectory "container"