package com.nawin.Payang.mechanic.findMechanic.model;

import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddressCoordinate that = (AddressCoordinate) o;
        return Objects.equals(lat, that.lat) &&
                Objects.equals(lng, that.lng);
    }

    @Override
    public int hashCode() {
        return Objects.hash(lat, lng);
    }
}
