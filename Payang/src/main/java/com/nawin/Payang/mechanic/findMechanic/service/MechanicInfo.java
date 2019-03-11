package com.nawin.Payang.mechanic.findMechanic.service;

import com.nawin.Payang.mechanic.findMechanic.controller.FindMechanicController;
import com.nawin.Payang.mechanic.findMechanic.model.MechanicData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MechanicInfo {

    Map<String, MechanicData> mechanicList = new HashMap<String, MechanicData>();
    public MechanicInfo(){
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
        mechanicList.put("a5kei8d790fw09bvcoevc",a5kei8d790fw09bvcoevc);
        mechanicList.put("a5kei8d790fw09sdfsdf",a5kei8d790fw09sdfsdf);

    }

    public Map<String, MechanicData> getMechanicList() {
        return mechanicList;
    }

    public void setMechanicList(Map<String, MechanicData> mechanicList) {
        this.mechanicList = mechanicList;
    }
}

