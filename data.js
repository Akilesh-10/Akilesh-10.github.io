/*
PORTFOLIO UPDATE GUIDE
Edit this file whenever a project or milestone changes.
Statuses: Planned, In Progress, Tested, Completed.
Add postLink after a real LinkedIn post and evidenceLink to code/results.
Do not mark planned work as completed.
*/
const portfolioData = {
 profile: {
  github: "https://github.com/Akilesh-10",
  linkedin: "https://www.linkedin.com/in/akilesh-m-b138642b8/",
  email: "",
  resume: "",
  lastUpdated: "October 2026"
 },
 vlsiProjects: [
  {number:"VLSI · 01",title:"SPI Master Controller",status:"Planned",summary:"Roadmap project to develop an SPI master controller, validate RTL behaviour, and document the design and test process.",technologies:["Verilog","RTL","Simulation"],evidenceLink:"",postLink:"",nextStep:"Define the specification, interface signals and test cases."},
  {number:"VLSI · 02",title:"AES-128 Hardware Design",status:"Planned",summary:"Planned cryptographic hardware project focused on modular RTL development and functional verification.",technologies:["RTL Design","Verification","ASIC Flow"],evidenceLink:"",postLink:"",nextStep:"Break the design into blocks and define a verification plan."},
  {number:"VLSI · 03",title:"AXI / RISC-V Design Exploration",status:"Planned",summary:"Longer-term roadmap item for exploring processor and bus-interface design. Scope and implementation will be documented as it develops.",technologies:["Digital Design","RTL","Computer Architecture"],evidenceLink:"",postLink:"",nextStep:"Choose a manageable first milestone and confirm the scope."}
 ],
 embeddedProjects: [
  {number:"EMB · 01",title:"Universal Sensor Driver Framework",status:"Planned",summary:"Create reusable sensor-driver interfaces and document initialisation, reads, error handling and testing.",technologies:["Embedded C","I²C / SPI","Drivers"],evidenceLink:"",postLink:"",nextStep:"Choose the first sensor and record its interface and expected readings."},
  {number:"EMB · 02",title:"Real-Time Sensor Scheduler",status:"Planned",summary:"Explore periodic sensor sampling, timing behaviour and a clear separation between acquisition and processing.",technologies:["MCU Timers","Scheduling","Embedded C"],evidenceLink:"",postLink:"",nextStep:"Define sample intervals and a simple timing test."},
  {number:"EMB · 03",title:"Embedded Signal Processing Engine",status:"Planned",summary:"Develop small signal-processing functions and validate them with recorded or generated sample data.",technologies:["C","Signal Processing","Testing"],evidenceLink:"",postLink:"",nextStep:"Choose a signal and establish a reference result."},
  {number:"EMB · 04",title:"Real-Time FFT Analyzer",status:"Planned",summary:"Sample a signal, compute its frequency spectrum and compare results against a known input.",technologies:["FFT","ADC","Embedded C"],evidenceLink:"",postLink:"",nextStep:"Select the sampling method and FFT implementation."},
  {number:"EMB · 05",title:"Embedded Feature Extraction Engine",status:"Planned",summary:"Explore compact signal features such as mean, RMS, peak and frequency-related measurements.",technologies:["Signal Features","C","Testing"],evidenceLink:"",postLink:"",nextStep:"Define a small set of features and test vectors."},
  {number:"EMB · 06",title:"Reliable STM32–ESP32 Communication",status:"Planned",summary:"Build a reliable communication layer between a microcontroller and wireless module, including message framing and error handling.",technologies:["STM32","ESP32","UART"],evidenceLink:"",postLink:"",nextStep:"Specify a message format and test normal and invalid messages."},
  {number:"EMB · 07",title:"ESP32 Wi-Fi Connectivity Manager",status:"Planned",summary:"Design connection, reconnection and connection-status handling for an ESP32-based system.",technologies:["ESP32","Wi-Fi","State Machines"],evidenceLink:"",postLink:"",nextStep:"Map connection states and recovery transitions."},
  {number:"EMB · 08",title:"MQTT Communication Gateway",status:"Planned",summary:"Explore publishing sensor data to an MQTT broker and handling connection loss and reconnection.",technologies:["MQTT","IoT","ESP32"],evidenceLink:"",postLink:"",nextStep:"Publish a small test payload and record safe, non-secret configuration details."},
  {number:"EMB · 09",title:"TLS-Protected Communication",status:"Planned",summary:"Add transport security to an IoT communication path and document certificate validation and connection testing.",technologies:["TLS","MQTT","Security"],evidenceLink:"",postLink:"",nextStep:"Define a safe test setup and verify certificate validation."},
  {number:"EMB · 10",title:"OTA Firmware Update System",status:"Planned",summary:"Roadmap project for a controlled firmware update flow, including validation and failure recovery.",technologies:["Firmware","ESP32","Reliability"],evidenceLink:"",postLink:"",nextStep:"Document update states, validation and rollback requirements."},
  {number:"EMB · 11",title:"TinyML Edge Intelligence Engine",status:"Planned",summary:"Explore a small on-device inference task with measurable inputs, outputs, memory and latency.",technologies:["TinyML","Embedded AI","Measurement"],evidenceLink:"",postLink:"",nextStep:"Choose a small dataset and a realistic target task."},
  {number:"EMB · 12",title:"Industrial IoT Monitoring Dashboard",status:"Planned",summary:"Build a simple monitoring view for sensor readings and device status, based on real data from earlier modules.",technologies:["IoT","Telemetry","Dashboard"],evidenceLink:"",postLink:"",nextStep:"Define the telemetry schema and minimum useful dashboard."},
  {number:"EMB · 13",title:"Secure Self-Healing Edge Sensor Node",status:"Planned",summary:"Planned integration project bringing selected sensing, communication, security and recovery modules together. This remains a roadmap item until implemented and tested.",technologies:["STM32","ESP32","IoT","Reliability"],evidenceLink:"",postLink:"",nextStep:"Integrate only modules that have been implemented and tested."}
 ],
 updates: [
  {date:"Starting point",title:"Portfolio foundation created",description:"Website and project roadmap are in place. Projects are intentionally marked Planned until implementation evidence is added.",link:""}
 ]
};
