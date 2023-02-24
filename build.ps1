#!/usr/bin/env pwsh

$function = Get-Content main.js

$minified = [string]::join("", $function.split("`n"))
$minified = $minified -replace "    ",""
$minified = $minified -replace "  ",""
$minified = "javascript:void function(){$minified}();"

$minified | Out-File -FilePath ".\release.js"