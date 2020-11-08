import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss']
})
export class MiddleSectionComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="ni ni-bold-left"></i>', '<i class="ni ni-bold-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  packages: any = [
    {
      id: 1,
      image: "../../assets/stock_images/integrated-circuit-computer-arduino-technology.jpg",
      title: "Ultimate Project Guide - Arduino",
      price: 2499,
      des: "Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board.",
      requirements: [
        "Basic Knowledge of C",
        "Circuit Simulation",
        "Basic Electronics",
        "A Laptop or Computer"
      ],
      contents: [
        "Exploring ATmega328P",
        "DHT11 & DHT22 - Temperature & Humidity Sensor",
        "BMP 180 - Pressure Sensor",
        "FC-37 Rain Sensor",
        "YL-69/HL-69 Soil Moisture Sensor",
        "DS1307/DS3231 Real Time Clock (RTC)",
        "MQ-2 Gas/Smoke Sonsor",
        "HC-SR04 Ultrasonic Sensor",
        "PIR Motion Sensor",
        "Tilt Sensor",
        "Microphone Sound Sensor",
        "Reed Switch",
        "MRFC522 RFID Sensor",
        "Relay Module",
        "ESP8266 WiFi Module",
        "433 MHz Transmitter + Receiver",
        "OLED Display",
        "SIM900 GSM / GPRS Module",
        "TCS3200 Color Sensor",
        "HC-05 Bluetooth Module",
        "Infrared (IR) Sensor"
      ]
    },
    {
      id: 2,
      image: "../../assets/stock_images/ionic1.jpeg",
      title: "Ionic 5 - Build iOS, Android Apps",
      price: 3999,
      des: "Ionic is one of the most exciting technologies you can learn at the moment - it enables you to use one codebase (written in HTML, JS and CSS) to build and ship apps as normal web apps as well as real native mobile apps for iOS and Android. Use your existing Angular, HTML, JS and CSS knowledge and build your native mobile app with that! Ionic offers a lot of beautiful components(which you'll learn about in this course) that can be used to compose native-like user interfaces.",
      requirements: [
        "Knowledge of Angular(Type Script)",
        "Circuit Simulation",
        "Basic Electronics",
        "A Laptop or Computer (min. 8GB RAM)"
      ],
      contents: [
        "Angular Refresher",
        "Ionic Components Basics",
        "Angular + Ionic",
        "Building Native Apps with Capacitor",
        "Debugging",
        "Navigation & Routing in Ionic App",
        "Styling & Theming Ionic Apps",
        "Handling User Input",
        "Managing State",
        "Sending Http Requests",
        "Adding Google Maps",
        "Using Native Device Features (Camera & Location)",
        "Adding Authentication",
        "Publishing the Apps"
      ],
      forWhoseThisCourse: [
        "This course is for students who want to use their Angular knowledge to build native mobile apps & web apps with one codebase",
        "This course is for everyone interested in diving into the development of native mobile apps for iOS and Android"
      ]
    },
    {
      id: 3,
      image: "../../assets/stock_images/angular.png",
      title: "Angular 9+ Complete Boot Camp",
      price: 3999,
      des: "This is a course for beginners and professionals alike to learn Angular 9 and how to build web applications with Angular. This course will teach you Angular 9 and literally take you from knowing nothing, to learning the fundamentals, and walking through hands-on Live Examples... so that you can learn to code, and build websites and real-world web apps.",
      requirements: [
        "Angular fundamentals are required, though a brief refresher is also provided in the course",
        "Basic HTML, JS and CSS/SCSS/SASS knowledge is required",
        "A Laptop or Computer (min. 8GB RAM)",
        "NO advanced Angular knowledge is required"
      ],
      contents: [
        "Angular Refresher",
        "Ionic Components Basics",
        "Angular + Ionic",
        "Building Native Apps with Capacitor",
        "Debugging",
        "Navigation & Routing in Ionic App",
        "Styling & Theming Ionic Apps",
        "Handling User Input",
        "Managing State",
        "Sending Http Requests",
        "Adding Google Maps",
        "Using Native Device Features (Camera & Location)",
        "Adding Authentication",
        "Publishing the Apps to PlayStore / AppStore"
      ],
      forWhoseThisCourse: [
        "Web Developers",
        "Front-End Developers",
        "UI / UX Developers",
        "Full-Stack Developers"
      ]
    },
    // {
    //   id: 4,
    //   image: "../../assets/stock_images/flutter.jpeg",
    //   title: "Flutter & Dart - The Complete Guide",
    //   price: 4499,
    //   des: "Flutter is a newcomer to the mobile development scene.  Strongly supported by Google, it is already viewed as an ideal platform for replacing native Swift and Android development. Flutter apps are created using the language Dart.  No problem if you're not already familiar with Dart; this course includes a lightning fast introduction to Dart at the beginning, along with hours of bonus lectures at the end of the course solely focused on Dart and its advanced features.  If you come from a background working with Java, Ruby, or Javascript, you'll feel right at home with Dart - the syntax is nearly identical, only a few core concepts need to be learned.",
    //   requirements: [
    //     "A Laptop or Computer (min. 8GB RAM).",
    //   ],
    //   contents: [
    //     "Understand the Dart language and its primary features",
    //     "Store information for long periods of time on the user's device with offline storage",
    //     "Learn how to optimize network requests for improved performance on mobile networks",
    //     "Delight your users with complex animations",
    //     "Expose the functionality of your apps with multi-screen navigation",
    //     "Steer through the incredible amount of Flutter documentation",
    //     "Master Reactive Programming with streams by using RxDart",
    //     "Implement advanced design patterns advocated by Google's official Flutter team",
    //     "Handle user input with form validation",
    //     "Learn to build open source Dart packages and distribute them to other developers."
    //   ],
    //   forWhoseThisCourse: [
    //     "Web Developers",
    //     "Developers looking to build quality apps with Flutter",
    //     "UI / UX Developers",
    //     "Full-Stack Developers"
    //   ]
    // },
    // {
    //   id: 5,
    //   image: "../../assets/stock_images/reactjs.png",
    //   title: "React Js & Firebase",
    //   price: 4499,
    //   des: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    //   requirements: [
    //     "Good knowledge of Javascript, HTML, CSS",
    //     "ES6 knowledge is required!",
    //     "A Laptop or Computer (min. 8GB RAM).",
    //   ],
    //   contents: [
    //     "With React JS framework, we will create initial layout, first pages and routing.",
    //     "To make our application dynamic and up to the standards we need database. Database we will use in this course is cloud Firestore from Firebase.",
    //     "How to login and register with firebase.",
    //     "Users can create service and where i get you familiar with form validation.",
    //     "Later we will be creating functionality to trade services between the users."
    //   ],
    //   forWhoseThisCourse: [
    //     "Developers new to React JS & Firebase",
    //     "Web Developers",
    //     "Developers looking to build quality Web-Apps with React Js",
    //     "Experienced developers looking to hone their (c) React JS & Firebase skills People eager to learn new knowledge",
    //     "Full-Stack Developers"
    //   ]
    // }
  ];

  whatNeededArray: any = [
    "Spoken and Written English Proficiency",
    "Min. Education - 12th Grade or equivalent",
    "No Coding Background Required",
    "Amenities - Laptop, Internet, Electricity",
    "2-3 hours Commitment on every weekend",
    "Willing to learn personality",
    "Looking for Job Immediately after Course Completion",
    "Passionate & Creative"
  ];

  constructor() { }

  ngOnInit() {
  }

}
