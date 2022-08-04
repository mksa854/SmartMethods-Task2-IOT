#include <Servo.h>

Servo myservo;
int pos = 0;

void setup()

{
  Serial.begin(115200);
  myservo.attach(9);
}

void loop() {

  if (Serial.available() > 0){
    String commend = Serial.readString();
    if (commend == "RIGHT" || commend == "يمين"||commend == "right"){
      pos=0;
      delay(100);
      myservo.write(pos);
    } if (commend == "LEFT" || commend == "يسار" || commend == "left"){
      pos=180;
      delay(100); 
      myservo.write(pos);
    }
  }}
 //<!-- © Copyright 2022 - Written By Manar -->
