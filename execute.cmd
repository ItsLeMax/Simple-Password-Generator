@echo off

:start
cls

set /p "length=(Optional) Amount of signs inside the password | Anzahl der Zeichen im Passwort < Integer | 32 >: "
node script.js %length%

timeout /t -1
goto start