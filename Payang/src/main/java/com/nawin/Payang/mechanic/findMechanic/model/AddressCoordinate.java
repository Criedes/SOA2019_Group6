package com.nawin.Payang.mechanic.findMechanic.model;

import lombok.Data;

import java.util.Objects;

@Data
public class AddressCoordinate {
    private String lat;
    private String lng;

    public AddressCoordinate(String lat, String lng) {
        this.lat = lat;
        this.lng = lng;
    }

    public AddressCoordinate() {
    }

}
