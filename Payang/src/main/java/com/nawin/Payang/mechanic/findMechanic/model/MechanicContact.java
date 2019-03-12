package com.nawin.Payang.mechanic.findMechanic.model;

import lombok.Data;

import java.util.Objects;

@Data
public class MechanicContact {
    private String tel ;
    private String line;

    public MechanicContact(String tel, String line) {
        this.tel = tel;
        this.line = line;
    }

    public MechanicContact(){

    }

}
