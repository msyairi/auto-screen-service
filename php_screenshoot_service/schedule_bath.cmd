@echo off
title SCHREENSHOOT PHP
cls

:start

echo Sending data...
C:\xampp\php\php.exe ss_server.php

:: set waktu interval 20 detik
timeout 30 /nobreak
goto start