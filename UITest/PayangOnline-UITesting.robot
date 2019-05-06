*** Settings ***
Library  SeleniumLibrary
# Library  BuiltIn
# Library  String

# Suite Teardown  Close Browser

*** Variable ***
${url_payangOnline}  https://payangonline.me/
${mechanic_username}  nawin01
${mechanic_password}  nawin01
${customer_username}  kitti01
${customer_password}  kitti01

*** Test Cases ***
Login ในส่วนของCustomer
    เปิดหน้าแรกของเว็บPayangOnline
	เลือกLoginของCustomer
    กรอกUsernameและPasswordของCustomer
	ต้องเจอSignOutของCustomer
	Close Browser

Login ในส่วนของMechanic
    เปิดหน้าแรกของเว็บPayangOnline
    เลือกLoginของMechanic
	กรอกUsernameและPasswordของMechanic
	ต้องเจอSignOutของMechanic
	Close Browser

Searchคำว่าmainต้องเจอMainShopร้านเดียว
	เปิดหน้าแรกของเว็บPayangOnline
	เข้าไปพิมในช่องSearch
	ต้องเจอร้านเดียว
	Close Browser

SignOutจากCustomerแล้วNavbarเปลี่ยนกลับ
	เปิดหน้าแรกของเว็บPayangOnline
	เลือกLoginของCustomer
    กรอกUsernameและPasswordของCustomer
	ต้องเจอSignOutของCustomer
	กด​SignOutแล้วกลับมาหน้าแรก
	Close Browser

SignOutจากMechanicแล้วNavbarเปลี่ยนกลับ
	เปิดหน้าแรกของเว็บPayangOnline
	เลือกLoginของMechanic
    กรอกUsernameและPasswordของMechanic
	ต้องเจอSignOutของMechanic
	กด​SignOutแล้วกลับมาหน้าแรก
	Close Browser

*** Keywords ***
# ต้องเจอข้อมูลในหน้าแรกจำนวน 10 เรื่อง
# 	#${count} =  Get ELement Count  xpath://div/div/article
# 	#Should Be True  ${count} == 10
# 	Page Should Contain Element  xpath://div/div/article  limit=10
# ค้นหาคำว่าสอบ
# 	Click Element  xpath://div/div[2]/span[1]/a[1]
# 	Input Text  name:s  สอบ
# 	Press Keys  None  RETURN


เปิดหน้าแรกของเว็บPayangOnline
    Open Browser  ${url_payangOnline}  browser=chrome

# Login ในส่วนของCustomer
เลือกLoginของCustomer
    Click Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[2]/div[3]
	Click Element  xpath://*[@id="root"]/div/div/div[2]/div/div/div/div[1]/button
กรอกUsernameและPasswordของCustomer
	Input Text  name:username  ${customer_username}
	Input Text  name:password  ${customer_password}
	Click Element  xpath://*[@id="root"]/div/div/div[2]/div/div/div/div[3]/form/div/div[3]/button
ต้องเจอSignOutของCustomer
	Wait Until Page Contains Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[2]/div[2]/h6

# Login ในส่วนของMechanic
เลือกLoginของMechanic
	Click Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[2]/div[3]
	Click Element  xpath://*[@id="root"]/div/div/div[2]/div/div/div/div[2]/button
กรอกUsernameและPasswordของMechanic
	Input Text  name:username  ${mechanic_username}
	Input Text  name:password  ${mechanic_password}
	Click Element  xpath://*[@id="root"]/div/div/div[2]/div/div/div/div[3]/form/div/div[3]/button
ต้องเจอSignOutของMechanic
	Wait Until Page Contains Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[3]/div/h6

# Searchคำว่าmainต้องเจอMainShopร้านเดียว
เข้าไปพิมในช่องSearch
	Click Element  xpath://*[@id="root"]/div/div/div[2]/div/div/div[4]/div/a/p
	Input Text  class:search_input  main
ต้องเจอร้านเดียว
	Page Should Contain Element  class:mechanic-wrapper  limit=1

# SignOutจากCustomerแล้วNavbarเปลี่ยนกลับ
กด​SignOutแล้วกลับมาหน้าแรก
	Sleep  10s
	Click Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[2]/div[2]
	Wait Until Page Contains Element  xpath://*[@id="root"]/div/div/div[1]/div/div/div[2]/div[3]/a