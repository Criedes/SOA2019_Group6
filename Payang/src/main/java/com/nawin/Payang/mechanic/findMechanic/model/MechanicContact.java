package com.nawin.Payang.mechanic.findMechanic.model;

import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MechanicContact that = (MechanicContact) o;
        return Objects.equals(tel, that.tel) &&
                Objects.equals(line, that.line);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tel, line);
    }
}
