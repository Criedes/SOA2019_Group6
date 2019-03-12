package com.nawin.Payang.customer.findMechanic.model;

import lombok.Data;

@Data
public class CustomerData {
    private String username;
    private String password;
    private String name;
    private String surname;


    public CustomerData(String username, String password, String name, String surname) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
    }


}
