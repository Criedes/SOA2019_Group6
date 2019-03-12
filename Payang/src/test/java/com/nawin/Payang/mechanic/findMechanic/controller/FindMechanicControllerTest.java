package com.nawin.Payang.mechanic.findMechanic.controller;

import com.nawin.Payang.customer.findMechanic.service.CustomerInfo;
import com.nawin.Payang.mechanic.findMechanic.model.MechanicData;
import com.nawin.Payang.mechanic.findMechanic.service.MechanicInfo;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FindMechanicControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getAllMechanic() {
        MechanicInfo response = restTemplate.getForObject("/mechanics/all", MechanicInfo.class);
        assertEquals(response, new MechanicInfo());
    }

    @Test
    public void getAllCustomer() {
        CustomerInfo response = restTemplate.getForObject("/customer/all", CustomerInfo.class);
        assertEquals(response, new CustomerInfo());
    }
}