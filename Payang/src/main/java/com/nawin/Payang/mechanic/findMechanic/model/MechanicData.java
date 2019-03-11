package com.nawin.Payang.mechanic.findMechanic.model;

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



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGarage_name() {
        return garage_name;
    }

    public void setGarage_name(String garage_name) {
        this.garage_name = garage_name;
    }

    public String getMechanic_name() {
        return mechanic_name;
    }

    public void setMechanic_name(String mechanic_name) {
        this.mechanic_name = mechanic_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public AddressCoordinate getAddressCoordinate() {
        return addressCoordinate;
    }

    public void setAddressCoordinate(AddressCoordinate addressCoordinate) {
        this.addressCoordinate = addressCoordinate;
    }

    public MechanicPrice getMechanicPrice() {
        return mechanicPrice;
    }

    public void setMechanicPrice(MechanicPrice mechanicPrice) {
        this.mechanicPrice = mechanicPrice;
    }

    public int getNumber_of_customer() {
        return number_of_customer;
    }

    public void setNumber_of_customer(int number_of_customer) {
        this.number_of_customer = number_of_customer;
    }

    public String getJoin_date() {
        return join_date;
    }

    public void setJoin_date(String join_date) {
        this.join_date = join_date;
    }

    public MechanicContact getContact() {
        return contact;
    }

    public void setContact(MechanicContact contact) {
        this.contact = contact;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
