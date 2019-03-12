package com.nawin.Payang.mechanic.findMechanic.controller;

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
    Map<String, MechanicData> mechanicList = new HashMap<String, MechanicData>();
    MechanicData a5kei8d790fw09bvcoevc = new MechanicData(
            "jameonline","cf23df2207d99a74fbe169e3eba035e633b65d94","Chang James Shop"
            ,"Bratt Pitch","29.001993213","18.09002313"
            ,90.0,120.0,20,"Khaosan Road, Bangkok"
            ,"12/1/2019","099-9999999","rubber01","0"
    );
    MechanicData a5kei8d790fw09sdfsdf = new MechanicData(
            "koonnatei","cd33df2207d99a74fbe169e22ba035e633b65dow","Koon Shop"
            ,"Puncha Puns","29.77993213","12.09002313"
            ,70.0,100.0,2,"Ladkrabang, Bangkok"
            ,"11/1/2019","099-2199999","pun221","0"
    );

    @Test
    public void getAllMechanic() {
        mechanicList.put("a5kei8d790fw09bvcoevc",a5kei8d790fw09bvcoevc);
        mechanicList.put("a5kei8d790fw09sdfsdf",a5kei8d790fw09sdfsdf);
        MechanicInfo response = restTemplate.getForObject("/mechanics/all", MechanicInfo.class);
        assertSame(response.getMechanicList(), mechanicList);


    }
}