package com.nawin.Payang.mechanic.findMechanic.controller;

import com.nawin.Payang.customer.findMechanic.model.CustomerData;
import com.nawin.Payang.customer.findMechanic.service.CustomerInfo;
import com.nawin.Payang.mechanic.findMechanic.model.MechanicData;
import com.nawin.Payang.mechanic.findMechanic.service.MechanicInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class FindMechanicController {

    private MechanicInfo mechanicInfo = new MechanicInfo();
    private CustomerInfo customerInfo = new CustomerInfo();

    @GetMapping("mechanics/{id}")
    public Map<String, MechanicData> getAllMechanic(@PathVariable String id){
        System.out.println(id);
        if(id.equals("all")){
            System.out.println(mechanicInfo.getMechanicList());
            return mechanicInfo.getMechanicList();
        }
        return null;
    }

    @GetMapping("customer/{id}")
    public Map<String, CustomerData> getAllCustomer(@PathVariable String id){
        System.out.println(id);
        if(id.equals("all")){
            System.out.println(customerInfo.getCustomerList());
            return customerInfo.getCustomerList();
        }
        return null;
    }

}
