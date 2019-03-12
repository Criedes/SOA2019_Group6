package com.nawin.Payang.mechanic.findMechanic.model;

import lombok.Data;

import java.util.Objects;

@Data
public class MechanicData {

    private String username;
    private String password;
    private String garage_name;
    private String mechanic_name;
    private String address = "";
    private AddressCoordinate addressCoordinate;
    private MechanicPrice mechanicPrice;
    private int number_of_customer;
    private String join_date;
    private MechanicContact contact;
    private String status;

    public MechanicData(
            String username,
            String password,
            String garage_name,
            String mechanic_name,
            String address_lat,
            String address_lng,
            Double patch_rubber,
            Double change_rubber,
            int number_of_customer,
            String address,
            String join_date,
            String contact_tel,
            String contact_line,
            String status
    ){
        this.username = username;
        this.password = password;
        this.garage_name = garage_name;
        this.mechanic_name = mechanic_name;
        this.addressCoordinate = new AddressCoordinate(address_lat,address_lng);
        this.mechanicPrice = new MechanicPrice(patch_rubber,change_rubber);
        this.number_of_customer = number_of_customer;
        this.address = address;
        this.join_date = join_date;
        this.contact = new MechanicContact(contact_tel,contact_line);
        this.status = status;
    }

}
