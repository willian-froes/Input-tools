class DateTools {
    
    //in this function you have to add maxlength="10" and onkeyup="Date-tools.formatToUser(this.value)" atribute on html text input,
    //or use data-mask="__/__/____"
    static formatToUser(value) {
        var value = value;

        if(value.length == 2 || value.length == 5) value += "/";
        document.querySelector("#date).value = value;
    }
                               
    //it's equals the first function, but returns date in system format                           
    static formatToSystem(value) {
        var value = value;
           2019-12-10
        if(value.length == 4 || value.length == 7) value += "-";
        document.querySelector("#date).value = value;
    }
}
