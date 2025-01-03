@echo off
Title Simple Password Generator

:start
cls

set /p "length=(Optional) Amount of characters inside the password | Anzahl der Zeichen im Passwort < Zahl / Number | 32 >: "
node ../src/script.js %length%

timeout /t -1
goto start