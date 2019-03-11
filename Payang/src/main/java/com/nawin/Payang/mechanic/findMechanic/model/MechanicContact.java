package com.nawin.Payang.mechanic.findMechanic.model;

public class MechanicContact {
    private String tel ;
    private String line;

    public MechanicContact(String tel, String line) {
        this.tel = tel;
        this.line = line;
    }

    public MechanicContact(){

    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }
}
