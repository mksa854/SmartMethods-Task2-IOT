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
    if (commend == "RIGHT" || commend == "Ì„Ì‰"||commend == "right"){
      pos=0;
      delay(100);
      myservo.write(pos);
    } if (commend == "LEFT" || commend == "Ì”«—" || commend == "left"){
      pos=180;
      delay(100); 
      myservo.write(pos);
    }
  }}