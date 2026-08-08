---
title: "Holdover Sentinel"
status: "Prototyping"
category: "Physical Hardware & IOT"
lastUpdated: "2026-08-02"
---

# Project: Holdover Sentinel
**Status**: Prototyping
**Category**: Physical Hardware & IOT

## Hardware Architecture
- **Microcontroller**: ESP32 WROVER (specifically the **tCam-Mini rev4 External Antenna** board).
  - *Why tCam-Mini External Antenna?* Allows the main PCB to be sealed inside a weatherproof enclosure while running the Wi-Fi antenna outside for maximum range.
- **Thermal Camera**: FLIR Lepton 3.5.
- **Telemetry/Modem**: Iridium RockBLOCK 9603 (Short Burst Data).
- **Actuator**: 360-Degree Proportional Servo (or 1-turn/2-turn sail winch servo). *Note: Must be proportional to retain absolute position control. A standard continuous rotation servo will not work.*

## Weatherproofing & Enclosure
- **The Window Trap**: Standard glass and clear plastics completely block thermal radiation. The Lepton cannot "see" through a standard weatherproof box.
- **Solution**: To maximize viewing quality and allow for easy replacement, the thermal camera will plug into a socket mounted on the **outside** of the weatherproof enclosure. The socket/wiring pass-through will be sealed with a rubber O-ring or potting compound to maintain the enclosure's waterproof rating while keeping the camera module external.

## Power Infrastructure
- **Source Power**: 48V DC Bus (from EG4 solar controllers).
- **Voltage Regulation**: Requires a heavy-duty, enclosed DC-DC Buck Converter (48V to 5V, rated for at least 3 Amps) to handle the massive 500mA transmission spikes of the Iridium modem and the stall currents of the Servo.
- **Local Battery Backup**: 12V 10Ah LiFePO4 Battery. (Steps down to 5V). Provides roughly 5 days of runtime.

## Software Architecture
The firmware operates as a dual-state machine to conserve battery while maintaining high security.

### 1. Setup/Wi-Fi Mode
- Runs for the first 10 minutes after boot.
- Wi-Fi Access Point (`Holdover_Sentinel_Config`) is active.
- Streams live thermal video via WebSockets to a browser-based UI.
- Allows user to set alert thresholds, minimum/maximum scaling temperatures, and verify servo limits.

### 2. Surveillance Mode (Low Power)
- Activates automatically after 10 minutes.
- Wi-Fi radio is disabled to save ~100mA continuous.
- Sweeps the camera in 45-degree increments (12.5% of a 360-degree circle).
  - *Note: A 45-degree sweep perfectly overlaps the Lepton's 57-degree horizontal field of view by 12 degrees, ensuring no blind spots.*
- Takes a thermal frame every 10 seconds.
- Scans for pixels exceeding the user-defined threshold.
- If threshold is exceeded, powers up the Iridium Modem and transmits a payload containing: Max Temp, Current Servo Angle, and Battery Voltage.

### 3. Telemetry (Iridium SBD)
- **Image Transmission**: Highly impractical. SBD is limited to 340 bytes per message. A compressed Lepton image is ~4,000 bytes. This would require 15 sequential messages taking several minutes and costing ~$2.00 per image.
- **Data Transmission**: Alert texts (`FIRE! Temp: 250F, Pos: 45deg, Batt: 12.4V`) are instantaneous, tiny, and cheap.
- **Heartbeat**: The Sentinel transmits a 24-hour heartbeat containing current battery voltage (read via an analog voltage divider circuit).
