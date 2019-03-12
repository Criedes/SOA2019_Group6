package com.nawin.Payang.mechanic.findMechanic.model;

import java.util.Objects;

public class MechanicPrice {
    public Double patch_rubber;
    public Double change_rubber;

    public MechanicPrice(double patch_rubber, double change_rubber) {
        this.patch_rubber = patch_rubber;
        this.change_rubber = change_rubber;
    }

    public MechanicPrice(){

    }

    public Double getPatch_rubber() {
        return patch_rubber;
    }

    public void setPatch_rubber(Double patch_rubber) {
        this.patch_rubber = patch_rubber;
    }

    public Double getChange_rubber() {
        return change_rubber;
    }

    public void setChange_rubber(Double change_rubber) {
        this.change_rubber = change_rubber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MechanicPrice that = (MechanicPrice) o;
        return Objects.equals(patch_rubber, that.patch_rubber) &&
                Objects.equals(change_rubber, that.change_rubber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(patch_rubber, change_rubber);
    }
}
