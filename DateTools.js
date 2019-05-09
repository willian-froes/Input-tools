//OBS: add maxlength="10" and onkeyup="Date-tools.format(this.value)" atribute on html text input or use data-mask="__/__/____"
class DateTools {
    static format(value) {
        var value = value;

        // if(value.length == 2 || value.length == 5) value += "/";
        document.querySelector("#data").value = value;
    }
}