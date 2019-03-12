package com.nawin.Payang.mechanic.findMechanic.model;

import lombok.Data;

import java.util.Objects;

@Data
public class MechanicPrice {
    public Double patch_rubber;
    public Double change_rubber;

    public MechanicPrice(double patch_rubber, double change_rubber) {
        this.patch_rubber = patch_rubber;
        this.change_rubber = change_rubber;
    }

    public MechanicPrice(){

    }

}
