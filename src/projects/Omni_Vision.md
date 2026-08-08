---
title: "Omni-Spectrum Vision Rig"
status: "Ideation"
category: "Physical Hardware & Optics"
lastUpdated: "2026-08-02"
---

# Project: Omni-Spectrum Vision Rig
**Status**: Ideation
**Category**: Physical Hardware & Optics

## Objective
Build a multi-sensor "predator-style" vision system capable of seeing across the electromagnetic spectrum: Ultraviolet (UV), Visible Light, Near-Infrared (NIR), Short-Wave Infrared (SWIR), and Long-Wave Infrared (Thermal/LWIR) to reveal things invisible to the naked eye.

## Hardware Architecture Concepts
To cover the full spectrum, the rig requires at least **4 specialized sensors**, as different wavelengths physically require different lens materials and sensor chemistries.

### 1. The UV Camera (Ultraviolet)
- **Use Case**: Seeing bodily fluids, structural stress, electrical corona discharges, and specialized UV inks/tattoos (which ties into Courtney's UV tattoo work).
- **Hardware constraints**: Standard glass blocks UV light. This camera requires a specialized **Quartz lens** and a sensor with a strict UV bandpass filter.

### 2. The Visible/NIR Camera (Daylight & Night Vision)
- **Use Case**: Standard color vision and active IR illumination night vision.
- **Hardware constraints**: Can be achieved with a single high-quality CMOS sensor (like a Sony IMX series) equipped with a mechanical **IR-Cut switch**. During the day, the filter drops in for normal color. At night, it retracts to see 850nm/940nm IR illuminators.

### 3. The SWIR Camera (Short-Wave Infrared)
- **Use Case**: Seeing through thick fog, smoke, identifying moisture content in plants/soil, and seeing specific chemical signatures. 
- **Hardware constraints**: Requires an **InGaAs** (Indium Gallium Arsenide) sensor. These are incredibly powerful but historically very expensive (military/industrial grade).

### 4. The LWIR Camera (Thermal)
- **Use Case**: Seeing pure heat radiation (like the FLIR Lepton or Boson).
- **Hardware constraints**: Requires a Microbolometer sensor and a **Germanium lens** (since standard glass blocks heat radiation).

## Processing Unit
- **Requirement**: Stitching 4 disparate video streams together and running edge-AI (like overlaying heat signatures onto visible light) requires massive bandwidth.
- **Proposed Brain**: NVIDIA Jetson Orin Nano or Orin NX. An ESP32 cannot handle this; it requires a dedicated GPU edge-compute module.

## Budget Estimates (Prototyping)
- **Visible/NIR**: ~$50 - $100
- **LWIR (Thermal)**: ~$200 (Lepton) to $1,500 (Boson)
- **UV (Modified Sensor + Quartz Lens)**: ~$1,000 - $2,500
- **SWIR (InGaAs Sensor)**: ~$3,000 - $5,000 (Surplus) / $10,000+ (New)
- **NVIDIA Jetson Compute**: ~$500 - $1,000
- **Total Estimated Range**: **$5,000 to $15,000+** (The SWIR sensor represents the vast majority of the cost).

## Additional Sensor Considerations
To make this the ultimate observation rig, we could integrate:
1. **Polarization Camera**: Filters specific angles of light. Can completely erase glare on water to see straight to the bottom, reveal structural stress in plastics/glass, and highlight disturbed earth (useful for tracking).
2. **Event Camera (Neuromorphic Sensor)**: Mimics the optic nerve by only recording *changes* in light rather than frames. Can track hyper-fast objects (like a bullet or drone) at the equivalent of 10,000+ FPS with almost zero processing power.
3. **SDR (Software Defined Radio)**: While optical cameras cannot see Wi-Fi (radio waves are too long), we can use a directional SDR array (like a HackRF) to sweep the area for RF signals (Wi-Fi, Bluetooth, Cell) and have the Jetson processor overlay an artificial "Heat Map" of those signals directly onto the video feed.
