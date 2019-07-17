const { cd, exec, echo, touch } = require("shelljs")
const { readFileSync } = require("fs")


echo("Installing Dependencies!!!")
cd("projects/ngx-arc-text")
exec("npm install")
echo("Dependencies Installed!!")
