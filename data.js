/*
PORTFOLIO CONTENT UPDATE GUIDE
Edit this file when project status changes or you publish a real milestone.
Statuses supported: Planned, In Progress, Tested, Completed.
Add evidenceLink and postLink only when the links exist and are safe to share.
Never expose client/employer confidential code, credentials, private data or licensed tool materials.
*/
const portfolioData = {
  profile: {
    github: "https://github.com/Akilesh-10",
    linkedin: "https://www.linkedin.com/in/akilesh-m-b138642b8/",
    email: "", // Add the public email address you want visitors to use.
    lastUpdated: "October 2026"
  },
  vlsiProjects: [
    {number:"VLSI · 01",title:"SPI Master Controller ASIC",status:"Planned",summary:"Planned RTL-to-ASIC project for an SPI master controller, with specification, RTL implementation, verification and flow evidence added as each stage is completed.",technologies:["Verilog","RTL","Simulation","ASIC Flow"],evidenceLink:"",postLink:"",nextStep:"Define SPI mode support, interface signals, reset behaviour and a test plan."},
    {number:"VLSI · 02",title:"AES-128 ASIC",status:"Planned",summary:"Planned hardware implementation of AES-128, developed in manageable blocks with documented functional verification and implementation results.",technologies:["RTL Design","SystemVerilog","Verification"],evidenceLink:"",postLink:"",nextStep:"Define the architecture, module boundaries and reference test vectors."},
    {number:"VLSI · 03",title:"AXI / RISC-V ASIC Exploration",status:"Planned",summary:"Longer-term digital design project exploring processor and bus-interface concepts. The scope and validated milestones will be documented as implementation progresses.",technologies:["Digital Design","RTL","Computer Architecture"],evidenceLink:"",postLink:"",nextStep:"Choose a practical first milestone and define its measurable acceptance criteria."}
  ],
  embeddedProjects: [
    {number:"EMB · 01",title:"Universal Sensor Driver Framework",status:"Planned",summary:"Reusable sensor-driver interfaces with documented initialisation, readings, error handling and test cases.",technologies:["Embedded C","I²C / SPI","Drivers"],evidenceLink:"",postLink:"",nextStep:"Select the first sensor and record its register/interface requirements."},
    {number:"EMB · 02",title:"Real-Time Sensor Scheduler",status:"Planned",summary:"Periodic sensor sampling and timing behaviour, with acquisition separated from processing.",technologies:["MCU Timers","Scheduling","Embedded C"],evidenceLink:"",postLink:"",nextStep:"Define sampling intervals and a timing-validation method."},
    {number:"EMB · 03",title:"Embedded Signal Processing Engine",status:"Planned",summary:"Small signal-processing functions validated against generated or recorded sample data.",technologies:["C","Signal Processing","Testing"],evidenceLink:"",postLink:"",nextStep:"Choose a signal and calculate reference results."},
    {number:"EMB · 04",title:"Real-Time FFT Analyzer",status:"Planned",summary:"Signal acquisition and frequency-spectrum analysis compared against known input signals.",technologies:["FFT","ADC","Embedded C"],evidenceLink:"",postLink:"",nextStep:"Choose a sampling method and FFT implementation."},
    {number:"EMB · 05",title:"Embedded Feature Extraction Engine",status:"Planned",summary:"Compact signal features such as mean, RMS, peak and frequency-related measurements.",technologies:["Signal Features","C","Testing"],evidenceLink:"",postLink:"",nextStep:"Define a feature set and test vectors."},
    {number:"EMB · 06",title:"Reliable STM32–ESP32 Communication",status:"Planned",summary:"Communication layer with message framing, validation, error handling and documented tests.",technologies:["STM32","ESP32","UART"],evidenceLink:"",postLink:"",nextStep:"Specify a message format and normal/invalid-message tests."},
    {number:"EMB · 07",title:"ESP32 Wi-Fi Connectivity Manager",status:"Planned",summary:"Connection, reconnection and connection-status handling for an ESP32-based device.",technologies:["ESP32","Wi-Fi","State Machines"],evidenceLink:"",postLink:"",nextStep:"Map connection states and recovery transitions."},
    {number:"EMB · 08",title:"Secure MQTT Communication Gateway",status:"Planned",summary:"MQTT telemetry with connection management and documented failure/reconnection tests.",technologies:["MQTT","IoT","ESP32"],evidenceLink:"",postLink:"",nextStep:"Define a small telemetry schema and a safe test broker setup."},
    {number:"EMB · 09",title:"Secure Communication Layer (TLS)",status:"Planned",summary:"TLS-protected IoT communication with certificate validation and connection testing.",technologies:["TLS","MQTT","Security"],evidenceLink:"",postLink:"",nextStep:"Define certificate-validation checks and a safe test environment."},
    {number:"EMB · 10",title:"OTA Firmware Update System",status:"Planned",summary:"Controlled firmware update flow including image validation, failure handling and recovery requirements.",technologies:["Firmware","ESP32","Reliability"],evidenceLink:"",postLink:"",nextStep:"Document update states, integrity checks and rollback behaviour."},
    {number:"EMB · 11",title:"TinyML Edge Intelligence Engine",status:"Planned",summary:"Small on-device inference task with measurable input/output behaviour, memory and latency.",technologies:["TinyML","Embedded AI","Measurement"],evidenceLink:"",postLink:"",nextStep:"Select a compact task and establish baseline measurements."},
    {number:"EMB · 12",title:"Industrial IoT Monitoring Dashboard",status:"Planned",summary:"Monitoring view for sensor readings and device status based on real telemetry from preceding modules.",technologies:["IoT","Telemetry","Dashboard"],evidenceLink:"",postLink:"",nextStep:"Define telemetry fields and the minimum useful dashboard."},
    {number:"EMB · 13",title:"Secure Self-Healing Edge Sensor Node",status:"Planned",summary:"Integration project intended to bring selected sensing, communication, security and recovery modules together. It remains a roadmap item until implemented and validated.",technologies:["STM32","ESP32","IoT","Reliability"],evidenceLink:"",postLink:"",nextStep:"Integrate only modules that have been implemented and tested."}
  ],
  pcbProjects: [
    {number:"PCB · 01",title:"SECEN-1 — Secure Self-Healing Edge AI Sensor Controller",status:"Planned",summary:"Portfolio project for a four-layer embedded controller PCB using Cadence Allegro and OrCAD Capture, covering schematic, placement, routing, grounding, decoupling and DRC. Update status only after checking the design files and evidence.",technologies:["Cadence Allegro","OrCAD Capture","4-layer PCB"],evidenceLink:"",postLink:"",nextStep:"Add a shareable schematic/layout screenshot and DRC evidence when available."},
    {number:"PCB · 02",title:"STM32 Environmental Sensor Interface",status:"Planned",summary:"Two-layer STM32-based sensor-interface PCB planned in KiCad, covering schematic capture, power distribution, interfaces, routing and DRC.",technologies:["KiCad","STM32","2-layer PCB"],evidenceLink:"",postLink:"",nextStep:"Add the design files, rendered board view and DRC report when ready."}
  ],
  services: [
    {icon:"⌁",title:"Digital VLSI & RTL Design",summary:"Small, clearly scoped digital design tasks and project support.",items:["Verilog RTL modules and basic digital logic","Testbench development, simulation and waveform debugging","RTL documentation and reproducible test cases","ASIC-flow learning/project tasks within agreed tool access and scope"],scope:"Scope and tool availability confirmed before acceptance"},
    {icon:"⌘",title:"SystemVerilog & Verification Support",summary:"Verification-oriented tasks sized to the specification and available environment.",items:["Test scenarios and testbench structure","SystemVerilog exercises and debugging","Assertions or UVM tasks only where the required level can be demonstrated","Simulation result review and concise documentation"],scope:"Advanced verification accepted only when capability and access fit"},
    {icon:"⚙",title:"Embedded Firmware & MCU Integration",summary:"Firmware and peripheral tasks for microcontroller-based prototypes.",items:["Embedded C modules and debugging","STM32 / ESP32 peripheral integration","UART, I²C, SPI and sensor interfacing","Functional tests, issue reproduction and handover notes"],scope:"Hardware access and expected behaviour agreed first"},
    {icon:"⌁",title:"IoT & Device Connectivity",summary:"Sensor telemetry and connected-device prototypes.",items:["ESP32 Wi-Fi connectivity tasks","MQTT publish/subscribe integration","TLS configuration and certificate-validation testing","Device-to-dashboard prototype integration"],scope:"Security, deployment and production requirements explicitly scoped"},
    {icon:"▦",title:"PCB Design & Electronics Documentation",summary:"Schematic and board-design tasks with defined design constraints.",items:["Schematic capture and component placement","PCB routing and design-rule checks","Grounding, decoupling and interface review","Design documentation and manufacturing outputs where appropriate"],scope:"Fabrication-ready claims require completed checks and review"},
    {icon:"◈",title:"FPGA, Scripting & Technical Debugging",summary:"Small support tasks in areas that match the project requirements and available tools.",items:["Basic FPGA/digital logic exercises","Tcl or Python utility scripts for defined workflows","Test-log review and issue reproduction","Technical documentation and learning/project support"],scope:"Exact deliverables agreed after reviewing the problem statement"}
  ],
  experience: [
    {kind:"INTERNSHIP",title:"Pricol Limited",role:"Automotive electronics manufacturing exposure",description:"15-day internship focused on PCB assembly, testing and electronics manufacturing processes. Exposure included SMT and through-hole assembly, solder paste inspection, reflow, AOI, ICT/FCT, IC programming and production testing; an internship report and certificate were received.",tags:["PCB Assembly","Production Testing","Automotive Electronics"]},
    {kind:"TRAINING",title:"Entuple Technologies",role:"One-month training",description:"Training in Cadence tool basics and Verilog. SystemVerilog, UVM and deeper tool-flow practice are being developed separately.",tags:["Cadence Basics","Verilog"]},
    {kind:"EDUCATION",title:"KGiSL Institute of Technology",role:"B.E. Electronics & Communication Engineering · 2023–2027",description:"Undergraduate engineering studies with a focus on electronics, digital design and embedded systems.",tags:["ECE","2027 Batch"]},
    {kind:"EDUCATION",title:"IIT Madras",role:"BS in Data Science and Applications",description:"Online degree pursued alongside engineering studies, adding a data and AI perspective to hardware interests.",tags:["Data Science","AI"]},
    {kind:"HACKATHON",title:"CIT Chemovate",role:"Hackathon participation",description:"Participated in the Chemovate hackathon and explored a smart solar inverter concept. Present the work as participation/prototype exploration, not a fully validated product unless supporting evidence is available.",tags:["Prototype Exploration","Energy Systems"]}
  ],
  skills: [
    {title:"Digital VLSI & ASIC",items:["Verilog","SystemVerilog","RTL Design","Digital Logic","Simulation","Verification Fundamentals","ASIC Design Flow","Synthesis / Timing / Physical Design learning"]},
    {title:"Embedded Systems & Firmware",items:["Embedded C","STM32F407","ESP32-S3","Bare-metal concepts","UART","I²C","SPI","Sensor Interfacing","Firmware Debugging"]},
    {title:"PCB & Electronics",items:["Cadence Allegro","OrCAD Capture","KiCad","Schematic Capture","PCB Layout","Circuit Analysis","Grounding & Decoupling","DRC"]},
    {title:"Open-source VLSI & FPGA",items:["Yosys","NGSpice","Xschem","Magic","Netgen","KLayout","OpenROAD / OpenLane","Vivado / ISE","Gowin IDE"]},
    {title:"Programming & Engineering Tools",items:["C","Python","Tcl (learning/practice)","Linux","Git","STM32CubeIDE","OpenOCD","Problem Solving"]},
    {title:"Additional Technical Study",items:["Signal Processing","TinyML concepts","IoT / MQTT","Data Science","Machine Learning","Technical Documentation"]}
  ],
  completedCourses: [
    "SystemVerilog Accelerated Verification with UVM v1.2.6",
    "Essential SystemVerilog for UVM v1.2.6",
    "Xcelium Integrated Coverage v24.03",
    "SystemVerilog for Design and Verification v25.03",
    "Verilog Language and Application v29.0",
    "Xcelium Simulator v26.03",
    "Semiconductor 101 v3.0",
    "Allegro X PCB Editor Basic Techniques v25.1"
  ],
  learningAreas: [
    "Cadence RTL-to-GDSII flow and digital IC design",
    "Static timing analysis, synthesis and physical design",
    "SystemVerilog assertions, UVM and metric-driven verification",
    "Tcl scripting for EDA workflows",
    "DFT, formal/equivalence checking and signoff tools",
    "Allegro X / OrCAD PCB workflows",
    "Embedded C practice and microcontroller problem-solving"
  ],
  updates: [
    {date:"October 2026 · Starting point",title:"Portfolio foundation published",description:"Website structure and project roadmap are in place. Project statuses are being checked against implementation evidence before any are marked completed.",link:""}
  ]
};
// Expose the same portfolio data object to the home page and project detail template.
window.portfolioData = portfolioData;
