const copyclicker = document.getElementById("clickercopy")
const command1 = "git clone https://github.com/mcmdev4/clickertemplate"

copyclicker.onclick = function() {
    navigator.clipboard.writeText(command1)
}