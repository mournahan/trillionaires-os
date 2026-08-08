---
title: "Jeep Autonomy Retrofit (ACC)"
status: "Ideation"
category: "Automotive & Mechanical"
lastUpdated: "2026-08-02"
---

# Project: Jeep Autonomy Retrofit (ACC)
**Status**: Ideation
**Category**: Automotive & Mechanical
**Target Vehicles**: 2020 Jeep Gladiator Rubicon, 2007 Jeep Wrangler

## Initial Concept
Build an aftermarket Adaptive Cruise Control (ACC) that reads local speed limits via Google Maps API and actively throttles the Jeeps to match the speed limit using a Bluetooth OBD2 adapter and JScan protocols.

## Technical Feasibility & Risks
1. **The SGW Block (2020 Gladiator)**: All 2018+ FCA (Jeep/Dodge) vehicles are locked behind a Security Gateway Module (SGW). While OBD2 Bluetooth adapters can read data, they cannot write/command the Powertrain Control Module (PCM) without a physical SGW bypass cable installed behind the radio.
2. **The Latency Trap (Bluetooth)**: Drive-by-wire control over Bluetooth is highly dangerous. If the phone drops the Bluetooth connection or the Google Maps API lags while approaching a corner, the vehicle could lock into open throttle.
3. **OBD2 Limitations**: The standard OBD2 port is heavily filtered by the gateway. Direct control over the electronic throttle body or brakes usually requires intercepting the CAN bus directly at the Electronic Stability Control (ESC) or Forward Facing Camera (FFC) harnesses, not through the diagnostic port.

## The Viable Alternative: The Comma.ai / OpenPilot Route
Instead of routing through JScan and OBD2, the project should pivot to utilizing **OpenPilot** architecture. 
- It physically intercepts the CAN bus at the windshield camera harness (bypassing the OBD2 limits).
- It runs on dedicated hardware (not a smartphone over Bluetooth) for millisecond-latency safety.
- It can be modified (forked) to read speed limits from OpenStreetMap/Google and adjust the set speed autonomously.
