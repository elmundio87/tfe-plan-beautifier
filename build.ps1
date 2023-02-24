#!/usr/bin/env pwsh

$function = Get-Content bookmarklet.js

$minified = [string]::join("", $function.split("`n"))
$minified = $minified -replace "    ",""
$minified = $minified -replace "  ",""
$minified = "javascript:void function(){$minified};"

Write-Output $minified