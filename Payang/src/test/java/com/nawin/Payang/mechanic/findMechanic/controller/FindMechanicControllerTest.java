package com.nawin.Payang.mechanic.findMechanic.controller;

import com.nawin.Payang.mechanic.findMechanic.service.MechanicInfo;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;

import static org.junit.Assert.*;

public class FindMechanicControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getAllMechanic() {
        MechanicInfo response = restTemplate.getForObject("/mechanics/all", MechanicInfo.class);
        assertEquals("hello :test", response.getMechanicList());

    }
}