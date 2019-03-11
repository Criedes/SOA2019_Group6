package com.nawin.Payang.mechanic.findMechanic.model;

public class AddressCoordinate {
    private String lat;
    private String lng;

    public AddressCoordinate(String lat, String lng) {
        this.lat = lat;
        this.lng = lng;
    }

    public AddressCoordinate() {
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }
}
